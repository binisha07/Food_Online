document.addEventListener("DOMContentLoaded", function () {

  // ================= LOGIN POPUP =================
  const openLogin = document.getElementById("openLogin");
  const loginPopup = document.getElementById("loginPopup");
  const closeLogin = document.getElementById("closeLogin");

  if (openLogin && loginPopup && closeLogin) {
    openLogin.addEventListener("click", function (e) {
      e.preventDefault();
      loginPopup.style.display = "flex";
    });

    closeLogin.addEventListener("click", function () {
      loginPopup.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === loginPopup) {
        loginPopup.style.display = "none";
      }
    });
  }

  // ================= SIGNUP POPUP =================
  const openSignup = document.getElementById("openSignup");
  const registerPopup = document.getElementById("registerPopup");
  const closeSignup = document.getElementById("closesignup");

  if (openSignup && registerPopup && closeSignup) {
    openSignup.addEventListener("click", function (e) {
      e.preventDefault();
      registerPopup.style.display = "flex";
    });

    closeSignup.addEventListener("click", function () {
      registerPopup.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === registerPopup) {
        registerPopup.style.display = "none";
      }
    });
  }

  // ================= SWITCH LOGIN ↔ SIGNUP =================
  const gotoSignup = document.getElementById("gotoSignup");
  const gotoLogin = document.getElementById("gotoSignin");

  if (gotoSignup && loginPopup && registerPopup) {
    gotoSignup.addEventListener("click", function(e){
      e.preventDefault();
      loginPopup.style.display = "none";
      registerPopup.style.display = "flex";
    });
  }

  if (gotoLogin && loginPopup && registerPopup) {
    gotoLogin.addEventListener("click", function(e){
      e.preventDefault();
      registerPopup.style.display = "none";
      loginPopup.style.display = "flex";
    });
  }
// open cart when clicked  order now
  document.getElementById("orderNowBtn").addEventListener("click", function(e){
  e.preventDefault();

  // Show the cart
  document.getElementById("cartSidebar").classList.add("active");

  // Scroll to the menu section
  const menuSection = document.getElementById("menu");
  if(menuSection){
    menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
  // ================= CART SYSTEM =================
  let cart = [];

  window.addToCart = function(name, price) {
    let item = cart.find(i => i.name === name);

    if (item) {
      item.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    updateCart();
    showToast();
  };

  function updateCart() {
    const container = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");
    const countEl = document.getElementById("cartCount");

    if (!container || !totalEl || !countEl) return;

    container.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty</p>";
    }

    cart.forEach((item, index) => {
      total += item.price * item.qty;
      count += item.qty;

      container.innerHTML += `
        <div class="cart-item">
          <span>${item.name}</span>
          <div>
            <button onclick="changeQty(${index}, -1)">-</button>

            <input 
              type="number" 
              value="${item.qty}" 
              min="1"
              oninput="updateQtyInput(${index}, this.value)"
              class="qty-input"
            >

            <button onclick="changeQty(${index}, 1)">+</button>
            <button onclick="removeItem(${index})">x</button>
          </div>
        </div>
      `;
    });

    totalEl.textContent = total;
    countEl.textContent = count;
  }

  window.changeQty = function(index, change) {
    cart[index].qty += change;

    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }

    updateCart();
  };

  window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCart();
  };

  window.updateQtyInput = function(index, value) {
    let qty = parseInt(value);

    if (isNaN(qty) || qty < 1) {
      qty = 1;
    }

    cart[index].qty = qty;
    updateCart();
  };

  // ================= CART SIDEBAR =================
  const cartBtn = document.getElementById("cartBtn");
  const cartSidebar = document.getElementById("cartSidebar");
  const closeCart = document.getElementById("closeCart");

  if (cartBtn && cartSidebar && closeCart) {
    cartBtn.addEventListener("click", function(e) {
      e.preventDefault();
      cartSidebar.classList.add("active");
    });

    closeCart.addEventListener("click", function() {
      cartSidebar.classList.remove("active");
    });
  }

  // ================= SEARCH + FILTER =================
  const searchBar = document.getElementById("searchBar");
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".food-card");

  let category = "all";

  if (buttons.length > 0) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        category = btn.dataset.category;
        filterItems();
      });
    });
  }

  if (searchBar) {
    searchBar.addEventListener("keyup", filterItems);
  }

  function filterItems() {
    if (!searchBar) return;

    let value = searchBar.value.toLowerCase();

    cards.forEach(card => {
      let name = card.querySelector("h3").textContent.toLowerCase();
      let cardCat = card.dataset.category;

      let matchSearch = name.includes(value);
      let matchCategory = category === "all" || category === cardCat;

      card.style.display = (matchSearch && matchCategory) ? "block" : "none";
    });
  }

  // ================= CONTACT FORM =================
  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("contactMsg");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e){
      e.preventDefault();
      contactMsg.textContent = "Thank you! Your message has been sent.";
      contactForm.reset();

      setTimeout(() => {
        contactMsg.textContent = "";
      }, 3000);
    });
  }

  // ================= TOAST =================
  function showToast() {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

});

document.addEventListener("DOMContentLoaded", function () {

  // ================= LOGIN POPUP =================
  const openLogin = document.getElementById("openLogin");
  const loginPopup = document.getElementById("loginPopup");
  const closeLogin = document.getElementById("closeLogin");

  if (openLogin && loginPopup && closeLogin) {
    openLogin.addEventListener("click", function (e) {
      e.preventDefault();
      loginPopup.style.display = "flex";
    });

    closeLogin.addEventListener("click", function () {
      loginPopup.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === loginPopup) {
        loginPopup.style.display = "none";
      }
    });
  }

  // ================= SIGNUP POPUP =================
  const openSignup = document.getElementById("openSignup");
  const registerPopup = document.getElementById("registerPopup");
  const closeSignup = document.getElementById("closesignup");

  if (openSignup && registerPopup && closeSignup) {
    openSignup.addEventListener("click", function (e) {
      e.preventDefault();
      registerPopup.style.display = "flex";
    });

    closeSignup.addEventListener("click", function () {
      registerPopup.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === registerPopup) {
        registerPopup.style.display = "none";
      }
    });
  }

  // ================= SWITCH LOGIN ↔ SIGNUP =================
  const gotoSignup = document.getElementById("gotoSignup");
  const gotoLogin = document.getElementById("gotoSignin");

  if (gotoSignup && loginPopup && registerPopup) {
    gotoSignup.addEventListener("click", function(e){
      e.preventDefault();
      loginPopup.style.display = "none";
      registerPopup.style.display = "flex";
    });
  }

  if (gotoLogin && loginPopup && registerPopup) {
    gotoLogin.addEventListener("click", function(e){
      e.preventDefault();
      registerPopup.style.display = "none";
      loginPopup.style.display = "flex";
    });
  }

  // ================= ORDER NOW (SAFE FIX) =================
  const orderBtn = document.getElementById("orderNowBtn");

  if (orderBtn) {
    orderBtn.addEventListener("click", function(e){
      e.preventDefault();

      const cartSidebar = document.getElementById("cartSidebar");
      if (cartSidebar) {
        cartSidebar.classList.add("active");
      }

      const menuSection = document.getElementById("menu");
      if(menuSection){
        menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // ================= CART SYSTEM =================
  let cart = [];

  window.addToCart = function(name, price) {
    let item = cart.find(i => i.name === name);

    if (item) {
      item.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    updateCart();
    showToast();
  };

  function updateCart() {
    const container = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");
    const countEl = document.getElementById("cartCount");

    if (!container || !totalEl || !countEl) return;

    container.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty</p>";
    }

    cart.forEach((item, index) => {
      total += item.price * item.qty;
      count += item.qty;

      container.innerHTML += `
        <div class="cart-item">
          <span>${item.name}</span>
          <div>
            <button onclick="changeQty(${index}, -1)">-</button>

            <input 
              type="number" 
              value="${item.qty}" 
              min="1"
              oninput="updateQtyInput(${index}, this.value)"
              class="qty-input"
            >

            <button onclick="changeQty(${index}, 1)">+</button>
            <button onclick="removeItem(${index})">x</button>
          </div>
        </div>
      `;
    });

    totalEl.textContent = total;
    countEl.textContent = count;
  }

  window.changeQty = function(index, change) {
    cart[index].qty += change;

    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }

    updateCart();
  };

  window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCart();
  };

  window.updateQtyInput = function(index, value) {
    let qty = parseInt(value);

    if (isNaN(qty) || qty < 1) {
      qty = 1;
    }

    cart[index].qty = qty;
    updateCart();
  };

  // ================= CART SIDEBAR =================
  const cartBtn = document.getElementById("cartBtn");
  const cartSidebar = document.getElementById("cartSidebar");
  const closeCart = document.getElementById("closeCart");

  if (cartBtn && cartSidebar && closeCart) {
    cartBtn.addEventListener("click", function(e) {
      e.preventDefault();
      cartSidebar.classList.add("active");
    });

    closeCart.addEventListener("click", function() {
      cartSidebar.classList.remove("active");
    });
  }

  // ================= SEARCH + FILTER =================
  const searchBar = document.getElementById("searchBar");
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".food-card");

  let category = "all";

  if (buttons.length > 0) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        category = btn.dataset.category;
        filterItems();
      });
    });
  }

  if (searchBar) {
    searchBar.addEventListener("keyup", filterItems);
  }

  function filterItems() {
    if (!searchBar) return;

    let value = searchBar.value.toLowerCase();

    cards.forEach(card => {
      let name = card.querySelector("h3").textContent.toLowerCase();
      let cardCat = card.dataset.category;

      let matchSearch = name.includes(value);
      let matchCategory = category === "all" || category === cardCat;

      card.style.display = (matchSearch && matchCategory) ? "block" : "none";
    });
  }

  // ================= CONTACT FORM =================
  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("contactMsg");

  if (contactForm && contactMsg) {
    contactForm.addEventListener("submit", function(e){
      e.preventDefault();
      contactMsg.textContent = "Thank you! Your message has been sent.";
      contactForm.reset();

      setTimeout(() => {
        contactMsg.textContent = "";
      }, 3000);
    });
  }

  // ================= TOAST =================
  function showToast() {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

});