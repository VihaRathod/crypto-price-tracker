import React from 'react';
import MiniChart from './MiniChart';
import { formatCurrency, formatNumber, formatPercent } from '../utils/formatters';
import './CryptoRow.css';

const CryptoRow = ({ asset }) => {
  const {
    id,
    logo,
    name,
    symbol,
    price,
    change1h,
    change24h,
    change7d,
    marketCap,
    volume24h,
    circulatingSupply,
    chartData
  } = asset;

  return (
    <tr>
      <td>{id}</td>
      <td className="name-cell">
        <div className="logo-name">
          <span className="crypto-logo">{logo}</span>
          <div>
            <span className="crypto-name">{name}</span>
            <span className="crypto-symbol">{symbol}</span>
          </div>
        </div>
      </td>
      <td>{formatCurrency(price)}</td>
      <td className={change1h >= 0 ? 'positive' : 'negative'}>
        {formatPercent(change1h)}
      </td>
      <td className={change24h >= 0 ? 'positive' : 'negative'}>
        {formatPercent(change24h)}
      </td>
      <td className={change7d >= 0 ? 'positive' : 'negative'}>
        {formatPercent(change7d)}
      </td>
      <td>{formatCurrency(marketCap)}</td>
      <td>{formatCurrency(volume24h)}</td>
      <td>{formatNumber(circulatingSupply)} {symbol}</td>
      <td><MiniChart data={chartData} change7d={change7d} /></td>
    </tr>
  );
};

export default CryptoRow;