import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  const necklaceItems = [
    { id: 'necklace-1', category: 'Necklace', title: 'CREAM FANCY SHELL NECKLACE', subtitle: 'FOR WOMEN', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-1.png', bgColor: '#fff' },
    { id: 'necklace-2', category: 'Necklace', title: 'THE SEASHELL SYMPHONY', subtitle: 'NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-2.png', bgColor: '#fff' },
    { id: 'necklace-3', category: 'Necklace', title: 'MULTISTRAND PENDANT', subtitle: 'NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-3.png', bgColor: '#fff' },
    { id: 'necklace-4', category: 'Necklace', title: 'GOLD TONED & BROWN', subtitle: 'HANDCRAFTED', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-4.png', bgColor: '#fff' },

    { id: 'necklace-5', category: 'Necklace', title: 'GOLDEN SUNRISE MULTISTRAND', subtitle: 'NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-5.png', bgColor: '#fff' },
    { id: 'necklace-6', category: 'Necklace', title: 'MULTICOLORED BRIGHT SHELL', subtitle: 'LONG NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-6.png', bgColor: '#fff' },
    { id: 'necklace-7', category: 'Necklace', title: 'MULTI-STRAND PASTEL', subtitle: 'SYMPHONY NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-7.png', bgColor: '#fff' },
    { id: 'necklace-8', category: 'Necklace', title: 'HANDCRAFTED MULTISTRAND', subtitle: 'BEADED NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-8.png', bgColor: '#fff' },

    { id: 'necklace-9', category: 'Necklace', title: 'PURPLE RAIN NECKLACE', subtitle: 'ELEGANT', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-9.png', bgColor: '#fff' },
    { id: 'necklace-10', category: 'Necklace', title: 'MULTI COLORED GLASS', subtitle: 'BEADED NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-10.png', bgColor: '#fff' },
    { id: 'necklace-11', category: 'Necklace', title: 'GOLD & BRONZE HEMATITE', subtitle: 'BEADED LONG', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-11.png', bgColor: '#fff' },
    { id: 'necklace-12', category: 'Necklace', title: 'TURQUOISE BEADED FANCY', subtitle: 'LONG NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-12.png', bgColor: '#fff' },
  ];

  const braceletItems = [
    { id: 'bracelet-1', category: 'Bracelet', title: 'BROWN AND IVORY SHINY STRETCH BRACELET', subtitle: 'STRETCH BRACELET', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/bracelet-item-1.png', bgColor: '#efe8d8' },
    { id: 'bracelet-2', category: 'Bracelet', title: 'SILVER SHINY BEADS RHODIUM PLATED CUFF', subtitle: 'CUFF BRACELET', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/bracelet-item-2.png', bgColor: '#efe8d8' },
    { id: 'bracelet-3', category: 'Bracelet', title: 'TURQUOISE AND LIGHT GREEN SHINY STRETCH', subtitle: 'STRETCH BRACELET', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/bracelet-item-3.png', bgColor: '#efe8d8' },
    { id: 'bracelet-4', category: 'Bracelet', title: 'BLACK SHINY BEADS RHODIUM PLATED CUFF', subtitle: 'CUFF BRACELET', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/bracelet-item-4.png', bgColor: '#efe8d8' },
    { id: 'bracelet-5', category: 'Bracelet', title: 'IVORY LUSTRE AND TOPAZ COLOR CONTEMPORARY', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-5.png', bgColor: '#efe8d8' },
    { id: 'bracelet-6', category: 'Bracelet', title: 'BLACK AND SILVER COLOUR CONTEMPORARY', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-6.png', bgColor: '#efe8d8' },
    { id: 'bracelet-7', category: 'Bracelet', title: 'SHADES OF RED CONTEMPORARY SPIRAL', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-7.png', bgColor: '#efe8d8' },
    { id: 'bracelet-8', category: 'Bracelet', title: 'OXIDIZED SILVER ETHNIC FANCY FLOWER', subtitle: 'CUFF', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/bracelet-item-8.png', bgColor: '#efe8d8' },
    { id: 'bracelet-9', category: 'Bracelet', title: 'SHADES OF ORANGE AND CORAL LUSTRE', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-9.png', bgColor: '#efe8d8' },
    { id: 'bracelet-10', category: 'Bracelet', title: 'SHADES OF CORAL AND RED CONTEMPORARY', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-10.png', bgColor: '#efe8d8' },
    { id: 'bracelet-11', category: 'Bracelet', title: 'TURQUOISE AND GREEN BEADED BRACELET', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,598', discount: '68% OFF', image: '/images/bracelet-item-11.png', bgColor: '#efe8d8' },
    { id: 'bracelet-12', category: 'Bracelet', title: 'OCEAN BLOOM BRACELET', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,598', discount: '68% OFF', image: '/images/bracelet-item-12.png', bgColor: '#efe8d8' },
    { id: 'bracelet-13', category: 'Bracelet', title: 'MULTICOLOR SET OF 6 BRACELET', subtitle: 'BRACELET', price: '₹699', originalPrice: '₹1,999', discount: '65% OFF', image: '/images/bracelet-item-13.png', bgColor: '#efe8d8' },
    { id: 'bracelet-14', category: 'Bracelet', title: 'YELLOW AND RED BEADED BRACELET', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,598', discount: '68% OFF', image: '/images/bracelet-item-14.png', bgColor: '#efe8d8' },
    { id: 'bracelet-15', category: 'Bracelet', title: 'BEIGE AND RED BEADED BRACELET', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,598', discount: '68% OFF', image: '/images/bracelet-item-15.png', bgColor: '#efe8d8' },
  ];

  const chokerItems = [
    { id: 'choker-1', category: 'Choker', title: 'MAROON AMYTHYST BEADED CROSHE CHOKER', subtitle: 'CHOKER', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/choker-item-1.png', bgColor: '#e8dfd0' },
    { id: 'choker-2', category: 'Choker', title: 'GREEN FANCY BEADED CROSHE CHOKER', subtitle: 'CHOKER', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/choker-item-2.png', bgColor: '#e8dfd0' },
    { id: 'choker-3', category: 'Choker', title: 'BLACK AND WHITE BEADED CROSHE CHOKER', subtitle: 'CHOKER', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/choker-item-3.png', bgColor: '#e8dfd0' },
    { id: 'choker-4', category: 'Choker', title: 'AZURE EMBRACE CHOKER NECKLACE', subtitle: 'CHOKER', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/choker-item-4.png', bgColor: '#e8dfd0' },
    { id: 'choker-5', category: 'Choker', title: 'YELLOW BEADED CROSHE CHOKER FOR WOMEN', subtitle: 'CHOKER', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/choker-item-5.png', bgColor: '#e8dfd0' },
  ];

  const earringItems = [
    { id: 'earring-1', category: 'Earring', title: 'MULTICOLORED STATEMENT FANCY DANGLE EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-1.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-2', category: 'Earring', title: 'MULTICOLORED DANGLE FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-2.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-3', category: 'Earring', title: 'NAVY BLUE DANGLE ETHNIC FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-3.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-4', category: 'Earring', title: 'BLACK & GOLD SHINY FANCY DANGLE EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-4.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-5', category: 'Earring', title: 'BROWN & GOLD SHINY FANCY DANGLE EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-5.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-6', category: 'Earring', title: 'BROWN & GOLD SHINY DANGLE EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-6.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-7', category: 'Earring', title: 'OLIVE SHINY DANGLE FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-7.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-8', category: 'Earring', title: 'SILVER SHINY DANGLE FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-8.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-9', category: 'Earring', title: 'RED DANGLE FANCY EARRING FOR WOMEN', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-9.png', bgColor: '#1a1a1a', isDark: true },
    { id: 'earring-10', category: 'Earring', title: 'YELLOW & RED DANGLE FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-10.png', bgColor: '#1a1a1a', isDark: true },
  ];


  // Combine all products for the ProductDetail page
  const allProducts = [...necklaceItems, ...braceletItems, ...chokerItems, ...earringItems];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail allProducts={allProducts} />} />
          <Route path="/necklace" element={<CategoryPage
            category="Necklace"
            title="Adorn Your Neckline"
            description="Explore our exquisite collection of necklaces, from delicate chains to statement pieces that capture the light."
            items={necklaceItems}
            heroImage="/images/hero-necklace-model.jpg"
          />} />
          <Route path="/bracelet" element={<CategoryPage
            category="Bracelet"
            title="Grace Your Wrists"
            description="Handcrafted bracelets that add a touch of elegance to every gesture."
            items={braceletItems}
            heroImage="/images/hero-bracelet-model.jpg"
          />} />
          <Route path="/choker" element={<CategoryPage
            category="Choker"
            title="Bold & Beautiful"
            description="Make a statement with our stunning collection of chokers, designed to accentuate your style."
            items={chokerItems}
            heroImage="/images/hero-choker-model.jpg"
          />} />
          <Route path="/earring" element={<CategoryPage
            category="Earring"
            title="Sparkle &  Shine"
            description="Frame your face with our dazzling earrings, featuring diamonds, pearls, and precious stones."
            items={earringItems}
            heroImage="/images/hero-earring-model.jpg"
          />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
