const CategoryNav = () => {
  return (
    <>
      <div className="categoryNav">
        <div className="navcatleft">
          <h6>
            <i className="fa-regular fa-chart-bar me-3"></i> ALL CATEGORIES
            <i className="fa-regular fa-circle-down ms-5"></i>
          </h6>
        </div>
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
    </>
  );
};

export default CategoryNav;
