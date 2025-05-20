async function checkUrlSafety(url) {
  const API_KEY = 'YOUR_API_KEY';
  const response = await fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({
      client: { clientId: "PrivacyShield", clientVersion: "1.0" },
      threatInfo: {
        threatEntries: [{ url }],
        threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"]
      }
    })
  });
  const result = await response.json();
  return result.matches ? '⚠️ Dangerous!' : '✅ Safe';
}
