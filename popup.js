chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: () => {
      // Replace all email fields with fake data
      document.querySelectorAll('input[type="email"]').forEach(input => {
        input.value = faker.internet.email();
      });
    }
  });
});
