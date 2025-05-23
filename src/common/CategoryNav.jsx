const CategoryNav = () => {
  return (
    <div className="categoryNav">
      {/* ALL CATEGORIES - Now with proper dropdown */}
      <div className="navcatleft">
        <h6>
          <i className="fa-regular fa-chart-bar me-3"></i> ALL CATEGORIES
          <i className="fa-regular fa-circle-down ms-5"></i>
        </h6>
        
        <div className="dropdown-menu">
          <ul className="category-list">
            {/* Electronics */}
            <li className="category-item has-subcategory">
              Electronics
              <div className="subcategory-panel">
                <ul>
                  <li>Kitchen Appliances</li>
                  <li>Mobile Phones</li>
                  <li>Laptops</li>
                </ul>
              </div>
            </li>
            <li className="category-item has-subcategory">
              Electronics
              <div className="subcategory-panel">
                <ul>
                  <li>Kitchen Appliances</li>
                  <li>Mobile Phones</li>
                  <li>Laptops</li>
                </ul>
              </div>
            </li>
            <li className="category-item has-subcategory">
              Electronics
              <div className="subcategory-panel">
                <ul>
                  <li>Kitchen Appliances</li>
                  <li>Mobile Phones</li>
                  <li>Laptops</li>
                </ul>
              </div>
            </li>

            {/* Home & Furniture */}
            <li className="category-item has-subcategory">
              Home & Furniture
              <div className="subcategory-panel">
                <ul>
                  <li>Sofas</li>
                  <li>Tables</li>
                  <li>Chairs</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Rest of your original navigation */}
      <div className="navcatcenter">
        <h6>Home</h6>
        <h6>Features</h6>
        <h6>Hot Deals</h6>
        <h6>New Arrivals</h6>
        <h6>Best Sellers</h6>
      </div>
      <div className="navcatright">
        <h6><i className="fa-solid fa-location-dot me-1"></i>Todays Deal</h6>
        <h6><i className="fa-solid fa-fire-flame-curved me-1"></i>Track Order</h6>
      </div>
    </div>
  );
};

export default CategoryNav;