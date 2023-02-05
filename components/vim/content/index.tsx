import { useEffect, useState } from 'react';
import { ContentProps, MenuChoice } from '../../../types/components/content';
import AboutMe from './choices/aboutMe';
import Contact from './choices/contact';
import Experience from './choices/experience';
import Home from './choices/home';
import Projects from './choices/projects';
import Technologies from './choices/technologies';
import SideBar from './sideBar';

export default function Content({ currentView }: ContentProps) {
	return (
		<div
			className={`w-full h-full flex items-center justify-start flex-col selection:bg-bg1 leading-[24px] relative top-[7px] gap-[144px]`}
		>
			<SideBar />
			{/* <div className="">{currentView == MenuChoice.Home && <Home />}</div>
			<div className="">
				{currentView == MenuChoice.AboutMe && <AboutMe />}
			</div>
			<div className="">
				{currentView == MenuChoice.Contact && <Contact />}
			</div>
			<div className="">
				{currentView == MenuChoice.Technologies && <Technologies />}
			</div>
			<div className="">
				{currentView == MenuChoice.Projects && <Projects />}
			</div>
			<div className="">
				{currentView == MenuChoice.Experience && <Experience />}
			</div> */}
			<Home />
			<AboutMe />
			<Technologies />
			<Projects />
			<Experience />
			<Contact />
		</div>
	);
}
