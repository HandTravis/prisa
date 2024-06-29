import React, { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    const interactiveButton = document.getElementById('interactiveButton');
    if (interactiveButton) {
      interactiveButton.addEventListener('mouseover', () => {
        alert('Button hovered!');
      });
      // Cleanup to remove the event listener when the component unmounts
      return () => {
        interactiveButton.removeEventListener('mouseover', () => {
          alert('Button hovered!');
        });
      };
    }
  }, []);

  return (
      <section>
        <h2>About This Site</h2>
        <p>Travis' epic new website.</p>
        <button id="interactiveButton">Hover over me!</button>
      </section>
  );
};

export default Home;
