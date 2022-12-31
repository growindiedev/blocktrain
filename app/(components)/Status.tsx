import alchemy from "../SDK"

export const revalidate = 10; // revalidate this page every 60 seconds

async function getEthData() {
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH&convert=USD&CMC_PRO_API_KEY=${process.env.COINMARKETCAP}`,
    {
     next: { revalidate: 5 },
     //cache: 'no-store'
    }
  );
  const data = await res.json();
  return data;
}

async function getBlockData() {
  let blockNumber = await alchemy.core.getBlockNumber()
  let currentGasPrice = await alchemy.core.getGasPrice()

  return { blockNumber, currentGasPrice}
}


const Status = async () => {

  let { blockNumber, currentGasPrice } = await getBlockData ()
  let gas = (currentGasPrice.toNumber() / 10**9).toFixed(3)

  let { data: {ETH: { quote: {USD : {price, market_cap, percent_change_1h}}}} } =  await getEthData()
  let marketCap = market_cap / 1000000000

  return (
    <div className="flex justify-center m-10">
    <div className="stats stats-vertical lg:stats-horizontal">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div className="stat-title">Ether price (USD)</div>
        <div className="stat-value">{price.toFixed(2)}</div>
        <div className="stat-desc">{`↗︎ ${percent_change_1h.toFixed(2)}% in last 1h`}</div> 
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
        </div>
        <div className="stat-title">Market Cap (USD)</div>
        <div className="stat-value">{`${marketCap.toFixed(2)} B`}</div>
        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
        </div>
        <div className="stat-title">Last finalized block</div>
        <div className="stat-value">{blockNumber}</div>
        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
        </div>
        <div className="stat-title">Gas price (Gwei)</div>
        <div className="stat-value">{gas}</div>
        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
      </div>
    </div>
    </div>
  )
}

export default Status