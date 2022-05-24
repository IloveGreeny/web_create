import Header from "./Head";
import Footer from "./Footer";
import Products from "./Products";

export default function Product() {
    return (
        <div>
            <Header/>
            <img src="http://webmadewell.com/wp-content/uploads/2018/01/img-bg-sample-parallax-header.jpg" alt="ssky" width="100%" height="500px"/>
            <Products/>
            <Footer/>
        </div>
    );
}