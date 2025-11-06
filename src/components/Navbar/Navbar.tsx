import "@/components/Navbar/Navbar.css";

// TODO: Configure the options about navbar after making the whole site.
export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar__list container--padded">
				<li>
					<a className="button" href="">Home</a>
				</li>
				{/* <li>
					<a className="button" href="">Blog</a>
				</li> */}
				<li>
					<a className="button" href="">Projects</a>
				</li>
				<li>
					<a className="button" href="">Skills</a>
				</li>
				<li>
					<a className="button" href="">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
