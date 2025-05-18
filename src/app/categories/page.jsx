import AccordionWithSearch from "@/client/AccordionWithSearch";
import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";

export default function Categories() {
  return (
    <>
      <Container className="mt-4">
        <div className="categorysection">
          <div className="searchaccom">
            <AccordionWithSearch />
          </div>
          <div className="rightcat">
            <h4>Bluetooth Speaker</h4>
            <div className="categoryopt">
              <div className="div"></div>
              <div className="categoryrightopt">
                <div className="artsort">
                  <article>Availability:</article>
                  <select className="sortselect ms-2" name="cars" id="cars">
                    <option value="instock">In Stock</option>
                    <option value="outofstock">Out of Stock</option>
                  </select>
                </div>
                <div className="artfilter ms-3">
                  <article>Filtered by:</article>
                  <select className="filterselect ms-2" name="cars" id="cars">
                    <option value="volvo">Name (A-Z)</option>
                    <option value="saab">Name (Z-A)</option>
                    <option value="mercedes">Price (High to Low)</option>
                    <option value="audi">Price (Low to High)</option>
                    <option value="mercedes">Ratings (Highest)</option>
                    <option value="audi">Ratings (Lowest)</option>
                  </select>
                </div>
                <article className="ms-2">10 product found:</article>
              </div>
            </div>
            <div className="displayproduct">
              <section className="productsection2 mt-2">
                <div className="productsections mt-4">
                  <div className="product-card">
                    <div className="img-container">
                      {/* Discount badge */}
                      <div className="discount-badge">-20%</div>

                      <Image
                        src={product2}
                        alt="Product 2"
                        className="product-img"
                      />

                      {/* Hover actions on right side with animations */}
                      <div className="hover-actions">
                        <button className="action-button btn-1">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className="action-button btn-2">
                          <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-code-compare"></i>
                        </button>
                      </div>
                    </div>

                    <div className="productDesc">
                      <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur, molestias?
                      </article>
                      <div className="rattings mt-2">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="starcout ms-2">(12 person)</div>
                      </div>
                      <div className="amount">
                        <article>$ 199</article>
                        <article>$ 200</article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productsections mt-4">
                  <div className="product-card">
                    <div className="img-container">
                      {/* Discount badge */}
                      <div className="discount-badge">-20%</div>

                      <Image
                        src={product2}
                        alt="Product 2"
                        className="product-img"
                      />

                      {/* Hover actions on right side with animations */}
                      <div className="hover-actions">
                        <button className="action-button btn-1">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className="action-button btn-2">
                          <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-code-compare"></i>
                        </button>
                      </div>
                    </div>

                    <div className="productDesc">
                      <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur, molestias?
                      </article>
                      <div className="rattings mt-2">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="starcout ms-2">(12 person)</div>
                      </div>
                      <div className="amount">
                        <article>$ 199</article>
                        <article>$ 200</article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productsections mt-4">
                  <div className="product-card">
                    <div className="img-container">
                      {/* Discount badge */}
                      <div className="discount-badge">-20%</div>

                      <Image
                        src={product2}
                        alt="Product 2"
                        className="product-img"
                      />

                      {/* Hover actions on right side with animations */}
                      <div className="hover-actions">
                        <button className="action-button btn-1">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className="action-button btn-2">
                          <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-code-compare"></i>
                        </button>
                      </div>
                    </div>

                    <div className="productDesc">
                      <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur, molestias?
                      </article>
                      <div className="rattings mt-2">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="starcout ms-2">(12 person)</div>
                      </div>
                      <div className="amount">
                        <article>$ 199</article>
                        <article>$ 200</article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productsections mt-4">
                  <div className="product-card">
                    <div className="img-container">
                      {/* Discount badge */}
                      <div className="discount-badge">-20%</div>

                      <Image
                        src={product2}
                        alt="Product 2"
                        className="product-img"
                      />

                      {/* Hover actions on right side with animations */}
                      <div className="hover-actions">
                        <button className="action-button btn-1">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className="action-button btn-2">
                          <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-code-compare"></i>
                        </button>
                      </div>
                    </div>

                    <div className="productDesc">
                      <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur, molestias?
                      </article>
                      <div className="rattings mt-2">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="starcout ms-2">(12 person)</div>
                      </div>
                      <div className="amount">
                        <article>$ 199</article>
                        <article>$ 200</article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productsections mt-4">
                  <div className="product-card">
                    <div className="img-container">
                      {/* Discount badge */}
                      <div className="discount-badge">-20%</div>

                      <Image
                        src={product2}
                        alt="Product 2"
                        className="product-img"
                      />

                      {/* Hover actions on right side with animations */}
                      <div className="hover-actions">
                        <button className="action-button btn-1">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className="action-button btn-2">
                          <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-code-compare"></i>
                        </button>
                      </div>
                    </div>

                    <div className="productDesc">
                      <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur, molestias?
                      </article>
                      <div className="rattings mt-2">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="starcout ms-2">(12 person)</div>
                      </div>
                      <div className="amount">
                        <article>$ 199</article>
                        <article>$ 200</article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productsections mt-4">
                  <div className="product-card">
                    <div className="img-container">
                      {/* Discount badge */}
                      <div className="discount-badge">-20%</div>

                      <Image
                        src={product2}
                        alt="Product 2"
                        className="product-img"
                      />

                      {/* Hover actions on right side with animations */}
                      <div className="hover-actions">
                        <button className="action-button btn-1">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className="action-button btn-2">
                          <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-code-compare"></i>
                        </button>
                      </div>
                    </div>

                    <div className="productDesc">
                      <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur, molestias?
                      </article>
                      <div className="rattings mt-2">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="starcout ms-2">(12 person)</div>
                      </div>
                      <div className="amount">
                        <article>$ 199</article>
                        <article>$ 200</article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productsections mt-4">
                  <div className="product-card">
                    <div className="img-container">
                      {/* Discount badge */}
                      <div className="discount-badge">-20%</div>

                      <Image
                        src={product2}
                        alt="Product 2"
                        className="product-img"
                      />

                      {/* Hover actions on right side with animations */}
                      <div className="hover-actions">
                        <button className="action-button btn-1">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className="action-button btn-2">
                          <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className="action-button btn-3">
                          <i className="fa-solid fa-code-compare"></i>
                        </button>
                      </div>
                    </div>

                    <div className="productDesc">
                      <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur, molestias?
                      </article>
                      <div className="rattings mt-2">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="starcout ms-2">(12 person)</div>
                      </div>
                      <div className="amount">
                        <article>$ 199</article>
                        <article>$ 200</article>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
