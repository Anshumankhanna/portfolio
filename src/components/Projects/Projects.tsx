import style from "@/components/Projects/Projects.module.css";
import projects from "@/utilities/projects-data";

export default function Projects() {
	return <section id="projects" className={style["projects__section"]}>
		<h2>Projects</h2>
		<ul>
			{projects.length != 0 && projects.map((project, index) => (
				<li key={index}>{project.title}</li>
			))}
		</ul>
	</section>;
};
