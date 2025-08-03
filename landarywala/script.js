
document.addEventListener("DOMContentLoaded", function () {
  const services = [
    { id: 1, name: "Dry Cleaning", price: 200 },
    { id: 2, name: "Wash & Fold", price: 100 },
    { id: 3, name: "Ironing", price: 30 },
    { id: 4, name: "Stain Removal", price: 500 },
    { id: 5, name: "Leather & Suede Cleaning", price: 999 },
    { id: 6, name: "Wedding Dress Cleaning", price: 2800 }
  ];

  const serviceList = document.getElementById("service-list");
  const cartTable = document.querySelector("#cart-table tbody");
  const totalAmount = document.getElementById("total-amount");

  let cart = [];

  function renderServices() {
    serviceList.innerHTML = ""; // Clear existing services
    services.forEach(service => {
      const inCart = cart.find(item => item.id === service.id);
      const item = document.createElement("div");
      item.className = "service-item";
      item.innerHTML = `
        <div class="service-name">🧺 ${service.name} <span class="service-price">₹${service.price.toFixed(2)}</span></div>
        <div>
          <button class="add-btn" data-id="${service.id}">Add Item ➕</button>
          ${inCart ? `<button class="remove-btn" data-id="${service.id}">Remove Item ➖</button>` : ''}
        </div>
      `;
      serviceList.appendChild(item);
    });
  }

  serviceList.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      addToCart(id);
    } else if (e.target.classList.contains("remove-btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      removeFromCart(id);
    }
  });

  function addToCart(id) {
    const item = services.find(s => s.id === id);
    if (!cart.find(c => c.id === id)) {
      cart.push(item);
      updateCart();
    }
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
  }

  function updateCart() {
    cartTable.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>₹${item.price.toFixed(2)}</td>
      `;
      cartTable.appendChild(row);
    });
    totalAmount.innerText = total.toFixed(2);
    renderServices(); // Refresh buttons after cart update
  }

  renderServices();
});
document.getElementById("book-now-btn").addEventListener("click", function () {
      const name = document.getElementById("full-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (!name || !email || !phone) {
        alert("Please fill in all fields.");
        return;
      }

      // Show Thank You Message
      document.getElementById("thank-you-msg").style.display = "block";

      // Clear the form
      document.getElementById("booking-form").reset();

      // Clear the cart
      cart = [];
      updateCart();
    });

