import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<h1>Error 404</h1>
			<p>page not found</p>
			<Link to="/react-blog-app/">Back to home</Link>
		</div>
	);
};

export default Error;
