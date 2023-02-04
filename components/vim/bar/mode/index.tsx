import {
	ModeComponentProps,
	ModeEnum,
} from '../../../../types/components/mode';

export default function Mode({ mode }: ModeComponentProps) {
	return (
		<div className="flex items-center w-min">
			{mode == ModeEnum.normal && (
				<div className="flex items-center justify-start">
					<div className="bg-bg2 w-min flex items-center">
						<div className="bg-fg4 px-[15px]">
							<span className="text-bg0 font-bold">NORMAL</span>
						</div>
						<div className="border-l-fg4 w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-l-[12px] "></div>
					</div>
					<div className="border-l-bg2 w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-l-[12px] "></div>
				</div>
			)}
		</div>
	);
}
