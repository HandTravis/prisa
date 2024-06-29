// src/pages/Sales.js
import React from 'react';

const Sales = () => {
  return (
    <div>
      <h1>Sales Page</h1>
      <p>This is where minifigs will be sold.</p>
      <section>
        <header>
          <p>Find your next minifig!</p>
        </header>
        <search>
          <form action="/search/">
            <label for="minifig">Enter name of minifig here</label>
            <input type="search" id="minifig" name="q" />
            
          </form>
        </search>
      </section>
    </div>
  );
};

export default Sales;