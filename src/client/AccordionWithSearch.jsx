'use client';
import React, { useRef, useState, useEffect } from 'react';

const AccordionWithSearch = () => {
  // Accordion states
  const [accordions, setAccordions] = useState({
    search: { isOpen: true, height: 'auto' },
    size: { isOpen: true, height: 'auto' },
    manufacturer: { isOpen: true, height: 'auto' },
    price: { isOpen: true, height: 'auto' }
  });

  // Refs for accordion content
  const refs = {
    search: useRef(null),
    size: useRef(null),
    manufacturer: useRef(null),
    price: useRef(null)
  };

  // Set initial heights
  useEffect(() => {
    const newAccordions = { ...accordions };
    Object.keys(refs).forEach(key => {
      if (refs[key].current) {
        newAccordions[key] = {
          ...newAccordions[key],
          height: `${refs[key].current.scrollHeight}px`
        };
      }
    });
    setAccordions(newAccordions);
  }, []);

  const toggleAccordion = (accordionKey) => {
    setAccordions(prev => ({
      ...prev,
      [accordionKey]: {
        isOpen: !prev[accordionKey].isOpen,
        height: prev[accordionKey].isOpen 
          ? '0px' 
          : `${refs[accordionKey].current?.scrollHeight}px`
      }
    }));
  };

  return (
    <div className="leftcat">
      <h6>SHOP BY</h6>
      
      {/* Search Accordion (unchanged) */}
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion('search')}>
          <span>SEARCH</span>
          <span>{accordions.search.isOpen ? '-' : '+'}</span>
        </div>
        <div
          ref={refs.search}
          className="accordion-body-wrapper"
          style={{
            maxHeight: accordions.search.height,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
          }}
        >
          <div className="accordion-body">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </div>
      </div>

      {/* Size Accordion (unchanged) */}
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion('size')}>
          <span>SIZE</span>
          <span>{accordions.size.isOpen ? '-' : '+'}</span>
        </div>
        <div
          ref={refs.size}
          className="accordion-body-wrapper"
          style={{
            maxHeight: accordions.size.height,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
          }}
        >
          <div className="accordion-body">
            {['S (12)', 'M (15)', 'L (8)'].map(size => (
              <div key={size} className="sizeguide">
                <div className="sizename"><h6>{size.split(' ')[0]}</h6></div>
                <div className="sizeqty"><h6>{size.match(/\((\d+)\)/)[1]}</h6></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MANUFACTURER Accordion (matches your image exactly) */}
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion('manufacturer')}>
          <span>MANUFACTURER</span>
          <span>{accordions.manufacturer.isOpen ? '-' : '+'}</span>
        </div>
        <div
          ref={refs.manufacturer}
          className="accordion-body-wrapper"
          style={{
            maxHeight: accordions.manufacturer.height,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
          }}
        >
          <div className="accordion-body">
            <div className="manufacturer-option">
              <input type="checkbox" id="manufacturer-apple" />
              <label htmlFor="manufacturer-apple">
                Apple <span>(2)</span>
              </label>
            </div>
            {/* Add more manufacturers as needed */}
          </div>
        </div>
      </div>

      {/* PRICE Accordion (matches your image exactly) */}
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion('price')}>
          <span>PRICE</span>
          <span>{accordions.price.isOpen ? '-' : '+'}</span>
        </div>
        <div
          ref={refs.price}
          className="accordion-body-wrapper"
          style={{
            maxHeight: accordions.price.height,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
          }}
        >
          <div className="accordion-body">
            <h5>Price sort</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionWithSearch;