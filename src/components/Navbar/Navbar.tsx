import "@/components/Navbar/Navbar.css";

// TODO: Configure the options about navbar after making the whole site.
export default function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<a className="button" href="">Home</a>
				</li>
				<li>
					<a className="button" href="">Blog</a>
				</li>
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
					</svg>
				</li>
			</ul>
		</nav>
	);
}
