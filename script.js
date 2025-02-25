document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to skills
const skills = document.querySelectorAll('#skills li');
const animateSkills = () => {
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, index * 100);
    });
};

// Animate skills when they come into view
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkills();
        observer.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Typing effect for the welcome message
const welcomeMessage = "Welcome! I'm Aysha Naurin";
const welcomeElement = document.querySelector('#about h1');
let i = 0;

function typeWriter() {
    if (i < welcomeMessage.length) {
        welcomeElement.textContent += welcomeMessage.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when the page loads
window.addEventListener('load', () => {
    welcomeElement.textContent = ''; // Clear any existing content
    typeWriter();
});
