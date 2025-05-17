import Link from 'next/link';
import MediaLinks from '@/app/ui/media-links';

export default function MediaNav() {
	return (
		<div className="flex flex-col gap-15">
			<MediaLinks />
		</div>
	)
}