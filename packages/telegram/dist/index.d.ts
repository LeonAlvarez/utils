declare const channelExists: (document: any) => any;
type ParsedMessage = {
    id: number;
    text: string | null;
    images: string[];
};
declare const scrapeChannel: (channel: string, lastParsed?: number) => Promise<{
    latestMessage: number;
    messages: ParsedMessage[];
} | null>;

export { type ParsedMessage, channelExists, scrapeChannel };
