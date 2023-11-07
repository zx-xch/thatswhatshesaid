
async function getQuote() {
    fetch('https://officeapi.akashrajpurohit.com/quote/random').then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
    console.log(data['quote'])
    console.log(data['character'])
    let url = "https://twitter.com/intent/tweet?text=%22"+encodeURI(data['quote'])+"%22%0a%2D%20"+encodeURI(data['character'])+"%0a&url=https://thatswhatshesaid.pages.dev";
    document.getElementById('quote').innerHTML = '"'+ data['quote']+'"';
    document.getElementById('character').innerHTML = "- " + data['character'];
    document.getElementById('tweet').setAttribute('href',url);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

}
