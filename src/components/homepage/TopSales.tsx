import React from "react";
import { Link } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  img: string;
  price: string;
  price2?: string;
}
export interface TopSalesProps {
  products: Product[];
}

const TopSales = ({ products }: TopSalesProps) => {
  return (
    <section id="top-sales">
      <h2 className="container">پرفروش ترین ها</h2>
      <div className="container flex">
        {products.slice(0, 4).map((item) => {
          return (
            <div key={item.id}>
              <div className="card">
                <Link to={`/products/${item.id}`}>
                  <img src={item.img} alt="" />
                  <h2>{item.name}</h2>
                  <div className="price">
                    <p className={`${item.price2 ? "discounted-price" : ""}`}>
                      {item.price2}
                    </p>
                    <p className={`${item.price2 ? "discounted" : ""}`}>
                      {item.price}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopSales;
