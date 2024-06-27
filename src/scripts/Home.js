import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const interactiveButton = document.getElementById('interactiveButton');
    if (interactiveButton) {
      interactiveButton.addEventListener('mouseover', () => {
        alert('Button hovered!');
      });
    }
  }, []);

  return (
    <section>
      <h2>About This Site</h2>
      <p>This is a sample website to demonstrate HTML and CSS usage.</p>
      <button id="interactiveButton">Hover over me!</button>
    </section>
  );
};

export default Home;
