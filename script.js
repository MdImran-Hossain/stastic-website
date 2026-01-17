// Navbar shadow on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Testimonial slider logic
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentTestimonial--;
  if (currentTestimonial < 0) currentTestimonial = testimonials.length - 1;
  showTestimonial(currentTestimonial);
});

nextBtn.addEventListener("click", () => {
  currentTestimonial++;
  if (currentTestimonial >= testimonials.length) currentTestimonial = 0;
  showTestimonial(currentTestimonial);
});
