import React, { useState, useEffect } from 'react';
import coinService from '../features/coinService';
import { Link } from 'react-router-dom';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await coinService.getCoins();
        setCoins(data);
      } catch (error) {
        setError('Error loading data');
      }
    };

    fetchCoins();
  }, []);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container1 w-11/12 pt-12">
      <div className="mb-4 w-full">
        <input
          type="text"
          placeholder="Search by name or symbol"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full border border-gray-300 rounded"
        />
      </div>

      {!coins.length && !error && <div className="pt-10">Loading...</div>}
      {coins.length > 0 && (
        <div className="w-full overflow-x-auto">
          <table className="w-full shadow-xl bg-white border border-gray-300">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-2 px-4 border-b">Rank</th>
                <th className="py-2 px-4 border-b">Icon</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Symbol</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">Price (USD)</th>
                <th className="py-2 px-4 border-b hidden md:table-cell ">Change (24h)</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredCoins.map((coin, index) => (
                <tr
                  key={coin.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                >
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 h-8 w-8 border-b">
                    <img src={coin.image} alt="" className="w-full h-auto" />
                  </td>
                  <td className="py-2 px-4 border-b text-xs md:text-base">{coin.name}</td>
                  <td className="py-2 px-4 border-b text-xs md:text-base">{coin.symbol}</td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">${coin.current_price}</td>
                  <td
                    className={`py-2 px-4 border-b font-bold hidden md:table-cell ${
                      coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {coin.price_change_percentage_24h}%
                  </td>
                  <td className="py-2 px-4 ">
                    <Link  to={`/coinpage/${coin.id}`} >
                    <button className='h-10 w-24 border-2 rounded-lg border-gray-300  text-blue-800 hover:text-blue-400 text-xs md:text-base'>View More</button>
                    </Link>
                  </td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CoinList;
