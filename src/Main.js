import Header from "./Head";
import Body from "./Body";
import Footer from "./Footer";


export default function Main() {
    return (
        <div>
            <Header/>
            <img src="http://webmadewell.com/wp-content/uploads/2018/01/img-bg-sample-parallax-header.jpg" alt="ssky" width="100%" height="500px"/>
            <Body/>
            <Footer/>
        </div>
    );
}