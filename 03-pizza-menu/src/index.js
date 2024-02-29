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

function Menu() {
  const pizzas = pizzaList;
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className='pizzas'>
          {pizzas.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
        </ul>
      )}

      {/* <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price={10}
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mozarella, and mushrooms'
        photoName='pizzas/funghi.jpg'
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt='Spinaci Pizza' />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  return (
    <footer className='footer'>
      {isOpen && (
        <div className='order'>
          <p>
            We are open until {closeHour}:00. Come visit us or order online.
          </p>
          <button className='btn'>Order Now</button>
        </div>
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
