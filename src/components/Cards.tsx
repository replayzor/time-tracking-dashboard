// library imports
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// types
import { ActivityItem } from "../utils/types";

type Props = {
	selectedInterval: string;
};

function Cards({ selectedInterval }: Props) {
	const { data } = useQuery({
		queryKey: ["activityData"],
		queryFn: () => axios("/data.json"),
	});

	const getTimeframeData = (item: ActivityItem) => {
		switch (selectedInterval) {
			case "Daily":
				return item.timeframes.daily;
			case "Weekly":
				return item.timeframes.weekly;
			case "Monthly":
				return item.timeframes.monthly;
			default:
				return item.timeframes.weekly;
		}
	};

	const renderPreviousPeriodText = () => {
		if (selectedInterval === "Daily") {
			return "Yesterday";
		} else if (selectedInterval === "Weekly") {
			return "Last Week";
		} else {
			return "Last Month";
		}
	};

	return (
		<>
			{data?.data.map((item: ActivityItem) => {
				const timeframeData = getTimeframeData(item);
				const previousPeriodText = renderPreviousPeriodText();
				return (
					<div key={item.id} className="relative pb-20 md:ml-6 rounded-xl">
						<div
							style={{ backgroundColor: item.bgColor }}
							className="flex justify-end rounded-xl"
						>
							<img src={item.image} alt="" />
						</div>
						<div className="absolute w-full p-6 space-y-2 hover:brightness-200 hover:cursor-pointer top-10 rounded-xl bg-neutral-darkBlue">
							<div className="flex items-baseline justify-between">
								<h2 className="text-lg text-white">{item.title}</h2>

								<img src="/images/icon-ellipsis.svg" />
							</div>
							<div className="flex items-center justify-between md:items-start md:flex md:flex-col">
								<h3 className="text-3xl font-light text-white md:text-5xl md:pt-4">
									{timeframeData.current} hrs
								</h3>
								<p className="text-neutral-paleBlue md:pt-4">
									{previousPeriodText} - {timeframeData.previous} hrs
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
export default Cards;
