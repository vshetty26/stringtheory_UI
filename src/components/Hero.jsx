import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    const slides = [
        {
            subtitle: "THE STRING THEORY",
            title: "WEAVING STORIES\nINTO EVERY\nSTRAND",
            description: "More than just jewelry—each piece is a thread in the tapestry of your life.\nHandcrafted to connect, adorn, and inspire.",
            mainImage: "/images/model-saree.jpg",
            sidebarImages: [
                { src: "/images/earrings.jpg", alt: "Artisan Earnings" },
                { src: "/images/necklace.jpg", alt: "Statement Necklace" },
                { src: "/images/bracelet.jpg", alt: "Handwoven Bracelet" }
            ]
        },
        {
            subtitle: "HARMONY IN DESIGN",
            title: "WHERE ELEGANCE\nMEETS\nCONNECTION",
            description: "Discover the perfect balance of modern aesthetics and timeless craft.\nAccessories that resonate with your unique frequency.",
            mainImage: "/images/features-model.png",
            sidebarImages: [
                { src: "/images/bracelet-new.jpg", alt: "Modern Bracelets" },
                { src: "/images/choker.jpg", alt: "Elegant Choker" },
                { src: "/images/earrings.jpg", alt: "Classic Earrings" }
            ]
        },
        {
            subtitle: "CURATED FOR YOU",
            title: "YOUR STYLE,\nYOUR\nNARRATIVE",
            description: "Express your individuality with our exclusive collections.\nLet your accessories speak the language of who you are.",
            mainImage: "/images/hero-choker-model.jpg",
            sidebarImages: [
                { src: "/images/necklace.jpg", alt: "Bold Necklaces" },
                { src: "/images/choker.jpg", alt: "Chic Chokers" },
                { src: "/images/bracelet-new.jpg", alt: "Delicate Bracelets" }
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleKnowMore = () => {
        const productSection = document.querySelector('.product-grid');
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const currentSlideData = slides[currentSlide];

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text animate-on-scroll" key={currentSlide}>
                        <span className="hero-subtitle">{currentSlideData.subtitle}</span>
                        <h1 className="hero-title">
                            {currentSlideData.title.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < currentSlideData.title.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className="hero-description">
                            {currentSlideData.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < currentSlideData.description.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                        <button className="btn-primary" onClick={handleKnowMore}>
                            KNOW MORE
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>


                </div>

                <div className="hero-image animate-on-scroll" key={`image-${currentSlide}`}>
                    <div className="image-wrapper">
                        <img
                            src={currentSlideData.mainImage}
                            alt="Elegant Jewelry"
                        />
                        <div className="floating-badge">
                            <span className="badge-icon">◇</span>
                            <span className="badge-text">Chat with us</span>
                        </div>
                    </div>
                </div>

                <div className="hero-sidebar">
                    <div className="sidebar-images">
                        {currentSlideData.sidebarImages.map((image, index) => (
                            <div
                                key={`sidebar-${currentSlide}-${index}`}
                                className="sidebar-image animate-on-scroll"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
