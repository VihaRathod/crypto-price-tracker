export class WebSocketSimulator {
    constructor(dispatch, updateAction) {
      this.dispatch = dispatch;
      this.updateAction = updateAction;
      this.interval = null;
    }
  
    connect() {
      this.interval = setInterval(() => {
        this.simulatePriceUpdate();
      }, 1500);
    }
  
    disconnect() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  
    simulatePriceUpdate() {
      //  random asset ID (1-5)
      const assetId = Math.floor(Math.random() * 5) + 1;
      
      // random price change (-2% to +2%)
      const priceChangePercent = (Math.random() * 4 - 2) / 100;
      
      // current asset from store
      const currentPrice = Math.random() * 1000; 
      
      // Calculate new price
      const newPrice = currentPrice * (1 + priceChangePercent);
      
      //  new percentage changes
      const new1hChange = (Math.random() * 2 - 1) + 0.5; 
      const new24hChange = (Math.random() * 4 - 2) + 1; 
      const new7dChange = (Math.random() * 10 - 3) + 5; 
      
      // new volume (±10%)
      const newVolume = Math.random() * 10000000000;
      
      this.dispatch(this.updateAction({
        id: assetId,
        newPrice,
        new1hChange,
        new24hChange,
        new7dChange,
        newVolume
      }));
    }
  }
 
