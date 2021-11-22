import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hooks from "./components/HooksNavigator";
import MainPage from "./components/MainPage";
import MyWrappedComponent from "./hoc/WrappedComponent";
import MyCustomHook from "./hook/MyCustomHook";
import React from "react";
import Mouse from "./renderProp/Mouse";
import MyContext from "./hook/MyContext";

const secret = "my secret";
export const SecretContext = React.createContext();

function App() {
  return (
    <div className="App">
      <SecretContext.Provider value={secret}>
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/hoc" element={<MyWrappedComponent />} />
              <Route path="/renderprop" element={<Mouse />} />
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/hooks/customhook" element={<MyCustomHook />} />
              <Route path="/hooks/context" element={<MyContext />} />
            </Routes>
          </div>
        </Router>
      </SecretContext.Provider>
    </div>
  );
}

export default App;
