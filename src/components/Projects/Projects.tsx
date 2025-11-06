import "@/components/Projects/Projects.css";
import projects from "@/utilities/projects-data";
import type { ProjectDataType } from "@/utilities/projects-data";

function ProjectSection({ project }: { project: ProjectDataType }) {
	return (
		<div className="project__card">
			<div className="project__header">
				<h3 className="project__title">{project.title}</h3>
				<ul className="skill__list">
					{project.skills.length > 0 && project.skills.map((skill, index, arr) => (
						<li key={index}>{skill + (index !== arr.length - 1 ? ", " : "")}</li>
					))}
				</ul>
			</div>
			<ul className="project__list">
				{project.description.length > 0 && project.description.map((point, index) => (
					<li key={index}>{point}</li>
				))}
			</ul>
		</div>
	);
}

export default function Projects() {
	return (
		<section className="projects">
			<h2 className="underline">Projects</h2>
			{projects.length > 0 && projects.map((project, index) => (
				<ProjectSection key={index} project={project} />
			))}
		</section>
	);
}
