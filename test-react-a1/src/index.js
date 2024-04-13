import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Register from"./pages/Register";

export default function App(){
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<NavBar />}>
<Route index element={<Home />} />
<Route path="contact" element={<Contact />} />
<Route path ="register" element={<Register/>} />
  </Route>
 </Routes>
 </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);