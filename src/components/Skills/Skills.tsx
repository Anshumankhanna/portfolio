import styles from "@/components/Skills/Skills.module.css";
// import type { ReactElement, SVGProps } from "react";
//
// type SkillType = {
// 	icon: ReactElement<SVGProps<SVGSVGElement>>;
// 	name: string;
// };
//
// function Skill({ icon, name }: SkillType) {
// 	return <div>
// 		{icon}
// 		<span>{name}</span>
// 	</div>
// }

export default function Skills() {
	return <section className={styles["skills"]}>
		<h2>Skills</h2>
		<ul className={styles["skills__list"]}>
			{/*<Skill
				icon={}
			/>*/}
		</ul>
	</section>
};
