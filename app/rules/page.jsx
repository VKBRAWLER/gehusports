import Content from "@components/Content";
const RulesPage = () => {
	return (
		<main>
			<h1 className='w-full text-center font-extrabold text-3xl sm:text-5xl texts relative'>Rules for Umang Khel Mahaatsav</h1>
			{Content.Rules.map((i) => {
				return (
					<section className="border-8 rounded-lg my-10 md:mx-20 p-5 bg-green-500 bg-opacity-40">
						<h3 className="text-white text-3xl">{i.name.toUpperCase()}</h3>
						<ul className="list-decimal list-inside text-xl text-white">
							{i.rules.map((j) => {
								return (
									<li>{j}</li>
								)
							})}
						</ul>
					</section>
				)
			})}
		</main>
	)
}
export default RulesPage;