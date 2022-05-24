import Header from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Contact from "./Contact";
import Product from "./Product";
import Products from "./Products";
import Residence from "./Residence";



export default function App() {
  return (
      <div>
          <Router>
              <nav>
                  <Link to="web_create"></Link>
                  <Link to="body"></Link>
                  <Link to="footer"></Link>
                  <Link to="header"></Link>
                  <Link to="contact"></Link>
                  <Link to="products"></Link>
                  <Link to="product"></Link>
              </nav>
              <Routes>
                  <Route path="/web_create/products" element={<Main/>}/>
                  <Route path="/web_create" element={<Residence/>}/>
                  <Route path="/web_create/footer" element={<Footer/>}/>
                  <Route path="/web_create/header" element={<Header/>}/>
                  <Route path="/web_create/contact" element={<Contact/>}/>
                  <Route path="/web_create/product" element={<Product/>}/>
              </Routes>
          </Router>
      </div>
  );
}
