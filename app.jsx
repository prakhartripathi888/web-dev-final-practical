import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const perPage = 4;

  // fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const next = () => {
    if (index + perPage < products.length) {
      setIndex(index + perPage);
    }
  };

  const prev = () => {
    if (index - perPage >= 0) {
      setIndex(index - perPage);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Product Images</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        margin: "20px"
      }}>
        {products.slice(index, index + perPage).map(p => (
          <img
            key={p.id}
            src={p.image}
            alt=""
            style={{ width: "100%", height: "120px", objectFit: "cover" }}
          />
        ))}
      </div>

      <button onClick={prev} disabled={index === 0}>
        Previous
      </button>
      <button onClick={next} disabled={index + perPage >= products.length}>
        Next
      </button>
    </div>
  );
}
