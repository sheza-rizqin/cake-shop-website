import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

   const addToCart = (cake) => {
    setCart([...cart, { ...cake, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="background">
        <header id="header">
          <div id="cart">
            <Link to="/cart">
              <span className="cart-icon">🛒</span>
            </Link>
          </div>
          <div id="cakes-section">
            <h1>Cakes & Cravings Bakery</h1>
            <h2>Choose from the different variety of cakes !!!</h2>
          </div>
        </header>

        <div id="cakes-list">
          <div className="cake-card">
            <Link to="/cake/1">
              <img src="https://i.pinimg.com/564x/68/6e/26/686e26fa77c71634fa5efd76c995eda8.jpg" alt="Cake 1" />
            </Link>
            <p>Chocolate Cake</p>
            <button onClick={() => addToCart({ id: 1, name: "Chocolate Cake", price: 15.99, image: "https://i.pinimg.com/564x/68/6e/26/686e26fa77c71634fa5efd76c995eda8.jpg" })}>Add to Cart</button>
          </div>
          <div className="cake-card">
            <Link to="/cake/2">
              <img src="https://i.pinimg.com/564x/0c/09/af/0c09afd6ef2745b1515088546d58d502.jpg" alt="Cake 2" />
            </Link>
            <p>Cheese Cake</p>
            <button onClick={() => addToCart({ id: 2, name: "Cheese Cake", price: 21.99, image: "https://i.pinimg.com/564x/0c/09/af/0c09afd6ef2745b1515088546d58d502.jpg" })}>Add to Cart</button>
          </div>
          <div className="cake-card">
            <Link to="/cake/3">
              <img src="https://i.pinimg.com/564x/e9/5b/9e/e95b9e984338239bd6e97762ea5ecd30.jpg" alt="Cake 3" />
            </Link>
            <p>Strawberry Cake</p>
            <button onClick={() => addToCart({ id: 3, name: "Strawberry Cake", price: 18.99, image: "https://i.pinimg.com/564x/e9/5b/9e/e95b9e984338239bd6e97762ea5ecd30.jpg" })}>Add to Cart</button>
          </div>
        </div>

      
        <Routes>
          <Route path="/cake/:id" element={<CakeDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

// Home 
function Home() {
  return (
    <div>
      <h2>Our cakes, fresh and made with love!</h2>
    </div>
  );
}

// Categories 
function Categories() {
  return (
    <div>
      <h2>Our Cake Categories</h2>
      <p>Explore our various cake categories!</p>
      <li><Link to="/birthday-cakes">Birthday Cakes</Link></li>
              <li><Link to="/cheese-cakes">Cheese Cakes</Link></li>
              <li><Link to="/chocolate-cakes">Chocolate Cakes</Link></li>
              <li><Link to="/cupcakes">Cupcakes</Link></li>
              <li><Link to="/strawberry-cakes">Strawberry Cakes</Link></li>
    </div>
  );
}

// About Us 
function AboutUs() {
  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to cakes & Cravings Bakery where indulgence meets artistr in every exquisite creation. Our bakery is dedicated to crafting cakes that are as beautiful as they are decadent, using only the finest ingredients sourced from around the world. Each cake is a bespoken masterpiece, designed to elevate your celebrations with elegance and taste. Step into a world where dessert is more than a treat - its an unforgettable expirience, tailored to perfection just for you. </p>
    </div>
  );
}

// Contact us
function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: info@cakesandcravings.com</p>
      <p>Phone: 888-222-4343</p>
    </div>
  );
}

// Cake Detail 
function CakeDetail({ addToCart }) {
  const { id } = useParams();
  const cakeData = {
    1: {
      name: "Chocolate Cake",
      description: "Indulge in the rich, velvety decandance of our chocolate cake !!",
      ingredients: ["Flour", "Cocoa", "Sugar", "Eggs", "Butter"],
      flavor: "Chocolate",
      sizes: ["Small", "Medium", "Large"],
      price: 15.30,
      image: "https://i.pinimg.com/564x/68/6e/26/686e26fa77c71634fa5efd76c995eda8.jpg",
      reviews: [
        { rating: 5, comment: "DElicious taste! Will definitely buy again !!" },
        { rating: 4, comment: "Very good, but a little too sweet" },
      ],
    },
    2: {
      name: "Cheese Cake",
      description: "Unveil the velvety magic of our cheesecakes, where evry bite offers a luscious, creamy filling that melts seamlessly over a golden crisp crust.",
      ingredients: ["Graham Cracker Crumbs", "Cream cheese", "Sugar", "Flour", "Eggs"],
      flavor: "Vanilla",
      sizes: ["Small", "Medium", "Large"],
      price: 12.99,
      image: "https://i.pinimg.com/564x/0c/09/af/0c09afd6ef2745b1515088546d58d502.jpg",
      reviews: [
        { rating: 5, comment: "Best cheese cake ever!" },
        { rating: 3, comment: "Good, but costly." },
      ],
    },
    3: {
      name: "Strawberry Cake",
      description: "A fresh strawberry cake topped with whipped cream.",
      ingredients: ["Strawberries", "Flour", "Sugar", "Eggs", "Butter"],
      flavor: "Strawberry",
      sizes: ["Small", "Medium", "Large"],
      price: 18.99,
      image: "https://i.pinimg.com/564x/e9/5b/9e/e95b9e984338239bd6e97762ea5ecd30.jpg",
      reviews: [
        { rating: 5, comment: "Delicious and fresh!" },
        { rating: 4, comment: "Very good, but I prefer chocolate." },
      ],
    },
  };

  const cake = cakeData[id];

  if (!cake) {
    return <p>Cake not found!</p>;
  }

  return (
    <div className="cake-detail-page">
      <h2>{cake.name}</h2>
      <img src={cake.image} alt={cake.name} />
      <p>{cake.description}</p>
      <h3>Price: ${cake.price}</h3>
      <h4>Choose Size:</h4>
      <select>
        {cake.sizes.map((size, index) => (
          <option key={index} value={size}>{size}</option>
        ))}
      </select>
      <h4>Quantity:</h4>
      <input type="number" defaultValue={1} min={1} max={10} />
      <button onClick={() => addToCart({ ...cake, quantity: 1 })}>Add to Cart</button>
      <h4>Ingredients:</h4>
      <ul>
        {cake.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Customer Reviews:</h4>
      {cake.reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating} stars</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

// Cart 
function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default App;






