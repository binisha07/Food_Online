<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSB FOOD</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="index.html">
                    <img class="logo" src="images/logo.jpeg" alt="LOGO">

                </a>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="pages/about.html">About</a></li>
                    <li><a href="pages/contact.html">Contact</a></li>
                    <li><a href="#" id="cartBtn">Cart 🛒 (<span id="cartCount">0</span>)</a></li>
                </ul>
            </nav>
        </div>
        </header>
        <!-- --------------Hero Section------------------------ -->
        <section class="hero">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Delicious Food <br> Delivered To Your Door</h1>
                    <p>Fresh, hot and tasty meals delivered fast at your doorstep. 
                        Order your favorite dishes anytime.</p>
                        <div class="hero-buttons">
                            <a href="#menu" class="btn-primary" id="orderNowBtn">Order Now</a>
                            <a href="/pages/menu.html" class="btn-secondary">View Menu</a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="images/Top burger.webp" alt="Delicious Burger">
                    </div>
                </div>
            </section>
            <!-- -------------------------Login and Register Popup---------------------------- -->
            <div class="login-popup <?= isActiveForm('login', $activeForm);?>" id="loginPopup">
                <div class="login-box">
                    <span class="close-btn" id="closeLogin">&times;</span>
                    <form action="login_register.php" method="post">
                        <h2>Sign in</h2>
                        <?= showError($errors['login']) ?>
                        <input type="email" name="email" placeholder="Email" required>
                        <input type="password" name="password" placeholder="Password" required>
                        <button type="submit" name="login">Login </button>
                        <br>
                        <br>
                        <p>Don't have an account? <a href="#" id="gotoSignup">Sign up</a></p>
                    </form>
                </div>
            </div>

            <div class="signup-popup <?= isActiveForm('register', $activeForm); ?>" id="registerPopup">
                <div class="signup-box">
                    <span class="close-btn" id="closesignup">&times;</span>
                    <form action="login_register.php" method="post">
                        <h2>Register</h2>
                        <?= showError($errors['register']) ?>
                        <input type="text" name="name" placeholder="Name" required>
                        <input type="email" name="email" placeholder="Email" required>
                        <input type="password" name="password" placeholder="Password" required>
                        <select name="role" required>
                            <option value="">--Select Role--</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <br>
                        <br>
                        <button type="submit" name="register">Register</button>
                        <br>
                        <br>
                        <p>Already have an account? <a href="#" id="gotoSignin">Log in</a></p>
                    </form>
                </div>
            </div>
            <!-- ------------------------------------menu section-------------------------------------- -->
            <section id="menu" class="menu-section">
                <h1>Explore Our Menu</h1>
                <!-- SEARCH + FILTER -->
                 <div class="menu-controls">
                    <input type="text" id="searchBar" placeholder="Search your favorite food...">
                    <div class="filters">
                        <button class="filter-btn active" data-category="all">All</button>
                        <button class="filter-btn" data-category="veg">Veg</button>
                        <button class="filter-btn" data-category="nonveg">Non-Veg</button></div> </div>
                        <!-- FOOD ITEMS -->
                         <div class="menu-grid" id="menuGrid">
                            <div class="food-card" data-category="veg">
                                <img src="images/paneer butter masala.jpg">
                                <h3>Paneer Butter Masala</h3>
                                <p>Rs 250</p>
                                <button onclick="addToCart('Paneer Butter Masala', 250)">Add</button>
                            </div>
                            <div class="food-card" data-category="nonveg">
                                <img src="images/chicken curry.jpg">
                                <h3>Chicken Curry</h3>
                                <p>Rs 300</p>
                                <button onclick="addToCart('Chicken Curry', 300)">Add</button>
                            </div>
                            <div class="food-card" data-category="veg">
                                <img src="images/veg steam momo.jpg">
                                <h3>Veg Steamed MoMo</h3>
                                <p>Rs 150</p>
                                <button onclick="addToCart('Veg MoMo', 150)">Add</button>
                            </div>
                            <div class="food-card" data-category="nonveg">
                                <img src="images/chicken c momo.jpg">
                                <h3>Chicken C Momo</h3>
                                <p>Rs 350</p>
                                <button onclick="addToCart('Chicken c momo', 350)">Add</button>
                            </div>
                            <div class="food-card" data-category="veg">
                                <img src="images/veg fried momo.webp">
                                <h3>Veg Fried MoMo</h3>
                                <p>Rs 180</p>
                                <button onclick="addToCart('Veg fried MoMo', 180)">Add</button>
                            </div>
                            <div class="food-card" data-category="nonveg">
                                <img src="images/chicken momo.jpg">
                                <h3>Chicken Steamed Momo</h3>
                                <p>Rs 300</p>
                                <button onclick="addToCart('Chicken momo', 300)">Add</button>
                            </div>
                            <div class="food-card" data-category="veg">
                                <img src="images/veg C momo.png">
                                <h3>Veg C MoMo</h3>
                                <p>Rs 300</p>
                                <button onclick="addToCart('Veg C MoMo', 380)">Add</button>
                            </div>
                            <div class="food-card" data-category="nonveg">
                                <img src="images/chicken pizza.webp">
                                <h3>Chicken Pizza</h3>
                                <p>Rs 320</p>
                                <button onclick="addToCart('Chicken pizza', 320)">Add</button>
                            </div>
                            <div class="food-card" data-category="veg">
                                <img src="images/veg burger.jpg">
                                <h3>Veg Burger</h3>
                                <p>Rs 280</p>
                                <button onclick="addToCart('Veg Burger', 280)">Add</button>
                            </div>
                            <div class="food-card" data-category="nonveg">
                                <img src="images/chicken burger.avif">
                                <h3>Chicken Burger</h3>
                                <p>Rs 300</p>
                                <button onclick="addToCart('Chicken Burger', 300)">Add</button>
                            </div>
                        </div>
                    </section>
                    <div class="cart-sidebar" id="cartSidebar">
                        <div class="cart-header">
                            <h2>Your Cart</h2>
                            <button id="closeCart" class="close-cart-btn">&times;</button>
                        </div>
                        <div id="cartItems"></div>
                        <div class="cart-footer">
                            <h3>Total: Rs <span id="cartTotal">0</span></h3>
                            <button class="checkout-btn">Checkout</button>
                        </div>
                    </div>
                    <div id="toast">Item added to cart</div>
                    <!-- ---------------- Contact Section ----------------- -->
                     <section class="contact-section">
                        <h2>Contact Us</h2>
                        <p>We'd love to hear from you! Send us a message and we'll get back to you soon.</p>
                        <div class="contact-container">
                            <form id="contactForm">
                                <input type="text" name="name" placeholder="Your Name" required>
                                <input type="email" name="email" placeholder="Your Email" required>
                                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                                <button type="submit">Send Message</button>
                                <p id="contactMsg" class="contact-msg"></p>
                            </form>
                            <div class="contact-info">
                                <h3>Get in Touch</h3>
                                <p><strong>Email:</strong> onlinessbfood02@gmail.com</p>
                                <p><strong>Phone:</strong> +977 9766511741</p>
                                <p><strong>Address:</strong> Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </section>
                    <!-- ---------------- Footer ----------------- -->
                     <footer>
                        <div class="footer-container">
                            <div class="footer-left">
                                <img src="images/logo.jpeg" alt="SSB FOOD Logo" class="footer-logo">
                                <p>Delicious food delivered fast at your doorstep.</p>
                            </div>
                            <div class="footer-center">
                                <h3>Quick Links</h3>
                                <br>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="pages/about.html">About</a></li>
                                    <li><a href="pages/contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div class="footer-right">
                                <h3>Follow Us</h3>
                                <br>
                                <div class="social-links">
                                    <a href="#">Facebook</a>
                                    <a href="#">Instagram</a>
                                </div>
                            </div>
                        </div>
                        <p class="footer-bottom">© 2026 SSB FOOD. All Rights Reserved.</p>
                    </footer>
            
    <script src="assets/script.js"></script>
</body>
</html>

