import React from 'react';
// import ActionSection from '../../components/actionsection/ActionSection';
// import ContactSection from '../../components/contactsection/ContactSection';
import heroBg from '../../assets/hero.png';

import './Home.css';

// Import images from assets folder
import Mixer350 from "../../assets/mixer.png";
import Sheller350 from "../../assets/sheller.png";
import Block from "../../assets/block.png";
import Block2 from "../../assets/block2.png";
import Cabros from "../../assets/cabros.png";
import Colors from "../../assets/colors.png";
import Culvert from "../../assets/culvert.png";
import CulvertMold from "../../assets/culvertmold.png";
import FeedMix from "../../assets/feedmix.png";
import Grill from "../../assets/grill.png";
import SecurityDoor1 from "../../assets/steeldoor.png"; 
import SecurityDoor2 from "../../assets/steeldoor1.png"; 
import SlidingGate from "../../assets/zigzagcabromold.png"; 
import SwingGate from "../../assets/vibratingtable.png";  
import PostMold10Feet from "../../assets/postmold10feet.png";  
import PostMold8Feet from "../../assets/postmold8feet.png";  
import Sheller1 from "../../assets/sheller.png"; 
import Wheel1 from "../../assets/wheel1.png";  
import Window from "../../assets/window.png";  

const Home = () => {
  // Flat list of all products without classifications/categories
  const allProducts = [
    { 
      name: "PMW-350L Diesel Engine Mixer Concrete Mixer Machine 350L", 
      detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
      price: "Price Available Upon Request",
      image: Mixer350
    },
    { 
      name: "PMW-500L Electric Site Mixer", 
      detail: "Three-phase electric motor setup engineered for stationary high-volume commercial concrete batching.",
      price: "Price Available Upon Request",
      image: Mixer350
    },
    { 
      name: "PMW-750L Heavy Duty Mixer", 
      detail: "Industrial-grade mixer with reinforced drum and advanced hydraulic system for large-scale projects.",
      price: "Price Available Upon Request",
      image: Mixer350
    },
    { 
      name: "Manual Drop-Egg Layer System", 
      detail: "High-yield mobile setup for structural 9x9x18 block units. Low maintenance costs.",
      price: "Price Available Upon Request",
      image: Grill
    },
    { 
      name: "Grill Vent", 
      detail: "Grill vent mold",
      price: "Price Available Upon Request",
      image: Grill
    },
    { 
      name: "Interlock Block Machine", 
      detail: "Interlocking block making machine.",
      price: "Price Available Upon Request",
      image: Block
    },
    { 
      name: "Interlock Block Machine", 
      detail: "Interlocking block making machine.",
      price: "Price Available Upon Request",
      image: Block2
    },
    { 
      name: "Hydraulic Multi-Cavity Static Press", 
      detail: "Stationary production machine built for high-density paving blocks and solid foundation bricks.",
      price: "Price Available Upon Request",
      image: Block2
    },
    { 
      name: "Steel Windows", 
      detail: "Security windows.",
      price: "Price Available Upon Request",
      image: Window
    },
    { 
      name: "T-Section Steel Casement Units", 
      detail: "Heavy gauge iron frames complete with integrated burglarproofing bars and brass fastener points.",
      price: "Price Available Upon Request",
      image: Cabros 
    },
    { 
      name: "Modern Architectural Slimline Framing", 
      detail: "Premium clean-line steel profiles pre-treated for maximum weather protection and aesthetic integration.",
      price: "Price Available Upon Request",
      image: Colors 
    },
    {
      name: "Heavy Gauge Metal Air Louvre Systems",
      detail: "Optimized fixed-blade ventilation shutters for factories, warehouses, and structural substations.",
      price: "Price Available Upon Request",
      image: Colors
    },
    { 
      name: "Reinforced Single-Leaf Anti-Burglar Door", 
      detail: "Heavy sheets over custom skeletal framework, featuring multi-point heavy deadbolt locking channels.",
      price: "Price Available Upon Request",
      image: SecurityDoor1
    },
    { 
      name: "Steel Doors", 
      detail: "Security doors.",
      price: "Price Available Upon Request",
      image: SecurityDoor1
    },
    { 
      name: "Double-Leaf Commercial Facility Shutter", 
      detail: "Industrial-grade double door set up tailored with heavy hinges and overhead escape configurations.",
      price: "Price Available Upon Request",
      image: SecurityDoor2
    },
    { 
      name: "Heavy Structural Sliding Gate Assembly", 
      detail: "Constructed with solid structural frames and heavy rollers, optimized for automation systems.",
      price: "Price Available Upon Request",
      image: SlidingGate 
    },
    { 
      name: "Ornate Classical Swing Gate Set", 
      detail: "Hand-forged detailing panels combined with structural square tubes for maximum perimeter resilience.",
      price: "Price Available Upon Request",
      image: SwingGate 
    },
    {
      name: "Heavy-Duty Interlocking Cabro Blocks",
      detail: "High-density concrete paving units manufactured for heavy-traffic driveways and commercial logistics yards.",
      price: "Price Available Upon Request",
      image: Cabros
    },
    {
      name: "Industrial Concrete Vibrating Table",
      detail: "High-frequency compaction platform optimized for air-bubble removal in pre-cast cabros, posts, and blocks.",
      price: "Price Available Upon Request",
      image: SwingGate
    },
    { 
      name: "Pre-Cast Culvert Ring Steel Shuttering", 
      detail: "Interlocking heavy plate mold configurations optimized for uniform culvert production runs.",
      price: "Price Available Upon Request",
      image: CulvertMold
    },
    { 
      name: "Culvert Mold 900mm", 
      detail: "Used for making concrete culverts",
      price: "Price Available Upon Request",
      image: CulvertMold
    },
    { 
      name: "Culvert Mold 600mm", 
      detail: "Used for making concrete culverts",
      price: "Price Available Upon Request",
      image: CulvertMold
    },
    { 
      name: "Custom Column & Fencing Post Molds", 
      detail: "Precision dimension templates engineered to cast crisp, structural load-bearing concrete modules.",
      price: "Price Available Upon Request",
      image: Culvert
    },
    { 
      name: "Post Mold 10 Feet", 
      detail: "Mold for creating concrete fencing post.",
      price: "Price Available Upon Request",
      image: PostMold10Feet
    },
    { 
      name: "Post Mold 8 Feet", 
      detail: "Mold for creating concrete fencing post.",
      price: "Price Available Upon Request",
      image: PostMold8Feet
    },
    { 
      name: "Maize Sheller", 
      detail: "Used for shelling maize seeds from its corn.",
      price: "Price Available Upon Request",
      image: Sheller1
    },
    {
      name: "PMW Deep-Tray Construction Wheelbarrow",
      detail: "Reinforced pan sheet with heavy structural tubing handles, built for site concrete and aggregative haulage.",
      price: "Price Available Upon Request",
      image: Wheel1
    },
    {
      name: "Wheel Barrow",
      detail: "Wheel barrow.",
      price: "Price Available Upon Request",
      image: Wheel1
    },
    {
      name: "High-Output Aggregate Mechanical Crusher",
      detail: "Heavy duty impact blades engineered to break down raw industrial substances with uniform sizing outputs.",
      price: "Price Available Upon Request",
      image: FeedMix
    },
    {
      name: "Tone Gold Crusher",
      detail: "Heavy duty impact blades engineered to break down raw industrial substances with uniform sizing outputs.",
      price: "Price Available Upon Request",
      image: FeedMix
    },
    {
      name: "Industrial Extrusion Plodder Assembly",
      detail: "Refining and extrusion machine designed with continuous feed compression worms for manufacturing processes.",
      price: "Price Available Upon Request",
      image: PostMold10Feet
    },
    {
      name: "Soap Plodder Big size",
      detail: "Makes bar soaps.",
      price: "Price Available Upon Request",
      image: PostMold10Feet
    }
  ];

  // WhatsApp Redirect Handler
  const handlePlaceOrder = (productName, productPrice) => {
    const phoneNumber = "+254726471291"; 
    const priceText = productPrice.toLowerCase().includes("request") 
      ? "Price available upon request" 
      : productPrice;

    const message = `Hello Philorenda Metal Works,\n\nI would like to place an order/inquire about the following product:\n\n*Product:* ${productName}\n*Price:* ${priceText}\n\nPlease let me know about delivery arrangements and payment details. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="home-page">
      
      {/* --- HERO BANNER SECTION --- */}
      <section 
        id="home" 
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-badge">
            <span className="badge-pulse"></span> Industrial Grade Metal Fabrication
          </div>
          <h1 className="hero-title">
            Philorenda Metal Works
          </h1>
          <p className="hero-subtitle">
            A premium Engineering & Machinery Manufacturing. From high-output construction machinery to custom architectural fittings. Built with premium materials, engineered for long-term production resilience.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Request Quote</a>
            <a href="#catalog-explore" className="btn-secondary">Explore Catalog</a>
          </div>
        </div>
      </section>

      {/* --- FLAT PRODUCTS CATALOG SECTION --- */}
      <section id="catalog-explore" className="catalog-section">
        <div className="section-container">
          
          <div className="section-header">
            <span className="section-tagline">OUR PRODUCTS</span>
            <h2>Explore Our Machinery & Products</h2>
          </div>

          {/* Unified Product Grid */}
          <div className="catalog-display-panel">
            <div className="product-cards-grid">
              {allProducts.map((product, index) => (
                <div key={index} className="product-card">
                  
                  <div className="product-image-container">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="product-image" />
                    ) : (
                      <div className="blueprint-fallback-placeholder">
                        <span>Image Specifications Pending</span>
                      </div>
                    )}
                    
                    <div className="home-image-text-overlay">
                      <span className="home-overlay-delivery">Free delivery within Nairobi</span>
                      <span className="home-overlay-brand">A product of PMW</span>
                    </div>

                    <div className="product-orange-status">
                      PMW Certified
                    </div>
                  </div>

                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.detail}</p>
                    
                    {/* Faint Horizontal Divider Line */}
                    <hr className="card-faint-divider" />

                    {/* View Specifications Row */}
                    <div className="view-specifications-row">
                      <a href="#contact" className="specifications-link">
                        <span>View Specifications</span>
                        <svg className="spec-arrow" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>

                    {/* Second Faint Horizontal Divider Line */}
                    <hr className="card-faint-divider" />

                    {/* Unbolded, Elegant Price Tag */}
                    <div className="product-price price-on-request">{product.price}</div>
                    
                    <div className="product-actions">
                      <button 
                        className="btn-order-now"
                        onClick={() => handlePlaceOrder(product.name, product.price)}
                      >
                        Order Now
                      </button>
                      <button 
                        className="btn-place-order"
                        onClick={() => handlePlaceOrder(product.name, product.price)}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* <ActionSection />
      <ContactSection /> */}
     
    </div>
  );
};

export default Home;