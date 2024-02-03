const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

// Add this to your existing script.js or in a separate script file

document.addEventListener("DOMContentLoaded", function () {
	const testimonials = document.querySelectorAll(".testimonial");
	let currentTestimonialIndex = 0;
  
	function showTestimonial(index) {
	  testimonials.forEach((testimonial, i) => {
		testimonial.classList.remove("active");
		if (i === index) {
		  testimonial.classList.add("active");
		}
	  });
	}
  
	function nextTestimonial() {
	  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
	  showTestimonial(currentTestimonialIndex);
	}
  

	setInterval(nextTestimonial, 1000);
  

	showTestimonial(currentTestimonialIndex);
  });
  
