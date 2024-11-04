(async () => {
const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'test@example.com',
      name: 'Test User'
    })
  })
  
  const data = await response.json()
})();
