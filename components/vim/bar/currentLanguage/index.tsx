import { useEffect, useState } from 'react';
import CurrentLanguageProps from '../../../../types/components/currentLanguage';

export default function CurrentLanguage({
	languageName,
}: CurrentLanguageProps) {
	const [platform, setPlatform] = useState('');
	useEffect(() => {
		setPlatform(navigator.platform);
	}, []);

	return (
		<div className="mr-[15px] mobile:hidden">
			<span className="text-fg4 font-bold">{platform}</span>
		</div>
	);
}
