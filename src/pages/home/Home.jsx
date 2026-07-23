import React from 'react';
import './Home.css';

// Asset Imports

import Bed11 from "../../assets/0011.jpeg";
import Mould12 from "../../assets/molds__0003.jpg";
import Mould11 from "../../assets/molds__0002.jpg";
import Culvert1001 from "../../assets/0012.jpeg";

import WheelBarrow1001 from "../../assets/0013.jpeg";
import C1001 from "../../assets/1001.jpg";
import C1002 from "../../assets/1002.jpg";
import Road1 from "../../assets/road.png";
import Shallow from "../../assets/shallow.png";
import VibratingTable from "../../assets/vibratingtable.png";
import Mixer350 from "../../assets/mixer.png";
import Block from "../../assets/block.png";
import Block2 from "../../assets/block2.png";
import Cabros from "../../assets/cabros.png";
import Colors from "../../assets/colors.png";
import Culvert from "../../assets/culvert.png";
import Loover from "../../assets/loover.png";
import Paving from "../../assets/paving.png";
import Table from "../../assets/table.png";
import FeedMix from "../../assets/feedmix.png";
import Grill from "../../assets/grill.png";
import SteelDoor from "../../assets/steeldoor.png"; 
import Zigzag from "../../assets/zigzag.png"; 
import Square from "../../assets/square.png"; 
import Inter from "../../assets/inter.png"; 
import Road from "../../assets/road.png"; 
import Wheel1 from "../../assets/wheel1.png";  
import Window from "../../assets/window.png";  
import Post1 from "../../assets/post.png";  
import Sideslab from "../../assets/sideslab.png";  

// WhatsApp Icon Component

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className="whatsapp-icon"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.075-.124-.277-.198-.574-.347z"/>
    <path d="M12.045 2.008c-5.516 0-9.984 4.468-9.984 9.984 0 1.764.457 3.424 1.253 4.869L2.045 22.02l5.386-1.414c1.37.744 2.93 1.166 4.614 1.166 5.516 0 9.984-4.468 9.984-9.984s-4.468-9.984-9.984-9.984zm0 18.444c-1.536 0-2.96-.396-4.211-1.084l-3.022.792.807-2.948c-.775-1.355-1.219-2.928-1.219-4.604 0-4.68 3.806-8.486 8.486-8.486s8.486 3.806 8.486 8.486-3.806 8.486-8.486 8.486z"/>
  </svg>
);

// Products array with unique ID keys
const PRODUCTS = [  
  { 
    id: "pmw-35016",
    name: "Manual Brick Making Machine ", 
    detail: "Manual Brick Making Machine",
    price: "Price Available Upon Request",
    image: Mould11
  },
  { 
    id: "pmw-35014",
    name: "A Bed ", 
    detail: "A bed",
    price: "Price Available Upon Request",
    image: Bed11 
  },
  { 
    id: "pmw-350144",
    name: "Culvert", 
    detail: "Culvert",
    price: "Price Available Upon Request",
    image: Culvert1001
  },

  { 
    id: "pmw-3511",
    name: "Wheel Barrow ", 
    detail: "Wheel Barrow",
    price: "Price Available Upon Request",
    image: WheelBarrow1001
  },
  { 
    id: "pmw-35012",
    name: "Road Side Blocks", 
    detail: "Road Side Blocks",
    price: "Price Available Upon Request",
    image: Road1
  },
  { 
    id: "pmw-35013",
    name: "Shalow", 
    detail: "A shallow",
    price: "Price Available Upon Request",
    image: Shallow
  },
  { 
    id: "pmw-3505",
    name: "Vibrating Table", 
    detail: "Vibrating Table.",
    price: "Price Available Upon Request",
    image: VibratingTable
  },
  { 
    id: "pmw-350l",
    name: "Concrete Mixer Machine 350L", 
    detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
    price: "Price Available Upon Request",
    image: Mixer350
  },
  { 
    id: "pmw-35022",
    name: "Concrete Mixer Machine 350L", 
    detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
    price: "Price Available Upon Request",
    image: C1001
  },
  { 
    id: "pmw-3502",
    name: "Concrete Mixer Machine 350L", 
    detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
    price: "Price Available Upon Request",
    image: C1002
  },
  { 
    id: "pmw-post-10ft",
    name: "Post Mold 10 feet", 
    detail: "Mold for creating concrete fencing post.",
    price: "Price Available Upon Request",
    image: Post1
  },
  { 
    id: "pmw-culvert-900mm",
    name: "Culvert Mold 900mm", 
    detail: "Used for making concrete culverts.",
    price: "Price Available Upon Request",
    image: Culvert
  },
  { 
    id: "pmw-loover-9in",
    name: "Loover Vent 9 inches", 
    detail: "Mold for vent.",
    price: "Price Available Upon Request",
    image: Loover
  },
  { 
    id: "pmw-cabro-cutter",
    name: "Cabro Cutter Machine", 
    detail: "Used for cutting cabro.",
    price: "Price Available Upon Request",
    image: Cabros
  },
  { 
    id: "pmw-color-mixer",
    name: "Color Mixer Machine", 
    detail: "Used for mixing paint.",
    price: "Price Available Upon Request",
    image: Colors
  },
  { 
    id: "pmw-side-slab-mold",
    name: "Side slab Mold", 
    detail: "Used for making concrete side slabs.",
    price: "Price Available Upon Request",
    image: Sideslab
  },
  { 
    id: "pmw-manual-block-machine",
    name: "Manual Block Making Machine", 
    detail: "Used for making building blocks.",
    price: "Price Available Upon Request",
    image: Block
  },
  { 
    id: "pmw-paving-slab-mold",
    name: "Paving Slab Mold", 
    detail: "Used for making concrete slabs.",
    price: "Price Available Upon Request",
    image: Paving
  },
  { 
    id: "pmw-vibrating-table",
    name: "Vibrating Table", 
    detail: "Vibrating table.",
    price: "Price Available Upon Request",
    image: Table
  },
  { 
    id: "pmw-zigzag-cabro-mold",
    name: "Zigzag Cabro Mold", 
    detail: "Cabro Mold.",
    price: "Price Available Upon Request",
    image: Zigzag
  },
  { 
    id: "pmw-square-cabro-mold",
    name: "Square Cabro mold", 
    detail: "Cabro mold.",
    price: "Price Available Upon Request",
    image: Square
  },
  {
    id: "pmw-block-machine-2",
    name: "Block Making Machine",
    detail: "Manual block making machine.",
    price: "Price Available Upon Request",
    image: Block2
  },
  { 
    id: "pmw-road-channel-mold",
    name: "Road Channel Mold", 
    detail: "Road channel mold.",
    price: "Price Available Upon Request",
    image: Road
  },
  {
    id: "pmw-steel-door",
    name: "Steel Door",
    detail: "Security window",
    price: "Price Available Upon Request",
    image: SteelDoor
  },
  { 
    id: "pmw-grill-vent",
    name: "Grill Vent", 
    detail: "Grill vent Mold",
    price: "Price Available Upon Request",
    image: Grill
  },  
  {
    id: "pmw-interlock-machine",
    name: "Interlock Block Machine",
    detail: "Interlocking block making machine",
    price: "Price Available Upon Request",
    image: Inter
  },
  {
    id: "pmw-aggregate-crusher",
    name: "Tone Gold Aggregate Mechanical Crusher",
    detail: "Diesel feed mixer.",
    price: "Price Available Upon Request",
    image: FeedMix
  },
  {
    id: "pmw-wheelbarrow",
    name: "Wheel Barrow",
    detail: "Wheel Barrow.",
    price: "Price Available Upon Request",
    image: Wheel1
  },
  {
    id: "pmw-steel-window",
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
                        <WhatsAppIcon />
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