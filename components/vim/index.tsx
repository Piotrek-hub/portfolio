import { useEffect, useState } from 'react';
import { MenuChoice } from '../../types/components/bar';
import VimProps from '../../types/components/vim';
import Bar from './bar';
import Content from './content';
import Navbar from './navbar';

export default function Vim({ defaultView }: VimProps) {
	const [currentView, setCurrentView] = useState<MenuChoice>(defaultView);
	const [screenWidth, setScreenWidth] = useState(0);
	const [marginTop, setMarginTop] = useState<number>(0);

	useEffect(() => {
		setScreenWidth(window.innerWidth);
		setMarginTop(window.innerHeight % 24);
	}, []);
	return (
		<div
			className={`w-full h-[100vh] relative bg-bg0 pt-[${marginTop}.px]`}
		>
			<>
				<Navbar />
				<Content currentView={currentView} />
				<Bar setCurrentView={setCurrentView} />
			</>
		</div>
	);
}
