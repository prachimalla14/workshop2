const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
	navLinks.classList.toggle('open');
	const isExpanded = navLinks.classList.contains('open');
	menuButton.setAttribute('aria-expanded', isExpanded);
	menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);


const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;

	if(name === "" || email === "") {
		messageDiv.textContent = "Please fill all fields.";
		messageDiv.style.color = "red";
	} 
	else {
		messageDiv.textContent = "Message sent successfully!";
		messageDiv.style.color = "lightgreen";
		contactForm.reset();
	}
});
