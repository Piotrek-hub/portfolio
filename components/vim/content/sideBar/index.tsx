import { useEffect, useState } from 'react';

export default function SideBar() {
	const [lines, setLines] = useState<number[]>([]);
	useEffect(() => {
		const nums = Math.round(
			(document.querySelector('body')?.scrollHeight || 0) / 24
		);

		setLines(Array.from(Array(nums - 1).keys()));
	}, []);

	return (
		<div className="w-[24px] h-full flex flex-col items-end justify-start select-none absolute left-[6px]">
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
