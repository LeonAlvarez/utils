import { HTMLElement, parseHTML } from 'linkedom';

const MESSAGE_HISTORY_SELECTOR = '.tgme_channel_history.js-message_history';
const MESSAGE_SELECTOR = `.tgme_widget_message.js-widget_message`;
const TEXT_SELECTOR = '.tgme_widget_message_text';
const PHOTO_SELECTOR = 'tgme_widget_message_photo_wrap';

export const channelExists = (document: any) => {
  return document.querySelector(MESSAGE_HISTORY_SELECTOR);
};

type ParsedMessage = {
  id: number;
  text: string | null;
  images: string[];
};

export const scrapeChannel = async (
  channel: string,
  lastParsed: number = 0,
) => {
  const url = `https://t.me/s/${channel}`;
  const res = await fetch(url);
  const text = await res.text();

  if (!text) {
    return null;
  }

  const { document } = parseHTML(text);

  if (!channelExists(document)) {
    return null;
  }

  const messages = Array.from(
    document.querySelectorAll(
      `${MESSAGE_HISTORY_SELECTOR} ${MESSAGE_SELECTOR}`,
    ),
  ) as HTMLElement[];

  const latestMessage = parseInt(
    messages.at(-1)?.getAttribute('data-post')?.split('/')[1],
  );

  if (latestMessage <= lastParsed) {
    return {
      latestMessage,
      messages: [],
    };
  }

  const parsed = messages.reduce((carry, message) => {
    const id = parseInt(message.getAttribute('data-post')?.split('/')[1]);
    if (id <= lastParsed) {
      return carry;
    }

    const text = message.querySelector(TEXT_SELECTOR)?.textContent;

    const photoElements = message.querySelectorAll(PHOTO_SELECTOR);

    const images = photoElements.reduce((carry, elem) => {
      const style = (elem as HTMLElement).getAttribute('style');

      if (!style) {
        return carry;
      }

      const image = style
        .split(`background-image:url(`)
        .at(-1)
        .replace(')', '')
        .replace(');', '');

      if (!image) {
        return null;
      }

      carry.push(image);

      return carry;
    }, [] as string[]);

    carry.push({
      id,
      text,
      images,
    });

    return carry;
  }, [] as ParsedMessage[]);

  return {
    latestMessage,
    messages: parsed,
  };
};