import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { WebSocketSimulator } from '../utils/websocketSimulator';
import { updateAssetPrice } from '../features/crypto/cryptoSlice';

export default function WebSocketWrapper() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocketSimulator(dispatch, updateAssetPrice);
    ws.connect();

    return () => ws.disconnect();
  }, [dispatch]);

  return null;
}
