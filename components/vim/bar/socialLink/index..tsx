import Link from 'next/link';
import SocialLinkProps from '../../../../types/components/socialLink';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function SocialLink() {
	return (
		<div className="flex items-center justify-start hover:underline">
			<div className="border-r-fg4 w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-r-[12px] "></div>
			<div className="bg-fg4 px-[10px] gap-[8px] cursor-pointer h-[24px] flex items-center justify-center">
				<Link href={'https://github.com/Piotrek-hub'} target="_blank">
					<AiFillGithub className="h-[18px] w-[18px] text-bg0" />
				</Link>
				<Link
					href={'https://www.linkedin.com/in/piotrekgalka/'}
					target="_blank"
				>
					<AiFillLinkedin className="h-[18px] w-[18px] text-bg0" />
				</Link>
			</div>
		</div>
	);
}
