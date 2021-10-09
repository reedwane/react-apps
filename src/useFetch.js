import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const abortCont = new AbortController();
		fetch(url, { signal: abortCont.signal })
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setData(data);
				setIsPending(false);
				setError(false);
			})
			.catch((err) => {
				if (err.name === "AbortError") {
					console.log("fetch aborted");
				} else {
					setError(true);
					setIsPending(false);
					console.log(err.message);
				}
			});

		return () => {
			abortCont.abort();
		};
	}, [url]);

	return { data, isPending, error };
};

export default useFetch;
