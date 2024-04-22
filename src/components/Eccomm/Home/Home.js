import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../PatternsApp/Products/Product.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Backend API Integration

  useEffect(() => {
    // 1. Get All Home
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          "https://661ca64ee7b95ad7fa6ab882.mockapi.io/xShoe/inventory"
        );

        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllProducts();
  }, [loading]);

  const deleteProduct = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(
        "https://661ca64ee7b95ad7fa6ab882.mockapi.io/xShoe/inventory/" + id
      );
      console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product-container">
      <h1 class="title-shop">SHOP</h1>
      <button>
        <a href="/add">Add Product</a>
      </button>

      <main class="main bd-grid">
        {products.map((product) => {
          return (
            <article class="card">
              <div class="card__img">
                <img src={product.image} alt="" />
              </div>
              <div class="card__name">
                <p>{product.name}</p>
              </div>
              <div class="card__precis">
                <a href="" class="card__icon">
                  <ion-icon name="heart-outline"></ion-icon>
                </a>

                <div>
                  <span class="card__preci card__preci--before">
                    {product.price} $
                  </span>
                  <span class="card__preci card__preci--now">
                    {product.desc}
                  </span>
                </div>
                <a href="" class="card__icon">
                  <ion-icon name="cart-outline"></ion-icon>
                </a>
                <button
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </article>
          );
        })}
      </main>

      <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </div>
  );
};

export default Home;
