import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import AlbumCharts from "./pages/AlbumCharts";
import Homes from "./pages/Home";
import { Sidebar } from "./components";
import Playlist from "./pages/Playlist";

function App() {
  return (
    <div className="bg-main-bg">
      <BrowserRouter>
        <div>
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/home" element={<Homes />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/radio" />
            <Route path="/other" />
            <Route path="/profile" />
            <Route path="/logout" />
            <Route path="/album/:id" element={<AlbumCharts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
