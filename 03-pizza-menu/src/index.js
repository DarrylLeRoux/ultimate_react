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
  // const pizzas = pizzaList;
  // const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {/* check the length of the pizzaList Object, and if it contains a value, short circuit the truthy value */}
      {/* {pizzaList.length > 0 && ( */}
      {/* with ternary: */}
      {pizzaList.length > 0 ? (
        <ul className='pizzas'>
          {pizzaList.map((pizza) => {
            // pass all properties of the pizza object into a property (prop) called pizzaObj
            // alt would be <Pizza name={pizza.name} ingredients={pizza.ingredients} etc/>
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
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

  // multiple returns can be used
  if (props.pizzaObj.soldOut) return null;

  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt='Spinaci Pizza' />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>${props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Order(props) {
  return (
    <div className='order'>
      <p>
        We are open until {props.closeHour}:00. Come visit us or order online.
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

  console.log(isOpen);

  // if (!isOpen)
  //   return (
  //     <p>
  //       Sorry, we are closed. We are open from {openHour}:00 until {closeHour}
  //       :00.
  //     </p>
  //   );

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
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
