const productsMock = [
  {
    name: "Orange",
    votes: 3,
  },
  {
    name: "Banana",
    votes: 5,
  },
];

const addVote = (products, name) => {
  const newProductsList = products.map((product) => {
    if (product.name.toLowerCase() === name.toLowerCase()) {
      product.votes++;
    }
    return product;
  });
  console.log(newProductsList);
};

const orderArray = (objectArray) => {
  const newArray = objectArray.sort((a, b) => b.votes - a.votes);
  console.log(newArray);
};

orderArray(productsMock);
