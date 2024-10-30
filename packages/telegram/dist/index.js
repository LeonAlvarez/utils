import { parseHTML } from 'linkedom';

// src/index.ts
var MESSAGE_HISTORY_SELECTOR = ".tgme_channel_history.js-message_history";
var MESSAGE_SELECTOR = `.tgme_widget_message.js-widget_message`;
var TEXT_SELECTOR = ".tgme_widget_message_text";
var PHOTO_SELECTOR = "tgme_widget_message_photo_wrap";
var DATE_TIME_SELECTOR = ".tgme_widget_message_date_time";
var channelExists = (document) => {
  return document.querySelector(MESSAGE_HISTORY_SELECTOR);
};
var scrapeChannel = async (channel, lastParsed = 0) => {
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
      `${MESSAGE_HISTORY_SELECTOR} ${MESSAGE_SELECTOR}`
    )
  );
  const latestMessage = parseInt(
    messages.at(-1)?.getAttribute("data-post")?.split("/")[1]
  );
  if (latestMessage <= lastParsed) {
    return {
      latestMessage,
      messages: []
    };
  }
  const parsed = messages.reduce((carry, message) => {
    const id = parseInt(message.getAttribute("data-post")?.split("/")[1]);
    if (id <= lastParsed) {
      return carry;
    }
    const text2 = message.querySelector(TEXT_SELECTOR)?.textContent;
    const sentAt = message.querySelector(DATE_TIME_SELECTOR).getAttribute("datetime");
    const photoElements = message.querySelectorAll(PHOTO_SELECTOR);
    const images = photoElements.reduce((carry2, elem) => {
      const style = elem.getAttribute("style");
      if (!style) {
        return carry2;
      }
      const image = style.split(`background-image:url(`).at(-1).replace(")", "").replace(");", "");
      if (!image) {
        return null;
      }
      carry2.push(image);
      return carry2;
    }, []);
    carry.push({
      id,
      text: text2,
      images,
      sentAt: new Date(sentAt)
    });
    return carry;
  }, []);
  return {
    latestMessage,
    messages: parsed
  };
};

export { channelExists, scrapeChannel };
