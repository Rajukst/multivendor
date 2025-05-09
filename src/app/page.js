import LandingSlider from "@/common/LandingSlider";
import { Container } from "react-bootstrap";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <LandingSlider />
      <Container className="homediv mt-4">
        <section className="parentCat">
          <div className="parentcat1">
            <Image src={banner1} alt="banner1" />
          </div>
          <div className="parentcat2">
            <Image src={banner2} alt="banner2" />
          </div>
          <div className="parentcat3">
            <Image src={banner3} alt="banner3" />
          </div>
        </section>
        <section className="productsection1 mt-5">
          <div className="sectionHeading">
            <div className="psectionheading1">
              <article>FASHION & ACCESSORIES</article>
            </div>
            <div className="psectionheading2">
              <article>New Arrivals</article>
              <article>Best Selling</article>
              <article>Most Rettings</article>
            </div>
          </div>
          <div className="productsection mt-4">
            <div className="product-card">
              <Image src={product1} alt="Product 1" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
            <div className="product-card">
  <div className="img-container">
    {/* Discount badge */}
    <div className="discount-badge">-20%</div>
    
    <Image src={product2} alt="Product 2" className="product-img" />
    
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
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Tenetur, molestias?
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
            <div className="product-card">
              <Image src={product3} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product4} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product5} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product1} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="productsection1 mt-5">
          <div className="sectionHeading">
            <div className="psectionheading1">
              <article>FASHION & ACCESSORIES</article>
            </div>
            <div className="psectionheading2">
              <article>New Arrivals</article>
              <article>Best Selling</article>
              <article>Most Rettings</article>
            </div>
          </div>
          <div className="productsection mt-4">
            <div className="product-card">
              <Image src={product1} alt="Product 1" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product2} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product3} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product4} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product5} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product1} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
            <div className="product-card">
              <Image src={product2} alt="Product 2" className="product-img" />
              <div className="productDesc">
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur, molestias?
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
