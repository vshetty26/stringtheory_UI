import React, { useEffect, useRef } from 'react';
import './CollectionShowcase.css';

const CollectionShowcase = () => {
    const showcaseRef = useRef(null);

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

        const elements = showcaseRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="collection-showcase" ref={showcaseRef}>
            <div className="showcase-container">
                <div className="showcase-header animate-on-scroll">
                    <span className="section-subtitle">ELEVATE YOUR SUNDAYS</span>
                    <h2 className="section-title">Stylish Design Collections</h2>
                </div>

                <div className="showcase-grid">
                    <div className="showcase-item large animate-on-scroll">
                        <img
                            src="/images/exclusive-collection-new.jpg"
                            alt="Exclusive Collection"
                        />
                        <div className="showcase-overlay">
                            <h3>Exclusive Collection</h3>
                            <button className="btn-primary">EXPLORE NOW</button>
                        </div>
                    </div>

                    <div className="showcase-item animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                        <img
                            src="/images/bracelet-collection-new.png"
                            alt="Bracelet Collection"
                        />
                        <div className="showcase-overlay">
                            <h3>Bracelets</h3>
                            <button className="btn-primary">VIEW MORE</button>
                        </div>
                    </div>

                    <div className="showcase-item animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                        <img
                            src="/images/necklace-collection-new.jpg"
                            alt="Necklace Collection"
                        />
                        <div className="showcase-overlay">
                            <h3>Necklaces</h3>
                            <button className="btn-primary">VIEW MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionShowcase;
