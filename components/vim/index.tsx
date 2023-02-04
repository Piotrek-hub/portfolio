import { useState } from 'react';
import { MenuChoice } from '../../types/components/bar';
import VimProps from '../../types/components/vim';
import Bar from './bar';
import Content from './content';
import Navbar from './navbar';

export default function Vim({ defaultView }: VimProps) {
	const [currentView, setCurrentView] = useState<MenuChoice>(defaultView);
	return (
		<div className="w-full h-[100vh] relative bg-bg0">
			<Navbar />
			<Content currentView={currentView} />
			<Bar setCurrentView={setCurrentView} />
		</div>
	);
}
