import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";

function App(props) {
  
  return (    
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element = {<Dialogs state={props.store.dialogsPage} />} />
            <Route path="/profile" element = {<Profile 
              state={props.store.profilePage}
              addPost={props.addPost}
              />} />
            <Route path="/news" element = {<News />} />
            <Route path="/music" element = {<Music />} />
            <Route path="/settings" element = {<Settings />} />
          </Routes>  
        </div>
      </div>
    
  );
}

export default App;
