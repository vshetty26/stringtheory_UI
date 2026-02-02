import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

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

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text animate-on-scroll">
                        <span className="hero-subtitle">TIMELESS BEAUTY</span>
                        <h1 className="hero-title">
                            ELEGANCE IN EVERY<br />
                            CHAIN, BEAUTY<br />
                            UNCHAINED
                        </h1>
                        <p className="hero-description">
                            Discover our exquisite collection of handcrafted jewelry.<br />
                            Where timeless elegance meets modern sophistication.
                        </p>
                        <button className="btn-primary">
                            KNOW MORE
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>

                    <div className="hero-pagination animate-on-scroll">
                        <button className="pagination-btn active">
                            <span className="pagination-line"></span>
                        </button>
                        <span className="pagination-text">1 / 3</span>
                        <button className="pagination-btn">
                            <span className="pagination-line"></span>
                        </button>
                    </div>
                </div>

                <div className="hero-image animate-on-scroll">
                    <div className="image-wrapper">
                        <img
                            src="/images/model-saree.jpg"
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
                        <div className="sidebar-image animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <img src="/images/product-bracelet.png" alt="Product 1" />
                        </div>
                        <div className="sidebar-image animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                            <img src="/images/product-bracelet.png" alt="Product 2" />
                        </div>
                        <div className="sidebar-image animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                            <img src="/images/product-bracelet.png" alt="Product 3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
