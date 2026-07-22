import React from 'react';
import './Home.css';

// Asset Imports
import Mixer350 from "../../assets/mixer.png";
import Sheller from "../../assets/sheller.png";
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
import ZigzagMold from "../../assets/zigzagcabromold.png"; 
import VibratingTable from "../../assets/vibratingtable.png";  
import PostMold10Feet from "../../assets/postmold10feet.png";  
import PostMold8Feet from "../../assets/postmold8feet.png";  
import Wheel1 from "../../assets/wheel1.png";  
import Window from "../../assets/window.png";  

// Defined outside component to prevent re-creation on every render
const PRODUCTS = [
  { 
    id: "pmw-350l",
    name: "PMW-350L Diesel Engine Concrete Mixer", 
    detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
    price: "Price Available Upon Request",
    image: Mixer350
  },
  { 
    id: "pmw-500l",
    name: "PMW-500L Electric Site Mixer", 
    detail: "Three-phase electric motor setup engineered for stationary high-volume commercial concrete batching.",
    price: "Price Available Upon Request",
    image: Mixer350
  },
  { 
    id: "pmw-750l",
    name: "PMW-750L Heavy Duty Mixer", 
    detail: "Industrial-grade mixer with reinforced drum and advanced hydraulic system for large-scale projects.",
    price: "Price Available Upon Request",
    image: Mixer350
  },
  { 
    id: "drop-egg-layer",
    name: "Manual Drop-Egg Layer System", 
    detail: "High-yield mobile setup for structural 9x9x18 block units. Low maintenance costs.",
    price: "Price Available Upon Request",
    image: Block
  },
  { 
    id: "grill-vent",
    name: "Grill Vent Mold", 
    detail: "Precision ventilation grill mold for masonry installations.",
    price: "Price Available Upon Request",
    image: Grill
  },
  { 
    id: "interlock-machine",
    name: "Interlock Block Machine", 
    detail: "Manual interlocking paving and structural block making machine.",
    price: "Price Available Upon Request",
    image: Block2
  },
  { 
    id: "hydraulic-press",
    name: "Hydraulic Multi-Cavity Static Press", 
    detail: "Stationary production machine built for high-density paving blocks and solid foundation bricks.",
    price: "Price Available Upon Request",
    image: Block2
  },
  { 
    id: "steel-windows",
    name: "Steel Windows & Casement Units", 
    detail: "Heavy gauge iron frames complete with integrated burglarproofing bars and brass fastener points.",
    price: "Price Available Upon Request",
    image: Window
  },
  { 
    id: "burglar-door-single",
    name: "Reinforced Single-Leaf Anti-Burglar Door", 
    detail: "Heavy sheets over custom skeletal framework, featuring multi-point heavy deadbolt locking channels.",
    price: "Price Available Upon Request",
    image: SecurityDoor1
  },
  { 
    id: "shutter-door-double",
    name: "Double-Leaf Commercial Facility Shutter", 
    detail: "Industrial-grade double door set up tailored with heavy hinges and overhead escape configurations.",
    price: "Price Available Upon Request",
    image: SecurityDoor2
  },
  { 
    id: "sliding-gate",
    name: "Heavy Structural Sliding Gate Assembly", 
    detail: "Constructed with solid structural frames and heavy rollers, optimized for automation systems.",
    price: "Price Available Upon Request",
    image: ZigzagMold 
  },
  { 
    id: "vibrating-table",
    name: "Industrial Concrete Vibrating Table", 
    detail: "High-frequency compaction platform optimized for air-bubble removal in pre-cast cabros, posts, and blocks.",
    price: "Price Available Upon Request",
    image: VibratingTable 
  },
  {
    id: "cabro-blocks",
    name: "Heavy-Duty Interlocking Cabro Blocks",
    detail: "High-density concrete paving units manufactured for heavy-traffic driveways and commercial yards.",
    price: "Price Available Upon Request",
    image: Cabros
  },
  { 
    id: "culvert-mold-900",
    name: "Culvert Mold 900mm / 600mm", 
    detail: "Interlocking heavy plate mold configurations optimized for uniform concrete culvert production runs.",
    price: "Price Available Upon Request",
    image: CulvertMold
  },
  { 
    id: "fencing-post-molds",
    name: "Custom Column & Fencing Post Molds (8ft / 10ft)", 
    detail: "Precision dimension templates engineered to cast crisp, structural load-bearing concrete modules.",
    price: "Price Available Upon Request",
    image: PostMold10Feet
  },
  { 
    id: "maize-sheller",
    name: "High-Output Maize Sheller", 
    detail: "Heavy-duty agricultural machinery used for efficiently shelling maize seeds from corn cobs.",
    price: "Price Available Upon Request",
    image: Sheller
  },
  {
    id: "wheelbarrow",
    name: "PMW Deep-Tray Construction Wheelbarrow",
    detail: "Reinforced pan sheet with heavy structural tubing handles, built for site concrete and aggregative haulage.",
    price: "Price Available Upon Request",
    image: Wheel1
  },
  {
    id: "aggregate-crusher",
    name: "Tone Gold Aggregate Mechanical Crusher",
    detail: "Heavy duty impact blades engineered to break down raw industrial substances with uniform sizing outputs.",
    price: "Price Available Upon Request",
    image: FeedMix
  }
];

const Home = () => {
  const handlePlaceOrder = (productName, productPrice) => {
    const phoneNumber = "+254726471291"; 
    const priceText = productPrice.toLowerCase().includes("request") 
      ? "Price available upon request" 
      : productPrice;

    const message = `Hello Philorenda Metal Works,\n\nI would like to place an order/inquire about the following product:\n\n*Product:* ${productName}\n*Price:* ${priceText}\n\nPlease let me know about delivery arrangements and payment details. Thank you!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-badge">
            <span className="badge-pulse"></span> Industrial Grade Metal Fabrication
          </div>
          <h1 className="hero-title">Philorenda Metal Works</h1>
          <p className="hero-subtitle">
            Premium Engineering & Machinery Manufacturing. From high-output construction machinery to custom architectural fittings.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Request Quote</a>
            <a href="#catalog-explore" className="btn-secondary">Explore Catalog</a>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog-explore" className="catalog-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tagline">OUR PRODUCTS</span>
            <h2>Explore Our Machinery & Products</h2>
          </div>

          <div className="catalog-display-panel">
            <div className="product-cards-grid">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="product-card">
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
                    <div className="product-orange-status">PMW Certified</div>
                  </div>

                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.detail}</p>
                    
                    <hr className="card-faint-divider" />

                    <div className="view-specifications-row">
                      <a href="#contact" className="specifications-link">
                        <span>View Specifications</span>
                        <svg className="spec-arrow" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>

                    <hr className="card-faint-divider" />

                    <div className="product-price price-on-request">{product.price}</div>
                    
                    <div className="product-actions">
                      <button 
                        className="btn-place-order"
                        onClick={() => handlePlaceOrder(product.name, product.price)}
                      >
                        Order via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;