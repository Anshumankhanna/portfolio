import styles from "@/components/Skills/Skills.module.css";

import htmlLogo from "@/assets/images/logo/html.svg";
import tsLogo from "@/assets/images/logo/typescript.svg";
import jsLogo from "@/assets/images/logo/javascript.svg";

function Skill({ href, icon, name }: {
	href: string;
	icon: string;
	name: string;
}) {
	return <a href={href} target="_blank" className={styles["skill"]}>
		<img src={icon} alt={name} />
		<p>{name}</p>
	</a>
}

export default function Skills() {
	return <section id="skills" className={styles["skills__section"]}>
		<h2>Skills</h2>
		<ul className={styles["skills__list"]}>
			<li>
				<Skill
					href=""
					icon={htmlLogo}
					name="HTML"
				/>
			</li>
			<li>
				<Skill
					href="https://www.typescriptlang.org/"
					icon={tsLogo}
					name="TypeScript"
				/>
			</li>
			<li>
				<Skill
					href="https://nodejs.org/en"
					icon={jsLogo}
					name="JavaScript"
				/>
			</li>
		</ul>
	</section>
};
