const timeIntervals = ["Daily", "Weekly", "Monthly"];

type TimeIntervalsButtonProps = {
	onClick: (item: string) => void;
};

function TimeIntervalsButton({ onClick }: TimeIntervalsButtonProps) {
	return (
		<div className="flex items-center py-6 text-xl md:flex md:items-start md:gap-4 md:pl-6 md:flex-col rounded-xl bg-neutral-darkBlue justify-evenly divy-6 text-neutral-desaturatedBlue">
			{timeIntervals.map((item) => (
				<button
					onClick={() => onClick(item)}
					key={item}
					type="button"
					className="hover:text-white focus:text-white"
				>
					{item}
				</button>
			))}
		</div>
	);
}
export default TimeIntervalsButton;
