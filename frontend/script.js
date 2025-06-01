document.getElementById('getMessageBtn').addEventListener('click', () => {
    fetch('http://localhost:5000/')  // Your backend URL
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerText = data;
        })
        .catch(error => {
            document.getElementById('message').innerText = 'Error fetching data';
            console.error('Error:', error);
        });
});
