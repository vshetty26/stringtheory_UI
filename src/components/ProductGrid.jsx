import React, { useEffect, useRef } from 'react';
import './ProductGrid.css';

const ProductGrid = () => {
    const gridRef = useRef(null);

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

        const elements = gridRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const products = [
        {
            title: 'Grace Your Wrist',
            subtitle: 'CLASSIC CHARM',
            description: 'Elegant gold bracelets crafted with precision and care.',
            image: '/images/product-bracelet.png',
            bgColor: '#d4b896'
        },
        {
            title: 'Every Gem Tells A Story',
            subtitle: 'JEWELS AS UNIQUE AS YOU',
            description: 'Discover the perfect piece that speaks to your soul.',
            image: '/images/product-necklace.png',
            bgColor: '#f5f0e8'
        },
        {
            title: 'Timeless Designs',
            subtitle: 'CIRCLE OF ELEGANCE',
            description: 'Handcrafted pieces that transcend time and trends.',
            image: '/images/product-bracelet.png',
            bgColor: '#1a1a1a',
            isDark: true
        },
        {
            title: 'Dazzling Designs',
            subtitle: 'SPARKLE IN EVERY CHAIN',
            description: 'Bold designs that make a statement.',
            image: '/images/product-bracelet.png',
            bgColor: '#2d2d2d',
            isDark: true
        },
        {
            title: 'Pearl Brief Necklace',
            subtitle: 'THE PEARL STORY',
            image: '/images/product-necklace.png',
            bgColor: '#f5f0e8'
        },
        {
            title: 'Vintage Brooch',
            subtitle: 'ILLUMINATE YOUR ELEGANCE',
            description: 'Timeless vintage pieces with modern appeal.',
            image: '/images/product-brooch.png',
            bgColor: '#c9a961'
        }
    ];

    return (
        <section className="product-grid" ref={gridRef}>
            <div className="product-grid-container">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`product-card animate-on-scroll ${product.isDark ? 'dark' : ''}`}
                        style={{
                            backgroundColor: product.bgColor,
                            animationDelay: `${index * 0.1}s`
                        }}
                    >

                        <div className="product-content">
                            <span className="product-subtitle">{product.subtitle}</span>
                            <h3 className="product-title">{product.title}</h3>
                            {product.description && (
                                <p className="product-description">{product.description}</p>
                            )}
                            {product.price && (
                                <p className="product-price">{product.price}</p>
                            )}
                            <button className={`btn-primary ${product.isDark ? 'light' : ''}`}>
                                SHOP NOW
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                        <div className="product-image">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
