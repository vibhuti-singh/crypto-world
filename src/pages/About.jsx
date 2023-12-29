import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">About Crypto Coin App</h1>
      <p className="text-gray-700 mb-4">
        Welcome to Crypto Coin App, your go-to platform for exploring the world of cryptocurrencies.
        Whether you are a seasoned investor or a curious enthusiast, we provide you with the latest
        information on various cryptocurrencies.
      </p>
      <p className="text-gray-700 mb-4">
        Our mission is to empower you with valuable insights, real-time market data, and detailed
        information about different coins. Stay updated on market trends, prices, and changes to make
        informed decisions in the fast-paced world of crypto.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Explore a vast range of cryptocurrencies</li>
        <li>View real-time market data</li>
        <li>Get detailed information about each coin</li>
        <li>Track price changes and trends</li>
        <li>Search for specific coins with ease</li>
      </ul>
      <p className="text-gray-700 mb-4">
        We are committed to providing a user-friendly experience and keeping you updated on the
        ever-evolving cryptocurrency landscape. Thank you for choosing Crypto Coin App!
      </p>
    </div>
  );
};

export default About;
