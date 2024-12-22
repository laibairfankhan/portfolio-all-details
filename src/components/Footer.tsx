import React from 'react';

const Footer = () => {
  return (
    <div className="footer-box">
      <p>© Laiba Irfan All Rights Reserved 2024</p>

      <div className="my-4">
        <p>Follow me on:</p>
        <a
          href="https://www.linkedin.com/in/laiba-irfan-a5b4262b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          LinkedIn
        </a>
        |
        <a
          href="https://www.behance.net/laibakhan11777"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          Behance
        </a>
        |
        <a
          href="https://github.com/laibairfankhan"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;

