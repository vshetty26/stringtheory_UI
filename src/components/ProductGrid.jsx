import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductGrid.css';

const ProductGrid = () => {
    const gridRef = useRef(null);
    const navigate = useNavigate();

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
            subtitle: 'BRACELETS',
            description: 'Elegant handcrafted bracelets that add charm to every gesture.',
            image: '/images/bracelet-new.jpg?v=2',
            bgColor: '#d4b896',
            route: '/bracelet'
        },
        {
            title: 'Adorn Your Neckline',
            subtitle: 'NECKLACES',
            description: 'Timeless necklaces that tell your unique story.',
            image: '/images/necklace.jpg?v=2',
            bgColor: '#f5f0e8',
            route: '/necklace'
        },
        {
            title: 'Bold & Beautiful',
            subtitle: 'CHOKERS',
            description: 'Statement chokers designed to accentuate your style.',
            image: '/images/choker.jpg?v=2',
            bgColor: '#e8dfd0',
            route: '/choker'
        },
        {
            title: 'Perfect Finishing Touch',
            subtitle: 'EARRINGS',
            description: 'Dazzling earrings that frame your face with elegance.',
            image: '/images/earrings.jpg?v=2',
            bgColor: '#c9a961',
            route: '/earring'
        }
    ];

    const handleNavigate = (route) => {
        navigate(route);
    };

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
                        onClick={() => handleNavigate(product.route)}
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
                            <button
                                className={`btn-primary ${product.isDark ? 'light' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavigate(product.route);
                                }}
                            >
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
