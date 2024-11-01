// Example of how to trigger a cache refresh

async function testRefresh() {
    const response = await fetch('/api/blog/refresh', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.ADMIN_API_KEY}`
      }
    });

    const result = await response.json();
    console.log(result);
}

testRefresh();