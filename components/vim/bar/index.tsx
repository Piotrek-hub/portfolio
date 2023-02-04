import { ModeEnum } from '../../../types/components/mode';
import CurrentFile from './currentFile';
import CurrentLanguage from './currentLanguage';
import Mode from './mode';
import SocialLink from './socialLink/index.';

export default function Bar() {
	return (
		<div className="w-full h-[24px] bg-bg1 absolute bottom-0 left-0 flex items-center justify-between select-none">
			<div className="flex items-center justify-start">
				<Mode mode={ModeEnum.normal} />
				<CurrentFile fileName={'Portfolio/about_me.go'} />
			</div>
			<div className="flex items-center justify-end">
				<CurrentLanguage languageName={'Golang'} />
				<div className="flex items-center justify-end">
					<div className="border-r-bg2 w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-r-[12px] "></div>
					<div className="flex items-center justify-end bg-bg2">
						<div className="px-[15px]">
							<span className="text-fg4 font-bold">
								utf-8[unix]
							</span>
						</div>
						<SocialLink
							text={'My Github'}
							url={'https://github.com/Piotrek-hub'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
