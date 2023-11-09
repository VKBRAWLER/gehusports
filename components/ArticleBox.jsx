const ArticleBox = (j) => {
	j = j.obj;
	let h1 = "Comming Soon...";
	let span = '?? / ?? / ????';
	let btn = false;
	let btn_text = "Registration";
	if (j.start_date) {
		span = j.start_date;
		btn = j.register;
		if (btn) {
			span = "3d 2hr 23min";
		}
		if (j.start_date > 10) {

		}
	}
	return (
		<article className="h-[4.5rem]">
			<h1 className='text-xl font-bold'>{h1}</h1>
			{/* <span className="text-lg font-semibold">3d 2hr 23min</span> */}
			{/* <span className="text-lg font-semibold">?? / ??? / ????</span> */}
			<span className="text-lg font-semibold">{span}</span>
			{btn && <button className="absolute bottom-2 right-2 bg-blue-400 p-2 rounded-xl">{btn_text}</button>}
		</article>
	)
}
export default ArticleBox;