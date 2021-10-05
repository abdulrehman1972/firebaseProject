const COINS = {
  BTC: require("./btc.png"),
  ETH: require("./eth.png"),
  WEENUS: require("./weenus.png"),
  BNB: require("./bnb.png"),
  KMBT: require("./kmbt.png"),
  DOGE: require("./doge.png"),
  DASH: require("./dash.png"),
  BUSD: require("./busd.png"),
};

function GetImageForCoin(COIN: string) {
  COIN = COIN.toUpperCase();
  if (COIN === "BTC") {
    return COINS.BTC;
  } else if (COIN === "ETH") {
    return COINS.ETH;
  } else if (COIN === "KMT") {
    return COINS.KMBT;
  } else if (COIN === "BNB") {
    return COINS.BNB;
  } else if (COIN === "DOGE") {
    return COINS.DOGE;
  } else if (COIN === "DASH") {
    return COINS.DASH;
  } else if (COIN === "BUSD" || COIN === "BINANCE-USD") {
    return COINS.BUSD;
  } else if (COIN === "WEENUS" || COIN === "USDT") {
    return COINS.WEENUS;
  }
}
export { GetImageForCoin, COINS };
