import { Link } from "react-router-dom";

const BlogList = (props) => {
	const data = props.blogs;

	return (
		<div className="blog-list">
			{data.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={"/react-blog-app/blog/" + blog.id}>
						<h2>{blog.title}</h2>
						<p>Post by: {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
