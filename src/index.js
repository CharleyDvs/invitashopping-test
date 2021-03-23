import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const productsMock = [
  {
    name: "Orange",
    votes: 0,
  },
  {
    name: "Banana",
    votes: 0,
  },
];

function GroceryApp({ products }) {
  const [productsList, setProductsList] = useState(products);

  const addVote = (products, name) => {
    const newProductsList = products.map((product) => {
      if (product.name.toLowerCase() === name.toLowerCase()) {
        product.votes++;
      }
      return product;
    });
    setProductsList(newProductsList);
  };

  const downVote = (products, name) => {
    const newProductsList = products.map((product) => {
      if (
        product.name.toLowerCase() === name.toLowerCase() &&
        product.votes > 0
      ) {
        product.votes--;
      }
      return product;
    });
    setProductsList(newProductsList);
    console.log("working");
  };

  return (
    <div className="App">
      <Products
        products={productsList}
        onVoteAdd={addVote}
        onDownVote={downVote}
      />
    </div>
  );
}

const Products = ({ products = [], onVoteAdd, onDownVote }) => {
  const sortedArray = products.sort((a, b) => b.votes - a.votes);
  return (
    <ul>
      {sortedArray.map((product, index) => (
        <li key={`${product.name} - ${index}`}>
          {" "}
          <span>{product.name}</span> - <span>votes: {product.votes}</span>{" "}
          <button
            onClick={() => {
              onVoteAdd(products, product.name);
            }}
          >
            +
          </button>{" "}
          <button
            onClick={() => {
              onDownVote(products, product.name);
            }}
            disabled={product.votes === 0}
          >
            -
          </button>{" "}
        </li>
      ))}
    </ul>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <GroceryApp products={productsMock} />
  </React.StrictMode>,
  document.getElementById("root")
);
