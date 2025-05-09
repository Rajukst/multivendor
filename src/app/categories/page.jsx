import React from "react";
import { Container } from "react-bootstrap";

export default function Categories() {
  return (
    <>
      <Container className="mt-4">
        <div className="categorysection">
          <div className="leftcat">
            <h2>Left Categories</h2>
          </div>
          <div className="rightcat">
            <h4>Bluetooth Speakers</h4>
            <div className="categoryopt">
              <div className="div"></div>
              <div className="categoryrightopt">
                <div className="artsort">
                  <article>Availability:</article>
                  <select className="sortselect ms-2" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="artfilter ms-3">
                  <article>Filtered by:</article>
                  <select className="filterselect ms-2" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <article className="ms-5">10 product found:</article>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
