import style from "@/components/Navbar/Navbar.module.css";

export default function Navbar() {
	return <>
		{/* `nav` is here just for its sematnic meaning. */}
		<nav>
			<ul className={style["nav__list"]}>
				<li><a href="#home">Home</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#contacts">Contact</a></li>
			</ul>
		</nav>
	</>;
};
