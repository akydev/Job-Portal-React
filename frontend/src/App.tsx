import {} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import RegistrationRecuiter from "./component/RegistrationRecuiter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<RegistrationRecuiter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
