import CurrentLanguageProps from '../../../../types/components/currentLanguage';

export default function CurrentLanguage({
	languageName,
}: CurrentLanguageProps) {
	return (
		<div className="mr-[15px]">
			<span className="text-fg4 font-bold">{languageName}</span>
		</div>
	);
}
