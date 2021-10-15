import BlogList from "./BlogList";
import jsonData from "./data.json";

const Home = () => {
	const data = jsonData.blogs;

	return <div>{data && <BlogList blogs={data} />}</div>;
};

export default Home;
