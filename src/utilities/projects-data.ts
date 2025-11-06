export type ProjectDataType = {
	title: string;
	skills: string[];
	date: Date;
	description: string[];
};

const projects: ProjectDataType[] = [
	{
		title: "WebMorph",
		skills: ["React.js", "Next.js", "TypeScript", "Deno", "Mistral AI", "Python"],
		date: new Date(),
		description: [
			"Developed Python-based microservice & RESTful API deployed on Render to create recommendation system chatbot.",
			"Boosted speed of creation of website exponentially by eliminating the need to study web design concepts, making prototyping faster."
		]
	},
	{
		title: "Snip",
		skills: ["TypeScript", "Node.js", "Bash", "Powershell", "VS Code"],
		date: new Date(),
		description: [
			"Improved developer experience by allowing users to create VS Code Snippets without needing to manually write the code and instead manipulating snippet files from the terminal.",
			"Created a Command Line Interface utilizing Node.js and Powershell capabilities to create VS Code Snippets."
		]
	},
	{
		title: "Non-blocking HTTP server in C",
		skills: ["C", "CMake", "WSL", "Docker", "AWS"],
		date: new Date(),
		description: [
			"Asynchronous high performance HTTP server in C developed on WSL utilizing Linux APIs.",
			"Worked with WSL, Docker and AWS like technologies for development and deployment of the server"
		]
	}
];

// We are sending data by doing `Object.freeze()` so that it can't be modified where it's accessed.
export default Object.freeze(projects);
