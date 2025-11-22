import style from "@/components/Projects/Projects.module.css";
import projects from "@/utilities/projects-data.json";

export default function Projects() {
	return <section id="projects">
		<h2>Projects</h2>
		<ol>
			{projects.length != 0 && projects.map((project, projects_index) => (
				<li key={projects_index} className={style["project"]}>
					<div className={style["project--heading"]}>
						<h3>{project.title}</h3>
						<ul>
							{project.skills.length != 0 && project.skills.map((skill, skill_index) => (
								<li key={skill_index}>
									{/* In this `li` we are going to add a `::after` pseudo-element because of which there is no seperation between `::after` and the text that is skill, to have a seperation of elements we are adding a `span` to encapsulate the text. */}
									<span>{skill}</span>
								</li>
							))}
						</ul>
					</div>
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
