import "@/App.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";

export default function App() {
	// TODO(#3): In App.tsx JS part.
	return <>
		{/* TODO(#4): In App.tsx TSX part. */}
		<Navbar />
		<main>
			<Hero />
			<Projects />
		</main>
	</>;
}
