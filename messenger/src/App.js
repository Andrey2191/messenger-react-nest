import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar";
import "./App.css";
import NewsPage from "./components/pages/newsPage/components/NewsPage";
import MessagePage from "./components/pages/messagePage/components/MessagePage";
import ProfilePage from "./components/pages/profilePage/components/ProfilePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
