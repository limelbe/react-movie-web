import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // useState()에 기본값 안넣으면 undefined라 length가 없어서 오류

  const [seed, setSeed] = useState(1);
  const [result, setResult] = useState(0);
  const inputSeed = (event) => setSeed(event.target.value);
  const selectCoin = (event) => setResult(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((reponse) => reponse.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {
        loading ? <strong>Loading...</strong> : (
          <div>
            <select onChange={selectCoin}>
              <option>Select Coin...</option>
              {coins.map((coin) => (
                // <li key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
                <option key={coin.id} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
              ))}
            </select>
            <div>
              <label>$</label><input onChange={inputSeed} value={seed} type="number" placeholder="your seed money"></input>
              <button>ok</button>
              <h3>You will have {result ===  0? null : seed / result}</h3>
            </div>
          </div>
        )
      }

    </div>
  );
}

export default App;