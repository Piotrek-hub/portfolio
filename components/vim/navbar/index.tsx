import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
	const router = useRouter();
	return (
		<div className="absolute top-[48px] left-1/2 transform -translate-x-1/2 flex items-center gap-[24px] ">
			<Link
				href={'/'}
				className={` hover:underline cursor-pointer ${
					router.route == '/' ? 'font-bold text-fg1' : 'text-fg4'
				}`}
			>
				Home
			</Link>
			<Link
				href={'/about'}
				className={` hover:underline cursor-pointer ${
					router.route == '/about' ? 'font-bold text-fg1' : 'text-fg4'
				}`}
			>
				About
			</Link>

			<Link
				href={'/contact'}
				className={` hover:underline cursor-pointer ${
					router.route == '/contact'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Contact
			</Link>
			<Link
				href={'/technologies'}
				className={` hover:underline cursor-pointer ${
					router.route == '/technologies'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Technologies
			</Link>
			<Link
				href={'/projects'}
				className={` hover:underline cursor-pointer ${
					router.route == '/projects'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Projects
			</Link>
			<Link
				href={'/experience'}
				className={` hover:underline cursor-pointer ${
					router.route == '/experience'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Experience
			</Link>
		</div>
	);
}

// return (
// 	<div className="h-[24px] absolute top-0 left-0 flex gap-0 items-center justify-start w-min">
// 		<Link
// 			href={'/'}
// 			className={` hover:underline cursor-pointer -left-[12px] relative z-[9] ${
// 				router.route == '/' ? 'font-bold text-fg1' : 'text-fg4'
// 			}`}
// 		>
// 			<div className="flex">
// 				<div
// 					className={`${
// 						router.route == '/' ? 'bg-fg4' : 'bg-bg3'
// 					} px-[15px]`}
// 				>
// 					<span className="text-bg0 font-bold whitespace-nowrap  cursor-pointer">
// 						Home
// 					</span>
// 				</div>
// 				<div
// 					className={`${
// 						router.route == '/'
// 							? 'border-l-fg4'
// 							: 'border-l-bg3'
// 					} w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-l-[12px] `}
// 				></div>
// 			</div>
// 		</Link>
// 		<Link
// 			href={'/'}
// 			className={` hover:underline cursor-pointer relative -left-[24px] ${
// 				router.route == '/' ? 'font-bold text-fg1' : 'text-fg4'
// 			}`}
// 		>
// 			<div className="flex">
// 				<div
// 					className={`${
// 						router.route == '/home' ? 'bg-fg4' : 'bg-bg3'
// 					} px-[15px]`}
// 				>
// 					<span className="text-bg0 font-bold whitespace-nowrap  cursor-pointer">
// 						Home
// 					</span>
// 				</div>
// 				<div
// 					className={`${
// 						router.route == '/home'
// 							? 'border-l-fg4'
// 							: 'border-l-bg3'
// 					} w-0 h-0 border-b-[12px] border-b-[transparent] border-t-[12px] border-t-[transparent] border-l-[12px] `}
// 				></div>
// 			</div>
// 		</Link>
// 	</div>
// );
