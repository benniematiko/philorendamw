import React, { useState, useMemo } from 'react';
import './Products.css';

// Asset Imports
import C1034 from "../../assets/1034.jpg";
import C1020 from "../../assets/1020.jpg";
import C1003 from "../../assets/1003.jpg";
import Wheels__Barrows__Many from "../../assets/wheels__barrows__many.jpeg";
import Color__Mixer from "../../assets/color__mixer.jpeg";
import Cabro__Block from "../../assets/cabro__block.jpeg";
import Secular__Table__Saw from "../../assets/secular__table__saw.jpeg";
import Silage__Chopper from "../../assets/silage__chopper.jpeg";
import Pillar__column from "../../assets/pillar__column.jpeg";
import Road__Cubes from "../../assets/road__cubes.jpeg";
import Fencing__Post from "../../assets/fencing__post.jpeg";
import Road__Curb from "../../assets/road__curb.jpeg";
import Plastic__Cabro__Mould from "../../assets/plastic__cabro__mould.jpeg";
import IBD from "../../assets/ibd.jpeg";
import Bed11 from "../../assets/0011.jpeg";
import Mould11 from "../../assets/molds__0002.jpg";
import Culvert1001 from "../../assets/0012.jpeg";

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

// SVG Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="whatsapp-icon" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.075-.124-.277-.198-.574-.347z"/>
    <path d="M12.045 2.008c-5.516 0-9.984 4.468-9.984 9.984 0 1.764.457 3.424 1.253 4.869L2.045 22.02l5.386-1.414c1.37.744 2.93 1.166 4.614 1.166 5.516 0 9.984-4.468 9.984-9.984s-4.468-9.984-9.984-9.984zm0 18.444c-1.536 0-2.96-.396-4.211-1.084l-3.022.792.807-2.948c-.775-1.355-1.219-2.928-1.219-4.604 0-4.68 3.806-8.486 8.486-8.486s8.486 3.806 8.486 8.486-3.806 8.486-8.486 8.486z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="phone-icon" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// Catalog data categorized
const PRODUCTS_DATA = [
  { id: "pmw-35031", category: "machinery", name: "Product PMW1034", detail: "Heavy industrial machinery specification.", price: "Price Available Upon Request", image: C1034 },
  { id: "pmw-35030", category: "machinery", name: "Product PMW1020", detail: "Heavy industrial machinery specification.", price: "Price Available Upon Request", image: C1020 },
  { id: "pmw-35029", category: "machinery", name: "Product PMW1003", detail: "Heavy industrial machinery specification.", price: "Price Available Upon Request", image: C1003 },
  { id: "pmw-35028", category: "equipment", name: "Wheel Barrows", detail: "Heavy duty steel wheelbarrows.", price: "Price Available Upon Request", image: Wheels__Barrows__Many },
  { id: "pmw-35027", category: "machinery", name: "Color Mixer", detail: "High performance color mixing machine.", price: "Price Available Upon Request", image: Color__Mixer },
  { id: "pmw-35026", category: "molds", name: "Cabro Block Mold", detail: "Precision concrete cabro block mold.", price: "Price Available Upon Request", image: Cabro__Block },
  { id: "pmw-35025", category: "machinery", name: "Secular Table Saw", detail: "Heavy duty industrial table saw.", price: "Price Available Upon Request", image: Secular__Table__Saw },
  { id: "pmw-35024", category: "equipment", name: "Silage Chopper", detail: "High speed agricultural silage chopper.", price: "Price Available Upon Request", image: Silage__Chopper },
  { id: "pmw-35023", category: "molds", name: "Pillar Column Mold", detail: "Architectural concrete pillar column mold.", price: "Price Available Upon Request", image: Pillar__column },
  { id: "pmw-35022", category: "molds", name: "Road Cubes", detail: "Durable road cube concrete molds.", price: "Price Available Upon Request", image: Road__Cubes },
  { id: "pmw-35021", category: "molds", name: "Fencing Post Mold", detail: "Standard reinforced fencing post mold.", price: "Price Available Upon Request", image: Fencing__Post },
  { id: "pmw-35020", category: "molds", name: "Road Curb Mold", detail: "Heavy concrete road curbing mold.", price: "Price Available Upon Request", image: Road__Curb },
  { id: "pmw-35019", category: "molds", name: "Plastic Cabro Mould", detail: "High-density plastic cabro paving mold.", price: "Price Available Upon Request", image: Plastic__Cabro__Mould },
  { id: "pmw-35018", category: "molds", name: "IBD Drainage Mold", detail: "Invert Block Drain concrete mold.", price: "Price Available Upon Request", image: IBD },
  { id: "pmw-35016", category: "machinery", name: "Manual Brick Making Machine", detail: "Manual block and brick production press.", price: "Price Available Upon Request", image: Mould11 },
  { id: "pmw-35014", category: "architectural", name: "Steel Bed Frame", detail: "Heavy metal fabrication structural bed frame.", price: "Price Available Upon Request", image: Bed11 },
  { id: "pmw-350144", category: "molds", name: "Culvert Mold", detail: "Concrete drainage culvert mold.", price: "Price Available Upon Request", image: Culvert1001 },
  { id: "pmw-35012", category: "molds", name: "Road Side Blocks", detail: "Road side concrete edging block molds.", price: "Price Available Upon Request", image: Road1 },
  { id: "pmw-35013", category: "equipment", name: "Shallow Pan", detail: "Industrial steel pan container.", price: "Price Available Upon Request", image: Shallow },
  { id: "pmw-3505", category: "machinery", name: "Vibrating Table", detail: "Concrete compaction vibrating table.", price: "Price Available Upon Request", image: VibratingTable },
  { id: "pmw-350l", category: "machinery", name: "Concrete Mixer Machine 350L", detail: "1-bag capacity diesel motor concrete mixer.", price: "Price Available Upon Request", image: Mixer350 },
  { id: "pmw-35022-alt", category: "machinery", name: "Concrete Mixer 350L Heavy Duty", detail: "Heavy-duty steel drum concrete mixer.", price: "Price Available Upon Request", image: C1001 },
  { id: "pmw-3502", category: "machinery", name: "Site Concrete Mixer", detail: "High torque mobile concrete mixer.", price: "Price Available Upon Request", image: C1002 },
  { id: "pmw-post-10ft", category: "molds", name: "Post Mold 10 feet", detail: "10ft concrete fencing post mold.", price: "Price Available Upon Request", image: Post1 },
  { id: "pmw-culvert-900mm", category: "molds", name: "Culvert Mold 900mm", detail: "Large concrete drainage culvert mold.", price: "Price Available Upon Request", image: Culvert },
  { id: "pmw-loover-9in", category: "molds", name: "Louver Vent Mold 9 Inch", detail: "Concrete ventilation louver mold.", price: "Price Available Upon Request", image: Loover },
  { id: "pmw-cabro-cutter", category: "machinery", name: "Cabro Cutter Machine", detail: "Manual hydraulic cabro paving block cutter.", price: "Price Available Upon Request", image: Cabros },
  { id: "pmw-color-mixer", category: "machinery", name: "Color Mixer Unit", detail: "Color pigment mixer for pavers.", price: "Price Available Upon Request", image: Colors },
  { id: "pmw-side-slab-mold", category: "molds", name: "Side Slab Mold", detail: "Precision concrete side slab mold.", price: "Price Available Upon Request", image: Sideslab },
  { id: "pmw-manual-block-machine", category: "machinery", name: "Manual Block Machine", detail: "Heavy duty manual building block machine.", price: "Price Available Upon Request", image: Block },
  { id: "pmw-paving-slab-mold", category: "molds", name: "Paving Slab Mold", detail: "Commercial grade paving slab mold.", price: "Price Available Upon Request", image: Paving },
  { id: "pmw-vibrating-table-heavy", category: "machinery", name: "Vibrating Table Heavy", detail: "Industrial steel compaction vibrating table.", price: "Price Available Upon Request", image: Table },
  { id: "pmw-zigzag-cabro-mold", category: "molds", name: "Zigzag Cabro Mold", detail: "Interlocking zigzag paver mold.", price: "Price Available Upon Request", image: Zigzag },
  { id: "pmw-square-cabro-mold", category: "molds", name: "Square Cabro Mold", detail: "Square paving block concrete mold.", price: "Price Available Upon Request", image: Square },
  { id: "pmw-block-machine-2", category: "machinery", name: "Block Making Machine V2", detail: "Multi-cavity block making machine.", price: "Price Available Upon Request", image: Block2 },
  { id: "pmw-road-channel-mold", category: "molds", name: "Road Channel Mold", detail: "Road water drainage channel mold.", price: "Price Available Upon Request", image: Road },
  { id: "pmw-steel-door", category: "architectural", name: "Steel Security Door", detail: "Heavy-gauge reinforced steel door.", price: "Price Available Upon Request", image: SteelDoor },
  { id: "pmw-grill-vent", category: "architectural", name: "Grill Vent Frame", detail: "Security metal vent grill frame.", price: "Price Available Upon Request", image: Grill },  
  { id: "pmw-interlock-machine", category: "machinery", name: "Interlock Block Machine", detail: "Hydraulic interlocking block machine.", price: "Price Available Upon Request", image: Inter },
  { id: "pmw-aggregate-crusher", category: "machinery", name: "Aggregate Crusher", detail: "Mechanical aggregate stone crusher unit.", price: "Price Available Upon Request", image: FeedMix },
  { id: "pmw-wheelbarrow-single", category: "equipment", name: "Heavy Wheelbarrow", detail: "Single piece industrial wheelbarrow.", price: "Price Available Upon Request", image: Wheel1 },
  { id: "pmw-steel-window", category: "architectural", name: "Steel Security Window", detail: "Custom engineered steel window frame.", price: "Price Available Upon Request", image: Window }
];

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'machinery', label: 'Machinery & Equipment' },
  { id: 'molds', label: 'Concrete & Cabro Molds' },
  { id: 'architectural', label: 'Architectural Steel' },
  { id: 'equipment', label: 'Site Tools' }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const primaryPhone = "+254726471291";

  // Filter products by category and search text
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.detail.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Phone Call Action
  const handleCallOrder = (productName) => {
    window.location.href = `tel:${primaryPhone}`;
  };

  // WhatsApp Order Action
  const handleWhatsAppOrder = (productName, productPrice) => {
    const priceText = productPrice.toLowerCase().includes("request") 
      ? "Price available upon request" 
      : productPrice;

    const message = `Hello Philorenda Metal Works,\n\nI am interested in placing an order/inquiry for:\n\n*Product:* ${productName}\n*Price:* ${priceText}\n\nPlease share delivery arrangements and payment specs. Thank you!`;
    
    const whatsappUrl = `https://wa.me/${primaryPhone.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="products-page">
      {/* Header Banner */}
      <section className="products-banner">
        <div className="products-banner-container">
          <span className="banner-tagline">Philorenda Metal Works</span>
          <h1 className="banner-title">Complete Product Catalog</h1>
          <p className="banner-subtitle">
            Browse our range of heavy-duty machinery, concrete molds, and steel fabrications. Engineered for maximum reliability.
          </p>
        </div>
      </section>

      {/* Control Panel: Search & Categories */}
      <section className="products-controls-section">
        <div className="products-container">
          <div className="products-filter-wrapper">
            
            {/* Search Bar */}
            <div className="search-bar-box">
              <SearchIcon />
              <input 
                type="text" 
                placeholder="Search machinery, molds, steel doors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery('')}>×</button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="category-tabs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Products Display Grid */}
      <section className="products-grid-section">
        <div className="products-container">
          <div className="catalog-status-bar">
            <span>Showing <strong>{filteredProducts.length}</strong> products</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="product-image" />
                    ) : (
                      <div className="blueprint-fallback-placeholder">
                        <span>Image Pending</span>
                      </div>
                    )}
                    <div className="home-image-text-overlay">
                      <span className="home-overlay-delivery">Free delivery within Nairobi</span>
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
                        type="button" 
                        className="btn-order-now" 
                        onClick={() => handleCallOrder(product.name)}
                        data-phone="+254 726 471 291"
                      >
                        <PhoneIcon />
                        <span className="btn-text">Order Now</span>
                      </button>

                      <button 
                        type="button" 
                        className="btn-place-order" 
                        onClick={() => handleWhatsAppOrder(product.name, product.price)}
                      >
                        <WhatsAppIcon />
                        Order via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products-found">
              <h3>No products found</h3>
              <p>We couldn't find any match for "{searchQuery}". Try searching for another item or choose a different category.</p>
              <button className="reset-filter-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;