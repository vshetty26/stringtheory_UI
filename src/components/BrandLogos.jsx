import React from 'react';
import './BrandLogos.css';

const BrandLogos = () => {
    const brands = [
        { name: 'Amazing', style: 'script' },
        { name: 'Fantastic', style: 'script' },
        { name: 'Good Quality', style: 'modern' },
        { name: 'Superb', style: 'script' },
        { name: 'Elegant', style: 'script' }
    ];

    return (
        <section className="brand-logos">
            <div className="brand-container">
                <div className="brand-scroll">
                    {brands.map((brand, index) => (
                        <div key={index} className={`brand-item ${brand.style}`}>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                    {brands.map((brand, index) => (
                        <div key={`duplicate-${index}`} className={`brand-item ${brand.style}`}>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;
