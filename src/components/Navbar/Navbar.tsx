import "@/components/Navbar/Navbar.css";

// TODO: Configure the options about navbar after making the whole site.
export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="container--padded">
				<li>
					<a className="button" href="">Home</a>
				</li>
				<li>
					<a className="button" href="">Blog</a>
				</li>
			</ul>
		</nav>
	);
}
