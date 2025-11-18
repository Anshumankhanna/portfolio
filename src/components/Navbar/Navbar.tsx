import "@/components/Navbar/Navbar.css";

export default function Navbar() {
	return <>
		{/* `nav` is here just for its sematnic meaning. */}
		<nav>
			<ul className="nav__list">
				<li><a href="">Home</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#contacts">Contact</a></li>
			</ul>
		</nav>
	</>;
}
