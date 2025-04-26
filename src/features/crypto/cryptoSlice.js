import { createSlice } from '@reduxjs/toolkit';
import { initialCryptoData } from '../../data/cryptoData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: initialCryptoData,
    loading: false,
    error: null,
  },
  reducers: {
    updateAssetPrice: (state, action) => {
      const { id, newPrice, new1hChange, new24hChange, new7dChange, newVolume } = action.payload;
      const asset = state.assets.find(asset => asset.id === id);
      if (asset) {
        asset.price = newPrice;
        asset.change1h = new1hChange;
        asset.change24h = new24hChange;
        asset.change7d = new7dChange;
        asset.volume24h = newVolume;
      }
    },
  },
});

export const { updateAssetPrice } = cryptoSlice.actions;
export const selectAllAssets = (state) => state.crypto.assets;
export const selectAssetById = (state, assetId) => 
  state.crypto.assets.find(asset => asset.id === assetId);

export default cryptoSlice.reducer;
