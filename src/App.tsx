// react imports
import { useState } from "react";

// components
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";

function App() {
	const [selectedInterval, setSelectedInterval] = useState("Weekly");

	return (
		<main className="grid w-full grid-cols-1 mx-auto md:items-center md:h-screen font-rubik bg-neutral-veryDarkBlue">
			<section className="mt-20 w-[85%] md:grid md:grid-cols-4 mx-auto md:space-y-0 space-y-6">
				<ProfileCard setSelectedInterval={setSelectedInterval} />

				<Cards selectedInterval={selectedInterval} />
			</section>

			<Footer />
		</main>
	);
}

export default App;
