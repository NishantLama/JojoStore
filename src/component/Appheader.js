import {Link} from 'react-router-dom';
function Header() {
  return (
    <header>
      <h1>Welcome to Jojo Store</h1>
      <nav>
            <Link to="/">JOJO STORE</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
