// Fetch EasyList rules (simplified example)
const blocklist = ['google-analytics.com', 'facebook.net', 'doubleclick.net'];

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (blocklist.some(tracker => details.url.includes(tracker))) {
      return { cancel: true }; // Block the request
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
