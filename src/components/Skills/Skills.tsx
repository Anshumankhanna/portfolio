import styles from "@/components/Skills/Skills.module.css";

import cLogo from "@/assets/images/logo/c.svg";
import cppLogo from "@/assets/images/logo/cpp.svg";
import pythonLogo from "@/assets/images/logo/python.svg";
import tsLogo from "@/assets/images/logo/typescript.svg";
import jsLogo from "@/assets/images/logo/javascript.svg";
import htmlLogo from "@/assets/images/logo/html.svg";
import cssLogo from "@/assets/images/logo/css.svg";
import tailwindcssLogo from "@/assets/images/logo/tailwindcss.svg";
import reactLogo from "@/assets/images/logo/react.svg";
import viteLogo from "@/assets/images/logo/vite.svg";
import expressLogo from "@/assets/images/logo/express.svg";
import nextjsLogo from "@/assets/images/logo/nextjs.svg";
import nodejsLogo from "@/assets/images/logo/nodejs.svg";
import denoLogo from "@/assets/images/logo/deno.svg";
import mongodbLogo from "@/assets/images/logo/mongodb.svg";
import postmanLogo from "@/assets/images/logo/postman.svg";
import gitLogo from "@/assets/images/logo/git.svg";
import wslLogo from "@/assets/images/logo/wsl.svg";
import dockerLogo from "@/assets/images/logo/docker.svg";

type SkillsPropsType = {
	href: string;
	icon: string;
	name: string;
};

function Skill({ href, icon, name }: SkillsPropsType) {
	return <a href={href} target="_blank" className={styles["skill"]}>
		<img src={icon} alt={name} />
		<p>{name}</p>
	</a>
}

export default function Skills() {
	const skills_data: SkillsPropsType[] = [
		{
			href: "https://www.open-std.org/jtc1/sc22/WG14/www/docs/n3054.pdf",
			icon: cLogo,
			name: "c"
		},
		{
			href: "https://en.cppreference.com/",
			icon: cppLogo,
			name: "cpp"
		},
		{
			href: "https://www.python.org",
			icon: pythonLogo,
			name: "python"
		},
		{
			href: "https://nodejs.org/en",
			icon: jsLogo,
			name: "javascript"
		},
		{
			href: "https://www.typescriptlang.org/",
			icon: tsLogo,
			name: "typescript"
		},
		{
			href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			icon: htmlLogo,
			name: "html"
		},
		{
			href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			icon: cssLogo,
			name: "css"
		},
		{
			href: "https://tailwindcss.com/",
			icon: tailwindcssLogo,
			name: "tailwindcss"
		},
		{
			href: "https://react.dev/",
			icon: reactLogo,
			name: "react"
		},
		{
			href: "https://vite.dev/",
			icon: viteLogo,
			name: "vite"
		},
		{
			href: "https://expressjs.com/",
			icon: expressLogo,
			name: "express"
		},
		{
			href: "https://nextjs.org/",
			icon: nextjsLogo,
			name: "next.js"
		},
		{
			href: "https://nodejs.org/en",
			icon: nodejsLogo,
			name: "node.js"
		},
		{
			href: "https://deno.com/",
			icon: denoLogo,
			name: "deno"
		},
		{
			href: "https://www.mongodb.com/",
			icon: mongodbLogo,
			name: "mongodb"
		},
		{
			href: "https://www.postman.com/",
			icon: postmanLogo,
			name: "postman"
		},
		{
			href: "https://git-scm.com/",
			icon: gitLogo,
			name: "git"
		},
		{
			href: "https://learn.microsoft.com/en-us/windows/wsl/",
			icon: wslLogo,
			name: "wsl"
		},
		{
			href: "https://www.docker.com/",
			icon: dockerLogo,
			name: "docker"
		},
	];

	return <section id="skills" className={styles["skills__section"]}>
		<h2>Skills</h2>
		<ul className={styles["skills__list"]}>
			{skills_data.length > 0 && skills_data.map((skill, skill_index) => (
				<li key={skill_index}>
					<Skill {...skill} />
				</li>
			))}
		</ul>
	</section>
};
