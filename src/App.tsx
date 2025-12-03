import styles from "@/App.module.css";

import experiences from "@/utilities/experiences-data.json";
import projects from "@/utilities/projects-data.json";

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
			<WorkComponent dataArr={experiences} />
			<hr />
			<WorkComponent dataArr={projects} />
			<hr />
			<Skills />
		</main>
	</div>;
}
