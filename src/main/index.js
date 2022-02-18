import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://43fef170-ea1e-4284-9e65-f481f60b874f.mock.pstmn.io/products/"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })

      .catch(function (error) {//eslint-disable-line no-unused-vars       
        console.error("에러 발생 : error");
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card" key={index}>
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img
                    className="product-img"
                    src={product.imageUrl}
                    alt="상품의 이미지"
                    key={index}
                  />
                </div>
                <div className="product-contents" key={index}>
                  <span className="product-name" key={index}>
                    {product.name}
                  </span>
                  <span className="product-price" key={index}>
                    {product.price}원
                  </span>
                  <div className="product-seller" key={index}>
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                      alt="판매자 이미지"
                      key={index}
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MainPage;
