import styles from "@/components/Navbar/Navbar.module.css";

export default function Navbar() {
	// `nav` is here just for its semantic meaning;
	return <nav className={styles["nav"]}>
		<ul className={styles["nav__list"]}>
			<li><a href="#home">Home</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#skills">Skills</a></li>
			<li><a href="#contacts">Contact</a></li>
		</ul>
	</nav>;
};
