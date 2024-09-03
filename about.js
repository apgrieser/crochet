// Fetch the content of essay.html and insert it into the #essay-content div
fetch('about-essay.html')
    .then(response => {
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        // Convert the response to text
        return response.text();
    })
    .then(data => {
        // Insert the fetched content into the #essay-content div
        document.getElementById('essay-content').innerHTML = data;
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
    });
    
