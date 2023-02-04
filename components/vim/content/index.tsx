import { ContentProps, MenuChoice } from '../../../types/components/content';
import AboutMe from './choices/aboutMe';
import Contact from './choices/contact';
import Home from './choices/home';
import Technologies from './choices/technologies';
import SideBar from './sideBar';

export default function Content({ currentView }: ContentProps) {
	return (
		<div
			className={`w-full h-full flex items-start justify-start selection:bg-bg1 leading-[24px] pt-[24px]`}
		>
			<SideBar />
			<div className="">{currentView == MenuChoice.Home && <Home />}</div>
			<div className="">
				{currentView == MenuChoice.AboutMe && <AboutMe />}
			</div>
			<div className="">
				{currentView == MenuChoice.Contact && <Contact />}
			</div>
			<div className="">
				{currentView == MenuChoice.Technologies && <Technologies />}
			</div>
		</div>
	);
}
