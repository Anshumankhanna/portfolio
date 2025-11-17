import "@/components/Hero/Hero.css";

export default function Hero() {
	return <section className="hero-section">
		<div className="hero-section__content">
			<hgroup className="content__hgroup">
				{/* NOTE: The two classes below (`heading` & `description`, here `subtext` is additional one we got) are going to be our standard classes for an `hgroup` which will have different styling based on the `className` that the parent `hgroup` element has.
				*/}
				<h1 className="heading">Anshuman Khanna</h1>
				<p className="subtext">Software Engineer</p>
				<p className="description placeholder">Add some text about self here</p>
			</hgroup>
			<address className="content__links">
				<ul className="links__list">
					{/* NOTE:  We may optionally add `list__item$` to every `li` element here if we want personalised styling.
					*/}
					<li><a href="">LinkedIn</a></li>
					<li><a href="">Github</a></li>
					<li><a href="">Call</a></li>
					<li><a href="">Email</a></li>
				</ul>
			</address>
		</div>
	</section>;
}
