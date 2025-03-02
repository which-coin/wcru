const coins = [
  { name: "Bitcoin", image: "images/bitcoin.png", color: "#f7931a" },
  { name: "Ethereum", image: "images/ethereum.png", color: "#3c3c3d" },
  { name: "Ripple", image: "images/ripple.png", color: "#346aa9" },
  { name: "Litecoin", image: "images/litecoin.png", color: "#bcbcbc" },
  { name: "Cardano", image: "images/cardano.png", color: "#0033ad" },
  { name: "Polkadot", image: "images/polkadot.png", color: "#e6007a" },
  { name: "Chainlink", image: "images/chainlink.png", color: "#2a5ada" },
  { name: "Stellar", image: "images/stellar.png", color: "#090909" },
  { name: "Dogecoin", image: "images/dogecoin.png", color: "#c2a633" },
  { name: "Shiba Inu", image: "images/shiba_inu.png", color: "#f05e1c" }
];

document.getElementById('pickCoinBtn').addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * coins.length);
  const selectedCoin = coins[randomIndex];
  document.getElementById('result').textContent = `Today you are ${selectedCoin.name} coin!`;
  
  const coinImage = document.getElementById('coinImage');
  coinImage.src = selectedCoin.image;
  coinImage.style.display = 'block';

  document.body.style.backgroundColor = selectedCoin.color; // Change the background color
});
