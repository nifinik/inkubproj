import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" Component={Profile}></Route>
            <Route path="/messages" Component={Dialogs}></Route>
            <Route path="/news" Component={News}></Route>
            <Route path="/music" Component={Music}></Route>
            <Route path="/settings" Component={Settings}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
