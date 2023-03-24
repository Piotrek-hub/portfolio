import { useEffect, useState } from 'react';

export default function SideBar() {
	const [lines, setLines] = useState<number[]>([]);
	useEffect(() => {
		const nums = Math.round(window.innerHeight / 24);

		setLines(Array.from(Array(nums - 1).keys()));
	}, []);

	return (
		<div className="w-[24px] h-full flex flex-col overflow-hidden items-end justify-start select-none mobile:hidden">
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
