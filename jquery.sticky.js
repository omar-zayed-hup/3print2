// Header Scroll Effect with Improved Active/Hover States
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        // تغيير لون العناصر عند التمرير
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.style.color = '#ffffff';
            link.addEventListener('mouseover', function() {
                this.style.color = '#4db8ff';
            });
            link.addEventListener('mouseout', function() {
                this.style.color = '#ffffff';
            });
        });
    } else {
        header.classList.remove('scrolled');
        // إعادة الألوان الأصلية عند العودة لأعلى
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.style.color = '#ffffff';
            link.addEventListener('mouseover', function() {
                this.style.color = '#4db8ff';
            });
            link.addEventListener('mouseout', function() {
                this.style.color = '#ffffff';
            });
        });
    }
});

// Enhanced Active Nav Link with Better Visibility
document.querySelectorAll('nav ul li a').forEach(link => {
    // تحسين تأثير التحويم
    link.addEventListener('mouseenter', function() {
        this.style.color = '#4db8ff';
        this.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.color = '#ffffff';
        }
        this.style.transform = 'translateY(0)';
    });
    
    // تحسين العنصر النشط
    link.addEventListener('click', function(e) {
        if (!this.parentElement.querySelector('ul')) {
            document.querySelectorAll('nav ul li a').forEach(item => {
                item.classList.remove('active');
                item.style.color = '#ffffff';
                item.style.fontWeight = '500';
            });
            this.classList.add('active');
            this.style.color = '#4db8ff';
            this.style.fontWeight = '600';
        }
    });
});

// Slideshow with Improved Transitions
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.slider-control');
let slideInterval;

function showSlide(n) {
    // Enhanced Animation for all slides
    document.querySelectorAll('.slide-content').forEach((content, index) => {
        content.style.transform = `translateY(${index === n ? -50 : 50}px)`;
        content.style.opacity = '0';
        content.style.transition = 'all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
    });
    
    // Hide all slides and deactivate controls
    slides.forEach(slide => slide.classList.remove('active'));
    controls.forEach(control => {
        control.classList.remove('active');
        control.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    });
    
    // Show selected slide and activate its control
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    controls[currentSlide].classList.add('active');
    controls[currentSlide].style.backgroundColor = '#ffffff';
    
    // Enhanced Animation for the active slide
    setTimeout(() => {
        const activeContent = document.querySelector('.slide.active .slide-content');
        if (activeContent) {
            activeContent.style.transform = 'translateY(0)';
            activeContent.style.opacity = '1';
        }
    }, 50);
    
    // Reset the timer
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Initialize slider with better visual cues
showSlide(0);
slideInterval = setInterval(nextSlide, 5000);

// Improved Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    };
    document.body.appendChild(script);
});

// Enhanced Animation on scroll for About Section
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    
    function animateOnScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            aboutSection.classList.add('animated');
            // إضافة تأثيرات إضافية للعناصر
            document.querySelectorAll('.feature-item').forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 200);
            });
        }
    }
    
    // تهيئة العناصر قبل الظهور
    document.querySelectorAll('.feature-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(50px)';
        item.style.transition = 'all 0.6s ease-out';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});
        // تهيئة جسيمات الخلفية
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#4db8ff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 4,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 0.3,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#4db8ff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 0.8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
            
            // تأثيرات ظهور البطاقات
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
                
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
        });
                // Animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const aboutSection = document.querySelector('.about-section');
            
            function animateOnScroll() {
                const sectionPosition = aboutSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (sectionPosition < screenPosition) {
                    aboutSection.classList.add('animated');
                }
            }
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Trigger on load if already in view
        });
        document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleWorks');
    const hiddenWorks = document.querySelector('.hidden-works');
    const arrowIcon = toggleBtn.querySelector('svg');
    let isExpanded = false;
    
    // Hover effect for portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.work-overlay').style.bottom = '0';
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.work-overlay').style.bottom = '-100%';
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
    
    // Toggle works functionality
    toggleBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            hiddenWorks.style.display = 'grid';
            toggleBtn.textContent = 'عرض أقل';
            arrowIcon.style.transform = 'rotate(180deg)';
        } else {
            hiddenWorks.style.display = 'none';
            toggleBtn.textContent = 'عرض المزيد';
            arrowIcon.style.transform = 'rotate(0deg)';
        }
    });
});