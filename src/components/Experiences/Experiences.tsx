import style from "@/components/Experiences/Experiences.module.css";
import experiences from "@/utilities/experiences-data.json";

export default function Experiences() {
	return <section id="experiences">
		<h2>Experiences</h2>
		<ol>
			{experiences.length != 0 && experiences.map((experience, experiences_index) => (
				<li key={experiences_index} className={style["experience"]}>
					<div className={style["experience--heading"]}>
						<h3>{experience.title}</h3>
						<p>{experience.role}</p>
					</div>
					<ul>
						{experience.description.length != 0 && experience.description.map((point, description_index) => (
							<li key={description_index}>{point}</li>
						))}
					</ul>
				</li>
			))}
		</ol>
	</section>;
};
