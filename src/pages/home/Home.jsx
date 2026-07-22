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
import Loover from "../../assets/Loover.png";
import CulvertMold from "../../assets/culvertmold.png";
import Paving from "../../assets/paving.png";
import Table from "../../assets/table.png";
import FeedMix from "../../assets/feedmix.png";
import Grill from "../../assets/grill.png";
import SteelDoor from "../../assets/steeldoor.png"; 
import SecurityDoor2 from "../../assets/steeldoor1.png"; 
import Zigzag from "../../assets/zigzag.png"; 
import Square from "../../assets/square.png"; 
import ZigzagMold from "../../assets/zigzagcabromold.png"; 
import Inter from "../../assets/inter.png"; 
import Road from "../../assets/road.png"; 
import Shallow from "../../assets/shallow.png"; 
import VibratingTable from "../../assets/vibratingtable.png";  
import PostMold10Feet from "../../assets/postmold10feet.png";  
import PostMold8Feet from "../../assets/postmold8feet.png";  
import Wheel1 from "../../assets/wheel1.png";  
import Window from "../../assets/window.png";  
import Post1 from "../../assets/post.png";  
import Sideslab from "../../assets/sideslab.png";  


// Defined outside component to prevent re-creation on every render
const PRODUCTS = [
  { 
    id: "pmw-350l",
    name: "Concrete Mixer Machine 350L", 
    detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
    price: "Price Available Upon Request",
    image: Mixer350
  },
  { 
    id: "pmw-500l",
    name: "Post Mold 10 feet", 
    detail: "Mold for creating concrete fencing post.",
    price: "Price Available Upon Request",
    image: Post1
  },
  { 
    id: "pmw-5002",
    name: "Culvert Mold 900mm", 
    detail: "Used for making concrete culverts.",
    price: "Price Available Upon Request",
    image: Culvert
  },
  { 
    id: "pmw-750l",
    name: "Loover Vent 9 inches", 
    detail: "Mold for vent.",
    price: "Price Available Upon Request",
    image: Loover
  },
  { 
    id: "drop-egg-layer",
    name: "Cabro Cutter Machine", 
    detail: "Used for cutting cabro..",
    price: "Price Available Upon Request",
    image: Cabros
  },
  { 
    id: "grill-vent",
    name: "Color Mixer Machine", 
    detail: "Used for mixing paint.",
    price: "Price Available Upon Request",
    image: Colors
  },
  { 
    id: "interlock-machine",
    name: "Side slab Mold", 
    detail: "Used for making concrete side slabs.",
    price: "Price Available Upon Request",
    image: Sideslab
  },
  { 
    id: "hydraulic-press",
    name: "Manual Block Making Machine", 
    detail: "Used for making building blocks.",
    price: "Price Available Upon Request",
    image: Block
  },
  { 
    id: "steel-windows",
    name: "Paving Slab Mold", 
    detail: "Used for making concrete slabs.",
    price: "Price Available Upon Request",
    image: Paving
  },
  { 
    id: "burglar-door-single",
    name: "Vibrating Table", 
    detail: "Vibrating table.",
    price: "Price Available Upon Request",
    image: Table
  },
  { 
    id: "shutter-door-double",
    name: "Zigzag Cabro Mold", 
    detail: "Cabro Mold.",
    price: "Price Available Upon Request",
    image: Zigzag
  },
 
  { 
    id: "vibrating-table",
    name: "Square Cabro mold", 
    detail: "Cabro mold.",
    price: "Price Available Upon Request",
    image: Square
  },
  {
    id: "cabro-blocks",
    name: "Block Making Machine",
    detail: "Manual block making machine.",
    price: "Price Available Upon Request",
    image: Block2
  },
 
  { 
    id: "culvert-mold-900",
    name: "Road Channel Mold", 
    detail: "Road channel mold.",
    price: "Price Available Upon Request",
    image: Road
  },
  // { 
  //   id: "fencing-post-molds",
  //   name: "Shallow Drain", 
  //   detail: "Precision dimension templates engineered to cast crisp, structural load-bearing concrete modules.",
  //   price: "Price Available Upon Request",
  //   image: Shallow
  // },
  {
    id: "aggregate-crusher",
    name: "Steel Door",
    detail: "Security window",
    price: "Price Available Upon Request",
    image: SteelDoor
  },
  { 
    id: "maize-sheller",
    name: "Grill Vent", 
    detail: "Grill vent Mold",
    price: "Price Available Upon Request",
    image: Grill
  },  
  
  {
    id: "wheelbarrow",
    name: "Interlock Block Machine",
    detail: "Interlocking block making machine",
    price: "Price Available Upon Request",
    image: Inter
  },
  {
    id: "aggregate-crusher",
    name: "Tone Gold Aggregate Mechanical Crusher",
    detail: "Diesel feed mixer.",
    price: "Price Available Upon Request",
    image: FeedMix
  },
  {
    id: "aggregate-crusher",
    name: "Wheel Barrow",
    detail: "Wheel Barrow.",
    price: "Price Available Upon Request",
    image: Wheel1
  },
   {
    id: "aggregate-crusher",
    name: "Steel Window",
    detail: "Security window",
    price: "Price Available Upon Request",
    image: Window
  },
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