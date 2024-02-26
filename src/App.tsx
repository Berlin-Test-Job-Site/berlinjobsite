import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

const url = "http://localhost:4206";

function App() {
	return (
		<>
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</>
	);
}

export default App;
