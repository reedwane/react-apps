import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import Blog from "./Blog";
import Error from "./Error";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/create">
						<Create />
					</Route>

					<Route path="/blog/:id">
						<Blog />
					</Route>

					<Route path="/*">
						<Error />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
