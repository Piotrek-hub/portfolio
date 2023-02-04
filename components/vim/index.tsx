import Bar from './bar';
import Content from './content';

export default function Vim() {
	return (
		<div className="w-full h-[100vh] relative bg-bg0">
			<Content />
			<Bar />
		</div>
	);
}
