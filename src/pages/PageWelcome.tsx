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
		<>
			<h2 className="mb-4 text-xl">There are {jobs.length} jobs:</h2>
			<p className="mb-4">
				This is Berlin Jobs Site, you can contact us with following
				number: <span className="font-bold">+49 00123 512398</span>{" "}
			</p>

			<ul>
				<>
					{jobs.map((job) => {
						return <li key={job.id}>{job.title}</li>;
					})}
				</>
			</ul>
		</>
	);
};
