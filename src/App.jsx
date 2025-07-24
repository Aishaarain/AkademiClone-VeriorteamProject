
import { Router, Routes, Route } from "react-router-dom";

import Event from "./pages/Event";
import Finance from "./pages/Finance";
import User from "./pages/UserDashboard";
import Chat from "./pages/Chat";
const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/user" element={<User />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default App;
