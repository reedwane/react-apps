import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Blog = () => {
	const history = useHistory();
	const { id } = useParams();
	// const url = "http://localhost:8000/blogs/" + id;
	const url = "https://my-json-server.typicode.com/reedwane/db/blogs/" + id;
	let { data } = useFetch(url);

	const handleDelete = (e) => {
		e.preventDefault();
		fetch(url, {
			method: "DELETE",
		})
			.then((res) => {
				history.push("/");
			})
			.catch((err) => console.log(err.message));
	};
	return (
		<div>
			{data && (
				<article>
					<h2>{data.title}</h2>
					<p>By {data.author}</p>
					<p>{data.body}</p>
					<button onClick={handleDelete}>Delete Blog</button>
				</article>
			)}
		</div>
	);
};

export default Blog;
