export enum ModeEnum {
	normal = 'normal',
	insert = 'insert',
	visual = 'visual',
}

export interface ModeComponentProps {
	mode: ModeEnum;
}
