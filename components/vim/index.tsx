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
			className={`w-full h-[100vh] relative bg-bg0 top-[${marginTop}.px]`}
		>
			{screenWidth > 1280 ? (
				<>
					<Navbar marginTop={marginTop} />
					<Content currentView={currentView} />
					<Bar setCurrentView={setCurrentView} />
				</>
			) : (
				<div className="text-fg0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  text-center px-[20px]">
					Website not available on screen smaller than 1280px
				</div>
			)}
		</div>
	);
}
