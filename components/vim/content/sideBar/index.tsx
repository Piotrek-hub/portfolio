import { useEffect, useState } from 'react';

export default function SideBar() {
	const [lines, setLines] = useState<number[]>([]);
	useEffect(() => {
		const nums = window.screen.availHeight / 24;
		console.log(nums);
		setLines(Array.from(Array(nums).keys()));
	}, []);

	return (
		<div className="w-[24px] h-full flex flex-col overflow-hidden items-end justify-start">
			{lines.map((lineNumber) => (
				<span className="leading-[24px] font-bold text-fg4">
					{lineNumber}
				</span>
			))}
		</div>
	);
}
