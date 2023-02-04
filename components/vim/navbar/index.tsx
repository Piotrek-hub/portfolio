import { useRouter } from 'next/router';

export default function Navbar() {
	const router = useRouter();
	console.log(router.route);
	return (
		<div className="absolute top-[48px] right-[192px] flex items-center  gap-[24px]">
			<a
				href={'/'}
				className={` hover:underline cursor-pointer ${
					router.route == '/' ? 'font-bold text-fg1' : 'text-fg4'
				}`}
			>
				Home
			</a>
			<a
				href={'/about'}
				className={` hover:underline cursor-pointer ${
					router.route == '/about' ? 'font-bold text-fg1' : 'text-fg4'
				}`}
			>
				About
			</a>
			<a
				href={'/technologies'}
				className={` hover:underline cursor-pointer ${
					router.route == '/technologies'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Technologies
			</a>
			<a
				href={'/contact'}
				className={` hover:underline cursor-pointer ${
					router.route == '/contact'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Contact
			</a>
			<a
				href={'/projects'}
				className={` hover:underline cursor-pointer ${
					router.route == '/projects'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Projects
			</a>
			<a
				href={'/experience'}
				className={` hover:underline cursor-pointer ${
					router.route == '/experience'
						? 'font-bold text-fg1'
						: 'text-fg4'
				}`}
			>
				Experience
			</a>
		</div>
	);
}
