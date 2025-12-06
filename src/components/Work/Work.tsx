import styles from "@/components/Work/Work.module.css";

export default function WorkComponent({ id }: { id: "experiences" | "projects" }) {
	const experiences = Object.freeze([
		{
			title: "MSIT",
			skill: "Software Developer",
			description: <>
				Designed, developed and maintained a grievance portal used by <b>2000+</b> students, teachers and parents using serverless architecture implemented in Next.js, TypeScript and MongoDB.
			</>
		},
		{
			title: "Nucleus Software",
			skill: "Software Intern",
			description: <>
				Redesigned FinnOne for General Motors which is a flagship product of the company and cleared redundant code, improving performance and contributing to better frontend architecture.
			</>
		}
	]);
	const projects = Object.freeze([
		// {
		// 	title: "WebMorph",
		// 	skill: "React.js, Next.js, TypeScript, Deno, Mistral AI, Python",
		// 	description: <>
		// 		Template site that allows you to visualise a website with different layouts and color themes using the power of AI helping the design decision making process with quick prototyping."
		// 	</>
		// },
		{
			title: "Snip",
			skill: "TypeScript, Node.js, Bash, Powershell, VS Code",
			description: <>
				CLI tool that allows for speedy snippet creating in VS Code automating the process for any and every language that is supported by the IDE, used by <b>300+</b> developers.
			</>
		},
		{
			title: "Non-blocking HTTP server in C",
			skill: "C, CMake, WSL, Docker",
			description: <>
				Asynchronous high performance HTTP server in C developed on WSL utilizing Linux APIs.
			</>
		}
	]);
	const dataArr = Object.freeze(id === "experiences" ? experiences : projects);

	return <section className={styles[id]} id={id}>
		<h2>{id}</h2>
		<ul className={styles["work-list"]}>
			{dataArr.length > 0 && dataArr.map((data, data_index) => (
				<li key={data_index} className={styles["work"]} >
					<hgroup className={styles["heading"]}>
						<h3>{data.title}</h3>
						<p>{data.skill}</p>
					</hgroup>
					<hr />
					<p className={styles["description"]}>{data.description}</p>
				</li>
			))}
		</ul>
	</section >;
};
