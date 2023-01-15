import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { COLORS } from "./components/utils";
import CoinHistoricPriceDetail from "./pages/CoinHistoricPriceDetail";
import CoinsDataProvider from "./context/CoinsDataProvider";
import ExchangesDataProvider from "./context/ExchangesDataProvider";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: COLORS,
};

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CoinsDataProvider>
          <ExchangesDataProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coin/:id" element={<CoinHistoricPriceDetail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ExchangesDataProvider>
        </CoinsDataProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
