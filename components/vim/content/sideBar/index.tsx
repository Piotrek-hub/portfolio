import { useEffect, useState } from 'react';

export default function SideBar() {
	const [lines, setLines] = useState<number[]>([]);
	useEffect(() => {
		const nums = window.screen.availHeight / 24;
		setLines(Array.from(Array(40).keys()));
	}, []);

	return (
		<div className="w-[24px] h-full flex flex-col overflow-hidden items-end justify-start select-none">
			{lines.map((lineNumber) => (
				<span
					className="leading-[24px] font-bold text-fg4"
					key={lineNumber}
				>
					{lineNumber}
				</span>
			))}
		</div>
	);
}
