import { Dispatch, SetStateAction } from 'react';

export enum MenuChoice {
	Home,
	AboutMe,
	Contact,
	Technologies,
	Projects,
	Experience,
}
export default interface BarProps {
	setCurrentView: Dispatch<SetStateAction<MenuChoice>>;
}
