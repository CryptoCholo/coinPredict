import { BrowserRouter, Routes, Route } from "react-router-dom";

import CryptoChart from "./comps/coin.jsx"


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="btc" element={<CryptoChart dataUrl="http://localhost:4000/btc" crypto="Bitcoin"/>} />
          <Route path="bnb" element={<CryptoChart dataUrl="http://localhost:4000/bnb" crypto="Binance coin"/>} />
          <Route path="eth" element={<CryptoChart dataUrl="http://localhost:4000/eth" crypto="Ethereum"/>}/>
          <Route path="sol" element={<CryptoChart dataUrl="http://localhost:4000/sol" crypto="Solana"/>} />
        </Routes>
      </BrowserRouter> 
      
    )
}

 {/* <Route path="/" element={<Nav/>}>
          <Route index element={<Home/>}/> */}
          // </Route>