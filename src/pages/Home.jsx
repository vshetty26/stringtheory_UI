import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductGrid from '../components/ProductGrid';
import CollectionShowcase from '../components/CollectionShowcase';
import BrandLogos from '../components/BrandLogos';
import DesignCollections from '../components/DesignCollections';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Features />
            <ProductGrid />
            <CollectionShowcase />
            <BrandLogos />
            <DesignCollections />
        </div>
    );
};

export default Home;
