import CurrentFileProps from '../../../../types/components/currentFile';

export default function CurrentFile({ fileName }: CurrentFileProps) {
	return (
		<div className="ml-[15px] mobile:hidden">
			<span className="text-fg4 font-bold">{fileName}</span>
		</div>
	);
}
