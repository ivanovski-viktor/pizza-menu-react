import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const numPizzas = pizzaData.length;
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>React Pizza Menu!</h1>
    </header>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>Our menu:</h2>
      {numPizzas > 0 ? (
        <>
          <p>All of our tasty pizzas.</p>
          <ul className="pizzas">
            {pizzaData.map(
              ({ name, photoName, ingredients, price, soldOut }) => (
                <Pizza
                  key={name}
                  src={photoName}
                  alt={name}
                  name={name}
                  description={ingredients}
                  price={price}
                  soldOut={soldOut}
                />
              )
            )}
          </ul>
        </>
      ) : null}
    </div>
  );
}
function Pizza({ soldOut, src, alt, name, description, price }) {
  return (
    <li className={!soldOut ? "pizza" : "pizza sold-out"}>
      <img src={src} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{!soldOut ? price + "$" : "SOLD OUT!"}</span>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const closeHour = 22;
  const openHour = 12;
  const isOpen = hour < closeHour && hour >= openHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>We are closed</p>
      )}
    </footer>
  );
}
function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        {" "}
        We are open! Working hours {openHour}
        :00 - {closeHour}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
//React v18
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
