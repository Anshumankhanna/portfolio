import "@/App.css";

import Projects from "@/components/Projects/Projects";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "@/components/Profile/Profile";
import Skill from "@/components/Skill/Skill";
import Footer from "@/components/Footer/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<main className="grid container--padded">
				<Profile />
				<Projects />
				<Skill />
			</main>
			<Footer />
		</>
	);
}
