import { Link } from 'react-router-dom';

function Navbar({ title }) {
  return (
    <div className="home centered-pages navbar">
      <h2>{title}</h2>
      <div>
        <Link to="/">Home Page</Link>
        <Link to="units">Units</Link>
      </div>
    </div>
  );
}

export default Navbar;
