import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
                    <span className="logo-icon">◇</span>
                    <span className="logo-text">The String Theory</span>
                </Link>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/home" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/necklace" onClick={() => setMobileMenuOpen(false)}>Necklace</Link></li>
                    <li><Link to="/bracelet" onClick={() => setMobileMenuOpen(false)}>Bracelet</Link></li>
                    <li><Link to="/choker" onClick={() => setMobileMenuOpen(false)}>Choker</Link></li>
                    <li><Link to="/earring" onClick={() => setMobileMenuOpen(false)}>Earring</Link></li>

                </ul>

                <div className="navbar-actions">
                    <button className="icon-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </button>
                    <button className="icon-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>
                    <button className="icon-btn cart-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="cart-count">0</span>
                    </button>
                    <button className="btn-sign-in">SIGN IN</button>
                </div>

                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
