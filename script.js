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


document.addEventListener("DOMContentLoaded", function () {
    // Sample testimonial data (you can replace this with real data from your backend)
    const testimonialsData = [
       
     
		{
            name: "Hari Guruvu",
            occupation: "student",
            testimonial: "As an agile web developer, you can use testimonials to enhance your portfolio and resume.",
            
        },
		{
            name: "Muppidi Suryavenkata Bhavani Shankar",
            occupation: "student",
            testimonial: "Make sure the testimonials are presented as a social proof very early in your landing page. ",
            
        },
    ];

    // Function to dynamically populate testimonials
    function renderTestimonials() {
        const testimonialContainer = document.getElementById("testimonialContainer");

        testimonialsData.forEach(testimonial => {
            const testimonialDiv = document.createElement("div");
            testimonialDiv.classList.add("testimonial");

            testimonialDiv.innerHTML = `
                
                <div>
                    <p>${testimonial.testimonial}</p>
                    <cite>${testimonial.name}, <span>${testimonial.occupation}</span></cite>
                </div>
            `;

            testimonialContainer.appendChild(testimonialDiv);
        });
    }

    // Call the function to render testimonials
    renderTestimonials();
});

