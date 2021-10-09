import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
	const url = "http://localhost:8000/blogs";
	const { data, isPending, error } = useFetch(url);

	return (
		<div>
			{isPending && <div>Loading...</div>}
			{error && <div>Can not fetch data</div>}
			{data && <BlogList blogs={data} />}
		</div>
	);
};

export default Home;
