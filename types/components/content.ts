import { Dispatch, SetStateAction } from 'react';

export enum MenuChoice {
	Home,
	AboutMe,
	Contact,
	Technologies,
	Projects,
	Experience,
}

export interface ContentProps {
	currentView: MenuChoice;
}
