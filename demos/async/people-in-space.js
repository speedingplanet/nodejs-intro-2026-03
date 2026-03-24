let url = 'http://api.open-notify.org/astros.json';

let pResponse = fetch(url);
let pData = pResponse.then((response) => {
	console.log('Got a response');
	console.log('Response object:', response);
	return response.json();
});

pData.then((astronauts) => {
	console.log('Astronauts: ', astronauts);
});
