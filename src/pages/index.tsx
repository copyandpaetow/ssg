import { JSXNode } from "jsx-factory/jsx-runtime";

interface GreetingProps {
	children?: JSXNode;
	name: string;
}

const Greeting = ({ children, name }: GreetingProps) => {
	return (
		<>
			<p>{`how are you, ${name}?`}</p>
			<div>{children}</div>
		</>
	);
};

const Wrapper = ({ children }: { children?: JSXNode }) => {
	return <div class="wrapper">{children}</div>;
};

export const App = () => {
	const name = "timmy";

	return (
		<main>
			<Wrapper>
				<h1>hello</h1>
			</Wrapper>
			<Greeting name={name}>
				<Wrapper>Greetings from here</Wrapper>
			</Greeting>
		</main>
	);
};
