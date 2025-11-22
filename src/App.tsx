import "@/App.css";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Experiences from "@/components/Experiences/Experiences";

export default function App() {
	return <>
		<Navbar />
		<main>
			<Hero />
			<Experiences />
			<Projects />
		</main>
	</>;
}
