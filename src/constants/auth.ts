export const officialAPIEndpoint = 'https://chatgpt-api.shn.hk/v1/';
const customAPIEndpoint =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://api.openai.com/v1/chat/completions';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint];
