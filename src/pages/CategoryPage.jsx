import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../components/CategoryGrid.css';
import '../components/Hero.css';

const CategoryPage = ({ category, title, description, items, heroImage }) => {
    const gridRef = useRef(null);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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

        if (gridRef.current) {
            const elements = gridRef.current.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, [category]);

    return (
        <div className="category-page">
            <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'visible' }}>
                <div className="hero-container" style={heroImage ? {
                    gridTemplateColumns: '1fr 1fr',
                    textAlign: 'left',
                    gap: '60px',
                    maxWidth: '1200px',
                    display: 'grid',
                    alignItems: 'center'
                } : {
                    gridTemplateColumns: '1fr',
                    textAlign: 'center',
                    display: 'grid'
                }}>
                    <div className="hero-content">
                        <span className="hero-subtitle visible" style={{ animation: 'none', opacity: 1 }}>{category.toUpperCase()} COLLECTION</span>
                        <h1 className="hero-title visible" style={{ animation: 'none', opacity: 1 }}>{title}</h1>
                        <p className="hero-description visible" style={{ animation: 'none', opacity: 1, margin: heroImage ? '0' : '0 auto', maxWidth: '600px' }}>
                            {description}
                        </p>
                    </div>
                    {heroImage && (
                        <div className="hero-image visible" style={{ position: 'relative', animation: 'scaleIn 1s ease 0.3s forwards', opacity: 0 }}>
                            <div className="image-wrapper" style={{ height: '500px', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
                                <img src={heroImage} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div className="floating-badge" style={{
                                position: 'absolute',
                                bottom: '40px',
                                left: '-30px',
                                backgroundColor: 'white',
                                padding: '15px 30px',
                                borderRadius: '50px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                animation: 'float 3s ease-in-out infinite',
                                zIndex: 10,
                                cursor: 'default'
                            }}>
                                <span className="badge-icon" style={{ fontSize: '20px' }}>✨</span>
                                <span className="badge-text" style={{ fontSize: '14px', fontWeight: 'bold', color: '#2d2d2d' }}>Premium Collection</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="category-grid" ref={gridRef} style={{ paddingTop: '50px' }}>
                <div className="category-grid-container">
                    {items.map((product, index) => (
                        <div
                            key={index}
                            className={`category-card animate-on-scroll ${product.isDark ? 'dark' : ''}`}
                            style={{
                                backgroundColor: product.bgColor,
                                animationDelay: `${index * 0.1}s`,
                                cursor: 'pointer'
                            }}
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            <div className="category-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="category-content">
                                <span className="category-subtitle">{product.subtitle}</span>
                                <h3 className="category-title">{product.title}</h3>
                                {product.description && (
                                    <p className="category-description">{product.description}</p>
                                )}
                                {product.price && (
                                    <div className="category-price-container">
                                        <span className="current-price">{product.price}</span>
                                        {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                                        {product.discount && <span className="discount-tag">{product.discount}</span>}
                                    </div>
                                )}
                                <div className="category-actions">
                                    <button
                                        className="btn-add-to-cart"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            alert(`Added ${product.title} to cart!`);
                                        }}
                                    >
                                        ADD TO CART
                                    </button>
                                    <button
                                        className={`btn-icon ${product.isDark ? 'light' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/product/${product.id}`);
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CategoryPage;
