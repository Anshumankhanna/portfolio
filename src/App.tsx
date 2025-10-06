import "@/App.css";

import Carousel from "@/components/Carousel/Carousel";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "@/components/Profile/Profile";
import Skill from "@/components/Skill/Skill";
import Footer from "@/components/Footer/Footer";

export default function App() {
	return (
		<main>
			<Navbar />
			<Profile />
			<Carousel />
			<Skill />
			<Footer />
		</main>
	);
}
