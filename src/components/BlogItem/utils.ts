export const shortenText = (text: string, max = 250): string => (text.length > max ? `${text.substring(0, max)}...` : text);
