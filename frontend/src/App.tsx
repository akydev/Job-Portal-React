import {} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Login from "./component/Login";
import RegistrationRecuiter from "./component/RegistrationRecuiter";
import Registration from "./component/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration1" element={<RegistrationRecuiter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
