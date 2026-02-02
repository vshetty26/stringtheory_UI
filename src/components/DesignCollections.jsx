import React from 'react';
import './DesignCollections.css';

const DesignCollections = () => {
    return (
        <section className="design-collections">
            <div className="collections-container">
                <div className="collections-header">
                    <span className="section-subtitle">ELEVATE YOUR SUNDAYS</span>
                    <h2 className="section-title">Stylish Design Collections</h2>
                </div>

                <div className="collections-content">
                    <div className="collection-image">
                        <img
                            src="/images/design-collection-feature.jpg"
                            alt="Design Collection"
                        />
                    </div>

                    <div className="collection-info">
                        <div className="info-grid">
                            <div className="info-item">
                                <h4>Our Craftsmen Stand By</h4>
                                <p>Every piece is crafted with precision and care by our master artisans who have decades of experience.</p>
                            </div>
                            <div className="info-item">
                                <h4>Ethically Sourced Materials</h4>
                                <p>We ensure all our materials are ethically sourced and meet the highest quality standards.</p>
                            </div>
                            <div className="info-item">
                                <h4>Lifetime Warranty</h4>
                                <p>All our jewelry comes with a lifetime warranty, ensuring your investment is protected.</p>
                            </div>
                            <div className="info-item">
                                <h4>Customization Available</h4>
                                <p>Create your dream piece with our bespoke customization services tailored to your vision.</p>
                            </div>
                        </div>
                        <button className="btn-primary">DISCOVER MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignCollections;
