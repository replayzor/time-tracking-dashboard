// components
import TimeIntervalsButton from "./TimeIntervalsButton";

type Props = {
	setSelectedInterval: (interval: string) => void;
};

function ProfileCard({ setSelectedInterval }: Props) {
	const handleIntervalChange = (interval: string) => {
		setSelectedInterval(interval);
	};

	return (
		<div className="bg-neutral-darkBlue md:h-[85%] md:row-span-2 rounded-xl">
			<div className="flex md:h-[70%] md:flex md:flex-col md:items-start items-center gap-4 px-8 py-8 bg-primary-blue rounded-xl">
				<img
					src="/images/image-jeremy.png"
					alt="Profile picture of Jeremy Robson"
					className="h-16 rounded-full ring-offset-2 ring-2 md:mb-6"
				/>
				<div className="md:flex md:flex-col md:pb-28">
					<p className="text-neutral-paleBlue md:text-sm">Report for</p>
					<p className="text-2xl md:text-4xl text-neutral-paleBlue">
						Jeremy Robson
					</p>
				</div>
			</div>
			<TimeIntervalsButton onClick={handleIntervalChange} />
		</div>
	);
}
export default ProfileCard;
