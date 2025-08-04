
        // Typewriter animation
        const text = "hi, zahra here.";
        const typewriterElement = document.getElementById('typewriter-text');
        let currentIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            if (!isDeleting) {
                if (currentIndex < text.length) {
                    typewriterElement.textContent = text.slice(0, currentIndex + 1);
                    currentIndex++;
                    setTimeout(typeWriter, 150);
                } else {
                    setTimeout(() => {
                        isDeleting = true;
                        typeWriter();
                    }, 2000);
                }
            } else {
                if (currentIndex > 0) {
                    typewriterElement.textContent = text.slice(0, currentIndex - 1);
                    currentIndex--;
                    setTimeout(typeWriter, 50);
                } else {
                    isDeleting = false;
                    setTimeout(typeWriter, 500);
                }
            }
        }

        // Start typewriter animation
        setTimeout(typeWriter, 1000);

        // Smooth scrolling navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation highlighting
        function updateActiveNav() {
            const sections = ['home', 'about', 'experience', 'projects'];
            const navLinks = document.querySelectorAll('.nav-link');
            
            sections.forEach((section, index) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        navLinks[index]?.classList.add('active');
                    }
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);

        // Experience tabs
        const tabButtons = document.querySelectorAll('.tab-button');
        const experienceItems = document.querySelectorAll('.experience-item');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and items
                tabButtons.forEach(btn => btn.classList.remove('active'));
                experienceItems.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked button and corresponding item
                button.classList.add('active');
                document.getElementById(tabId)?.classList.add('active');
            });
        });

        // Fade in animation on scroll
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', handleScrollAnimations);
        window.addEventListener('load', handleScrollAnimations);

        // Additional CSS for experience items
        const style = document.createElement('style');
        style.textContent = `
            .experience-item {
                display: none;
            }
            .experience-item.active {
                display: block;
                animation: fadeInUp 0.4s ease;
            }
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
