import style from "@/components/Projects/Projects.module.css";
import projects from "@/utilities/projects-data";

export default function Projects() {
	return <section id="projects" className={style["projects__section"]}>
		<h2>Projects</h2>
		<ol>
			{projects.length != 0 && projects.map((project, projects_index) => (
				<li key={projects_index}>
					<hgroup className={style["project__heading"]}>
						<h3>{project.title}</h3>
						<h4>{project.title}</h4>
					</hgroup>
					<ul>
						{project.description.length != 0 && project.description.map((point, description_index) => (
							<li key={description_index}>{point}</li>
						))}
					</ul>
				</li>
			))}
		</ol>
	</section>;
};
