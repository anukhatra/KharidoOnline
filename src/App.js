
import React from 'react';
import {HashRouter as Router,  Routes,  Route} from "react-router-dom";
import Header from './components/header';
import Products from './components/products';
import Details from './components/details';
import Cart from './components/cart';

import {DataProvider} from './components/dataProvider';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <section>
          <Routes>
            <Route  path="/" element={<Products/>} />
            <Route  path="products" element={<Products/>} />
            <Route  path="products/:id" element={<Details/>} />
            <Route  path="cart" element={<Cart/>} />
          </Routes>
        </section>
      </Router>
    </div>
    </DataProvider>

  );
}

export default App;
