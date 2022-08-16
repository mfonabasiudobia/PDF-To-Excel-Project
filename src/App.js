import './App.css';
import './index.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Text from "./routes/Text";
import Excel from "./routes/Home";
import Csv from "./routes/Csv";
import Json from "./routes/Json";
import Jpg from "./routes/Jpg";
import Png from "./routes/Png";

import Convert from "./routes/Convert";
import { ContextProvider } from "./ContextApi";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Excel />} />
          <Route path="pdf-to-txt" element={<Text />} />
          <Route path="pdf-to-csv" element={<Csv />} />
          <Route path="pdf-to-json" element={<Json />} />
          <Route path="pdf-to-jpg" element={<Jpg />} />
          <Route path="convert" element={<Convert />} />
          <Route path="pdf-to-png" element={<Png />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
