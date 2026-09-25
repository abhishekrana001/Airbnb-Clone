import airbnb from "../assets/airbnb_img.png";
import search from "../assets/search.png";
import web from "../assets/web.png";
import "../components/Navbar.css";
function Navbar() {
  return (
   <nav className='nav-container'>
    <div id="title">
        <img src={airbnb} alt="airbnb" />
        <p id="nav-text"><b>airbnb</b></p>
    </div>
        <div id="nav-search">
            <p>Anywhere</p>
            <p>Anytime</p>
            <p> Add guests</p>
            <img src={search} alt="search" />
        </div>
        <div id="webtext">
            <p>Become a host</p>
        </div>
        <div id="nav-uni">
            <img src={web} alt="web" />
        </div>
        <div id="nav-icon">
            ☰
        </div>
   </nav>
  )
}

export default Navbar