import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import Summary from "./pages/Summary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/search" element={<Search />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;