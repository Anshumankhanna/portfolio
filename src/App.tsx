import styles from "@/App.module.css";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import WorkComponent from "@/components/Work/Work";
import Skills from "@/components/Skills/Skills";

export default function App() {
	return <div>
		{/* This element is here purely so that we can navigate to the top. */}
		<div id="home" className={styles["invisible-element"]}></div>
		<Navbar />
		<main className={styles["main"]}>
			<Hero />
			<hr />
			<WorkComponent id="experiences" />
			<hr />
			<WorkComponent id="projects" />
			<hr />
			<Skills />
		</main>
	</div>;
}
