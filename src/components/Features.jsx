import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
    const featuresRef = useRef(null);

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

        const elements = featuresRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="features" ref={featuresRef}>
            <div className="features-container">
                <div className="features-content animate-on-scroll">
                    <span className="section-subtitle">CRAFTED WITH LOVE</span>
                    <h2 className="section-title">
                        Commitment: Forever, In Every<br />
                        Sparkling Jewel
                    </h2>
                    <p className="features-description">
                        Each piece in our collection is meticulously crafted with the finest materials
                        and attention to detail. We believe in creating jewelry that tells your unique story
                        and becomes a cherished part of your journey.
                    </p>

                    <div className="features-list">
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Necklaces - Timeless Elegance</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Bracelets - Grace Your Wrist</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Chokers - Bold Statements</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Earrings - Perfect Finishing Touch</span>
                        </div>
                    </div>

                    <button className="btn-primary">
                        READ MORE
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="features-image animate-on-scroll">
                    <div className="image-frame">
                        <div className="circular-frame"></div>
                        <img
                            src="/images/features-model.png"
                            alt="Jewelry Model"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
