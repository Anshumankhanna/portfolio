import "@/components/Carousel/Carousel.css";

type CardProps = {
	title: string;
	point1: string;
	point2: string;
};
function Card({ title, point1, point2 }: CardProps) {
	return (
		<div className="project__card">
			<h2>{title}</h2>
			<ul>
				<li>
					{point1}
				</li>
				<li>
					{point2}
				</li>
			</ul>
		</div>
	);
}

export default function Carousel() {
	return (
		<section className="projects">
			<Card
				title="Web-Morph"
				point1="Developed Python-based microservice & RESTful API deployed on Render to create recommendation system chatbot."
				point2="Boosted speed of creation of website exponentially by eliminating the need to study web design concepts, making prototyping faster." />
		</section>
	);
}
