import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="nav-bar">
			<p className="logo">Cool Blog</p>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">Create Blog</Link>
			</div>
		</div>
	);
};

export default Navbar;
