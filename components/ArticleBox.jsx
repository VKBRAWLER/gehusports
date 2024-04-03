import { calculateTimeLeft, DateString, TimeString } from "@utils/Time";
import { useState, useEffect } from "react";
const ArticleBox = (j) => {
	j = j.obj;
	const [h1, seth1] = useState("Comming Soon...");
	const [span, setspan] = useState("?? / ?? / ????");
	const [reg, setReg] = useState(false);
	const upadateArticles = (j) => {
		setReg(j.register_link);
		if (j.start_date) {
			const Sdate = new Date(j.start_date);
			let time_left = (calculateTimeLeft(Sdate));
			if (time_left) {
				seth1("Event Opening on...");
				setspan(DateString(Sdate));
				if (j.register) {
					setReg(j.register_link);
					seth1("Registration Closing in...");
					setspan(TimeString(time_left));
				}
			}
			else {
				const Edate = new Date(j.end_date);
				let time_left = (calculateTimeLeft(Edate));
				
				if (time_left) {
					seth1("Event Closing in...");
					setspan(TimeString(time_left));
				}
				else {
					seth1("Event Closed on");
					setspan(DateString(Edate));
				}
			}
		}
	}
	useEffect(() => {
		upadateArticles(j);
		const interval = setInterval(() => {
			upadateArticles(j);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<article className="h-[4.5rem]">
			<h1 className='text-xl font-bold'>{h1}</h1>
			<span className="text-lg font-semibold">{span}</span>
			{reg && <a href={reg} className="absolute bottom-2 right-2 bg-blue-400 p-2 rounded-xl">Register</a>}
		</article>
	)
}
export default ArticleBox;