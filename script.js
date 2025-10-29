const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");

function renderProducts(filter = "all") {
  productList.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <span>${p.price} грн</span>
      <button>Добавить в корзину</button>
    `;
    productList.appendChild(card);
  });
}

categoryFilter.addEventListener("change", e => renderProducts(e.target.value));
renderProducts();
