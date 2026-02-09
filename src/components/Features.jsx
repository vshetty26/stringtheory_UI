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
                    <span className="section-subtitle">THE THEORY OF CONNECTION</span>
                    <h2 className="section-title">
                        Everything is Connected<br />
                        By A Single Thread
                    </h2>
                    <p className="features-description">
                        At The String Theory, we believe in the invisible bonds that connect us all.
                        Our handcrafted jewelry is designed to be a tangible representation of these connections,
                        weaving together style, sentiment, and the unique story of you.
                    </p>

                    <div className="features-list">
                        <div className="feature-item">
                            <span className="feature-icon">◇</span>
                            <span className="feature-text">Necklaces - Binding Elegant Stories</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">◇</span>
                            <span className="feature-text">Bracelets - Circles of Connection</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">◇</span>
                            <span className="feature-text">Chokers - Bold Expressions</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">◇</span>
                            <span className="feature-text">Earrings - Whispers of Style</span>
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
