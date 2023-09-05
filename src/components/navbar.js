import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
       <ul>
  <li><Link class="active" to="/">Home</Link></li>
  <li><Link to="/counter">Counter</Link></li>
  <li><Link to="/agecalculator">Age Calculator</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/props">Props</Link></li>
  <li><Link to="/post/:id">Blog List</Link></li>
  <li><Link to="/portfolio">Portfolio</Link></li>
  <li><Link to="/login">Login</Link></li>
  <li><Link to="/books">Books</Link></li>


</ul>
</>
    );
}
export default Navbar;