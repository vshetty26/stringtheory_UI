import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import './App.css';

function App() {
  const necklaceItems = [
    { title: 'CREAM FANCY SHELL NECKLACE', subtitle: 'FOR WOMEN', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-1.png', bgColor: '#fff' },
    { title: 'THE SEASHELL SYMPHONY', subtitle: 'NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-2.png', bgColor: '#fff' },
    { title: 'MULTISTRAND PENDANT', subtitle: 'NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-3.png', bgColor: '#fff' },
    { title: 'GOLD TONED & BROWN', subtitle: 'HANDCRAFTED', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-4.png', bgColor: '#fff' },

    { title: 'GOLDEN SUNRISE MULTISTRAND', subtitle: 'NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-5.png', bgColor: '#fff' },
    { title: 'MULTICOLORED BRIGHT SHELL', subtitle: 'LONG NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-6.png', bgColor: '#fff' },
    { title: 'MULTI-STRAND PASTEL', subtitle: 'SYMPHONY NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-7.png', bgColor: '#fff' },
    { title: 'HANDCRAFTED MULTISTRAND', subtitle: 'BEADED NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-8.png', bgColor: '#fff' },

    { title: 'PURPLE RAIN NECKLACE', subtitle: 'ELEGANT', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-9.png', bgColor: '#fff' },
    { title: 'MULTI COLORED GLASS', subtitle: 'BEADED NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-10.png', bgColor: '#fff' },
    { title: 'GOLD & BRONZE HEMATITE', subtitle: 'BEADED LONG', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-11.png', bgColor: '#fff' },
    { title: 'TURQUOISE BEADED FANCY', subtitle: 'LONG NECKLACE', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/necklace-12.png', bgColor: '#fff' },
  ];

  const braceletItems = [
    { title: 'BROWN AND IVORY SHINY STRETCH BRACELET', subtitle: 'STRETCH BRACELET', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/bracelet-item-1.png', bgColor: '#efe8d8' },
    { title: 'SILVER SHINY BEADS RHODIUM PLATED CUFF', subtitle: 'CUFF BRACELET', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/bracelet-item-2.png', bgColor: '#efe8d8' },
    { title: 'TURQUOISE AND LIGHT GREEN SHINY STRETCH', subtitle: 'STRETCH BRACELET', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/bracelet-item-3.png', bgColor: '#efe8d8' },
    { title: 'BLACK SHINY BEADS RHODIUM PLATED CUFF', subtitle: 'CUFF BRACELET', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/bracelet-item-4.png', bgColor: '#efe8d8' },
    { title: 'IVORY LUSTRE AND TOPAZ COLOR CONTEMPORARY', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-5.png', bgColor: '#efe8d8' },
    { title: 'BLACK AND SILVER COLOUR CONTEMPORARY', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-6.png', bgColor: '#efe8d8' },
    { title: 'SHADES OF RED CONTEMPORARY SPIRAL', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-7.png', bgColor: '#efe8d8' },
    { title: 'OXIDIZED SILVER ETHNIC FANCY FLOWER', subtitle: 'CUFF', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/bracelet-item-8.png', bgColor: '#efe8d8' },
    { title: 'SHADES OF ORANGE AND CORAL LUSTRE', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-9.png', bgColor: '#efe8d8' },
    { title: 'SHADES OF CORAL AND RED CONTEMPORARY', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,799', discount: '72% OFF', image: '/images/bracelet-item-10.png', bgColor: '#efe8d8' },
    { title: 'TURQUOISE AND GREEN BEADED BRACELET', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,598', discount: '68% OFF', image: '/images/bracelet-item-11.png', bgColor: '#efe8d8' },
    { title: 'OCEAN BLOOM BRACELET', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,598', discount: '68% OFF', image: '/images/bracelet-item-12.png', bgColor: '#efe8d8' },
    { title: 'MULTICOLOR SET OF 6 BRACELET', subtitle: 'BRACELET', price: '₹699', originalPrice: '₹1,999', discount: '65% OFF', image: '/images/bracelet-item-13.png', bgColor: '#efe8d8' },
    { title: 'YELLOW AND RED BEADED BRACELET', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,598', discount: '68% OFF', image: '/images/bracelet-item-14.png', bgColor: '#efe8d8' },
    { title: 'BEIGE AND RED BEADED BRACELET', subtitle: 'BRACELET', price: '₹499', originalPrice: '₹1,598', discount: '68% OFF', image: '/images/bracelet-item-15.png', bgColor: '#efe8d8' },
  ];

  const chokerItems = [
    { title: 'MAROON AMYTHYST BEADED CROSHE CHOKER', subtitle: 'CHOKER', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/choker-item-1.png', bgColor: '#e8dfd0' },
    { title: 'GREEN FANCY BEADED CROSHE CHOKER', subtitle: 'CHOKER', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/choker-item-2.png', bgColor: '#e8dfd0' },
    { title: 'BLACK AND WHITE BEADED CROSHE CHOKER', subtitle: 'CHOKER', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/choker-item-3.png', bgColor: '#e8dfd0' },
    { title: 'AZURE EMBRACE CHOKER NECKLACE', subtitle: 'CHOKER', price: '₹499', originalPrice: '₹999', discount: '50% OFF', image: '/images/choker-item-4.png', bgColor: '#e8dfd0' },
    { title: 'YELLOW BEADED CROSHE CHOKER FOR WOMEN', subtitle: 'CHOKER', price: '₹599', originalPrice: '₹1,249', discount: '52% OFF', image: '/images/choker-item-5.png', bgColor: '#e8dfd0' },
  ];

  const earringItems = [
    { title: 'MULTICOLORED STATEMENT FANCY DANGLE EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-1.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'MULTICOLORED DANGLE FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-2.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'NAVY BLUE DANGLE ETHNIC FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-3.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'BLACK & GOLD SHINY FANCY DANGLE EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-4.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'BROWN & GOLD SHINY FANCY DANGLE EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-5.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'BROWN & GOLD SHINY DANGLE EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-6.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'OLIVE SHINY DANGLE FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-7.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'SILVER SHINY DANGLE FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-8.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'RED DANGLE FANCY EARRING FOR WOMEN', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-9.png', bgColor: '#1a1a1a', isDark: true },
    { title: 'YELLOW & RED DANGLE FANCY EARRING', subtitle: 'EARRING', price: '₹449', originalPrice: '₹1,698', discount: '73% OFF', image: '/images/earring-item-10.png', bgColor: '#1a1a1a', isDark: true },
  ];


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
