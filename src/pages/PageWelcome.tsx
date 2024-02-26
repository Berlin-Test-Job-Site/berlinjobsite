import { useEffect, useState } from "react";
import { IJob } from "../interfaces";
import axios from "axios";

const url = "http://localhost:4206";

export const PageWelcome = () => {
	const [jobs, setJobs] = useState<IJob[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${url}/jobs`);
			const _jobs = response.data;
			setJobs(_jobs);
		})();
	});

	return (
		<h2>There are {jobs.length} jobs:</h2>
	)
}