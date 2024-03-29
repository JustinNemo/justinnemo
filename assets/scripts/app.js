function makeWords() {

	var words = [
		{
			text: "html5",
			weight: 12.3
		}, {
			text: "css3",
			weight: 12.5
		}, {
			text: "MySQL",
			weight: 10
		}, {
			text: "PHP",
			weight: 10
		}, {
			text: "JavaScript",
			weight: 12
		}, {
			text: "Laravel",
			weight: 9
		}, {
			text: "WordPress",
			weight: 10
		}, {
			text: "Elementor",
			weight: 9
		}, {
			text: "Divi",
			weight: 9
		}, {
			text: "Java",
			weight: 13
		}, {
			text: "BeTheme",
			weight: 8.3
		}, {
			text: "AEM 6.5",
			weight: 10
		}, {
			text: "Materialize",
			weight: 7.8
		}, {
			text: "SEO",
			weight: 8.5
		}, {
			text: "Github/Bitbucket",
			weight: 10
		}, {
			text: "Grafana",
			weight: 10
		}, {
			text: "Jira",
			weight: 10
		}, {
			text: "Prometheus",
			weight: 10
		}, {
			text: "bootstrap",
			weight: 10
		}
		/* ... */
	];
	return words;
}

function makeWordCloud(words) {
	$('.teaching-domains').jQCloud(words, {delay: 120});
}

function displayWordCloud() {
	var count = 1;
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 2700; // set to whatever you want it to be
		var words = makeWords();
		if (y_scroll_pos > scroll_pos_test && count <= 1) {
			makeWordCloud(words);
			count++;
		}
	});
}

function designForm() {
	$("#my-modal form").addClass("my-form");
}

$(document).ready(function() {
	Typed.new("#writing-text", {
		strings: [
			"am a Web Developer.", "love coding.", "offer solutions."
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		contentType: 'text',
		callback: function() {
			$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
		},
		preStringTyped: function() {},
		onStringTyped: function() {}
	});

	displayWordCloud();
})
