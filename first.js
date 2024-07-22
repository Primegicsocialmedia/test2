// JavaScript functionality
document.getElementById("myBtn").addEventListener("click", function() {
	document.getElementById("demo").innerHTML = "Hello, World!";
});

// Hover navbar functionality
document.querySelectorAll(".nav-link").forEach(function(link) {
	link.addEventListener("mouseover", function() {
		link.style.backgroundColor = "#444";
	});
	link.addEventListener("mouseout", function() {
		link.style.backgroundColor = "";
	});
});
