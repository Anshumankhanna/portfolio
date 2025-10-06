import "@/components/Projects/Projects.css";
import webMorphLogo from "@/assets/images/logo/web-morph.png";

type CardProps = {
	title: string;
	description: string;
};
function Card({ title, description }: CardProps) {
	return (
		<div className="project__card">
			<img src={webMorphLogo} alt="" />
			{/* TODO: Put an image here that'll hold the logo of the website. */}
			<h2>{title}</h2>
			<p>
				{description}
			</p>
		</div>
	);
}

export default function Projects() {
	return (
		<section className="projects section--border">
			<Card
				title="Web-Morph"
				description="Generate unique color schemes using AI chatbot and see them applied on a real website."
			/>
			<Card
				title="Web-Morph"
				description="Generate unique color schemes using AI chatbot and see them applied on a real website."
			/>
		</section>
	);
}
