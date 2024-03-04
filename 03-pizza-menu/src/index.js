import React from 'react';
import ReactDOM from 'react-dom/client';
import pizzaList from './data.js';
import './index.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

//

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {pizzaList.length > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className='pizzas'>
            {pizzaList.map((pizza) => {
              // pass all properties of the pizza object into a property (prop) called pizzaObj
              // alt would be <Pizza name={pizza.name} ingredients={pizza.ingredients} etc/>
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // multiple returns can be used
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>
        We are open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className='btn'>Order Now</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Sorry, we are closed. We are open from {openHour}:00 until {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
