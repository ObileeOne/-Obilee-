// Function to scan message using Hugging Face's API
function scanWithHuggingFace(message) {
  const apiKey = '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'; // Your Hugging Face API key
  const modelEndpoint = 'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english'; // The model URL

  fetch(modelEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputs: message })
  })
  .then(response => response.json())
  .then(data => {
    if (data && data[0]) {
      const result = data[0];
      document.getElementById('scanResult').textContent = `Spam Detection Result: ${result.label || 'No spam detected'}`;
    } else {
      document.getElementById('scanResult').textContent = 'Error processing the message.';
    }
  })
  .catch(error => {
    document.getElementById('scanResult').textContent = 'Error scanning message.';
    console.error('Error:', error);
  });
}