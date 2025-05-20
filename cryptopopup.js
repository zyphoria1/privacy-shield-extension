// Install CryptoJS: npm install crypto-js (or use CDN)
import CryptoJS from 'crypto-js';

const encryptData = (data, password) => {
  return CryptoJS.AES.encrypt(data, password).toString();
};

// Save encrypted settings to Chrome storage
chrome.storage.local.set({ settings: encryptData('{"blockTrackers":true}', 'your-password') });
