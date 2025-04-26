import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../features/crypto/cryptoSlice';
import CryptoRow from './CryptoRow';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <div className="table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => (
            <CryptoRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;