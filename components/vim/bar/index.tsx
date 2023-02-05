import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BarProps, { MenuChoice } from '../../../types/components/bar';
import { ModeEnum } from '../../../types/components/mode';
import CurrentFile from './currentFile';
import CurrentLanguage from './currentLanguage';
import Mode from './mode';
import SocialLink from './socialLink/index.';

export default function Bar({ setCurrentView }: BarProps) {
	const langExtensionsArray = [
		'go',
		'js',
		'ts',
		'rb',
		'cpp',
		'c',
		'h',
		'cs',
		'java',
	];

	const [randomExtension, setRandomExtension] = useState<string>('go');
	useEffect(() => {
		setRandomExtension(
			langExtensionsArray[
				Math.floor(Math.random() * langExtensionsArray.length)
			]
		);
	}, []);

	const router = useRouter();

	const [command, setCommand] = useState<String>('');
	const [isTypingCommand, setIsTypingComman] = useState<Boolean>(false);

	const executeCommand = () => {
		const splittedCommand = command.split(' ');
		if (splittedCommand[0] == 'open') {
			switch (splittedCommand[1]) {
				case 'home':
					router.push('/');
					break;
				case 'about':
					router.push('/about');
					break;
				case 'contact':
					router.push('/contact');
					break;
				case 'technologies':
					router.push('/technologies');
					break;
				case 'projects':
					router.push('/projects');
					break;
				case 'experience':
					router.push('/experience');
					break;
				default:
					console.log('ERROR');
					break;
			}
		}
	};

	const handleCommand = (event: any) => {
		if (event.key == ':') {
			if (!isTypingCommand) {
				setCommand('');
				setIsTypingComman(true);
			}
		} else if (event.key == 'Escape') {
			if (isTypingCommand) {
				setCommand('');
				setIsTypingComman(false);
			}
		} else if (event.key == 'Enter') {
			executeCommand();
		} else {
			if (
				(event.keyCode >= 65 && event.keyCode <= 122) ||
				[32, 173].includes(event.keyCode)
			)
				setCommand((prevCommand) => (prevCommand += event.key));
			if (event.keyCode == 8)
				setCommand((prevCommand) =>
					prevCommand.slice(0, prevCommand.length - 1)
				);
		}
	};

	useEffect(() => {
		window.addEventListener('keyup', handleCommand);

		return function cleanup() {
			window.removeEventListener('keyup', handleCommand);
		};
	}, [isTypingCommand, command]);

	// useEffect(() => {
	// 	console.log(command);
	// }, [command]);

	return (
		<div className="w-full h-[24px] bg-bg1 absolute bottom-0 left-0 flex items-center justify-between select-none">
			<div className="flex items-center justify-start">
				{isTypingCommand ? (
					<div className="ml-[5px]">
						<span className="text-fg4 font-bold">:{command}</span>
					</div>
				) : (
					<>
						<Mode mode={ModeEnum.normal} />
						<CurrentFile
							fileName={`Portfolio${
								router.route == '/' ? '/home' : router.route
							}.${randomExtension}`}
						/>
					</>
				)}
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
						<SocialLink />
					</div>
				</div>
			</div>
		</div>
	);
}
