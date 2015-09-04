// Choose branch based on query string
var query = window.location.search;
if (query) {
	var branch = query.replace("?", "");
} else {
	var branch = "master";
}

// Load readme content
$.ajax({
	url: "https://rawgit.com/mattiasnordqvist/Web-Anchor/" + branch + "/ReadMe.md",
	dataType: 'text',
	success: function(data) {

		// Show html
		$(".wrapper").text(data);
		$('body').append('<script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>'); // Uack, not nice :(
		$('.spinner').hide();
	},
	error: function(data) {
		console.error("data");
	}
});
