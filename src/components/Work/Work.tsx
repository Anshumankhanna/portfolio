import styles from "@/components/Work/Work.module.css";
import projects from "@/utilities/projects-data.json";
import experiences from "@/utilities/experiences-data.json";

type WorkPropsType = typeof projects | typeof experiences;

export default function WorkComponent({ dataArr }: { dataArr: WorkPropsType }) {
	const id = "role" in dataArr[0] ? "experiences" : "projects";

	return <section id={id}>
		<h2>{id}</h2>
		<ol className={styles["work-list"]}>
			{dataArr.length != 0 && dataArr.map((data, data_index) => (
				<li key={data_index} className={styles["work"]}>
					<div className={styles["heading"]}>
						<h3>{data.title}</h3>
						{"role" in data &&
							<p>{data.role}</p>
						}
						{"skills" in data &&
							<ul>
								{data.skills.length != 0 && data.skills.map((skill, skill_index) => (
									<li key={skill_index}>
										{/* In this `li` we are going to add a `::after` pseudo-element because of which there is no seperation between `::after` and the text that is skill, to have a seperation of elements we are adding a `span` to encapsulate the text. */}
										<span>{skill}</span>
									</li>
								))}
							</ul>
						}
					</div>
					<ul className={styles["description-list"]}>
						{data.description.length != 0 && data.description.map((point, description_index) => (
							<li key={description_index}>{point}</li>
						))}
					</ul>
				</li>
			))}
		</ol>
	</section>;
};
