import SocialLinkProps from '../../../../types/components/socialLink';

export default function SocialLink({ text, url }: SocialLinkProps) {
	return (
		<div className="flex items-center justify-start">
			<a
				href={url}
				target="_blank"
				className="flex items-center justify-end"
			>
				<div className="border-r-fg4 w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-r-[12px] "></div>
				<div className="bg-fg4 px-[15px]">
					<span className="text-bg0 font-bold whitespace-nowrap  cursor-pointer">
						{text}
					</span>
				</div>
			</a>
		</div>
	);
}
