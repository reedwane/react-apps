import { useState } from "react";
import { useHistory } from "react-router-dom";
import jsonData from "./data.json";

const Create = () => {
	const history = useHistory();
	const [title, setTitle] = useState("");
	const [blogText, setBlogText] = useState("");
	const [authorName, setAuthorName] = useState("Ire");
	const [validation, setValidation] = useState("Create blog");

	var numberOfBlogs = jsonData.blogs.length + 1;

	const handlePost = (e) => {
		e.preventDefault();

		if (blogText === "" || title === "") {
			setValidation("Input All fields!");
		} else {
			setValidation("Create blog");
			let data = {
				title: title,
				body: blogText,
				author: authorName,
				id: numberOfBlogs,
			};
			jsonData.blogs.push(data);

			history.push("/react-blog-app");
		}
	};

	return (
		<div>
			<form>
				<label htmlFor="title">Blog Title</label>
				<input
					required
					type="text"
					name="title"
					className="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor="body">Blog Post</label>
				<textarea
					type="text"
					name="body"
					className="blog-text"
					required
					value={blogText}
					onChange={(e) => setBlogText(e.target.value)}
				></textarea>

				<label htmlFor="author">Author</label>
				<select
					required
					type="text"
					name="author"
					className="author-name"
					value={authorName}
					onChange={(e) => setAuthorName(e.target.value)}
				>
					<option value="Ire">Ire</option>
					<option value="Ayo">Ayo</option>
				</select>

				<button type="submit" className="create" onClick={handlePost}>
					{validation}
				</button>
			</form>
		</div>
	);
};

export default Create;
