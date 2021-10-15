import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import jsonData from "./data.json";

const Blog = () => {
	const history = useHistory();
	const { id } = useParams();

	let blogs = jsonData.blogs;

	var blog;
	var index;
	for (let i = 0; i < blogs.length; i++) {
		if (blogs[i].id.toString() === id) {
			index = i;
			blog = blogs[i];
		}
	}

	const handleDelete = (e) => {
		jsonData.blogs.splice(index, 1);
		history.push("/react-blog-app");
	};
	return (
		<div>
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>By {blog.author}</p>
					<p>{blog.body}</p>
					<button onClick={handleDelete}>Delete Blog</button>
				</article>
			)}
		</div>
	);
};

export default Blog;
