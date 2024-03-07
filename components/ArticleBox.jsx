import { calculateTimeLeft, DateString, TimeString } from "@utils/Time";
import { useState, useEffect } from "react";
import Link from "next/link";
const ArticleBox = (j) => {
	j = j.obj;
	const [h1, seth1] = useState("Comming Soon...");
	const [span, setspan] = useState("?? / ?? / ????");
	const [btn, setbtn] = useState(false);
	const [btn_text, setbtn_text] = useState("Registration");
	const upadateArticles = (j) => {
		if (j.start_date) {
			const Sdate = new Date(j.start_date);
			let time_left = (calculateTimeLeft(Sdate));
			if (time_left) {
				setbtn(j.register);
				seth1("Event Opening on...");
				setspan(DateString(Sdate));
				if (btn) {
					seth1("Registration Closing in...");
					setspan(TimeString(time_left));
					setbtn_link(`/events/${j.event_code}/${j._id}/register`);
				}
			}
			else {
				const Edate = new Date(j.end_date);
				let time_left = (calculateTimeLeft(Edate));
				setbtn(true);
				if (time_left) {
					seth1("Event Closing in...");
					setspan(TimeString(time_left));
					setbtn_text("Live Results");
				}
				else {
					seth1("Event Closed on");
					setspan(DateString(Edate));
					setbtn_text("View Results");
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
			{/* <span className="text-lg font-semibold">3d 2hr 23min</span> */}
			{/* <span className="text-lg font-semibold">?? / ??? / ????</span> */}
			<span className="text-lg font-semibold">{span}</span>
			{btn && <Link href={'/'} className="absolute bottom-2 right-2 bg-blue-400 p-2 rounded-xl">{btn_text}</Link>}
		</article>
	)
}
export default ArticleBox;