import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="nav-bar">
			<p className="logo">Cool Blog</p>
			<div className="links">
				<Link to="/react-blog-app">Home</Link>
				<Link to="/react-blog-app/create">Create Blog</Link>
			</div>
		</div>
	);
};

export default Navbar;
