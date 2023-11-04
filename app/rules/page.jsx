import Content from "@components/Content";
const SportsRules = () => {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl texts md:text-4xl font-bold text-center mb-8">Rules Regarding Sports Played in Umang Khel Mahotsav</h1>
			{Content.Rules.map((sport) => (
				<div id={sport.name} key={sport.name} className="bg-green-200 shadow-lg rounded-lg overflow-hidden mb-4">
					<div className="p-4">
						<h2 className="text-3xl font-semibold text-gray-800">{sport.name}</h2>
						{sport.rules && <><h3 className="text-2xl font-medium text-gray-600 mt-4">RULES</h3>
						<ol className="list-decimal list-inside text-gray-700 mt-2">
							{sport.rules.map((point) => (
								<li key={point} className="mt-1">{point}</li>
							))}
						</ol>
						</>}
						{sport.points && <><h3 className="text-2xl font-medium text-gray-600 mt-4">Points to Remember</h3>
						<ol className="list-disc list-inside text-gray-700 mt-2">
							{sport.points.map((point) => (
								<li key={point} className="mt-1">{point}</li>
							))}
						</ol>
						</>}
						{sport.ground && <>
						<h3 className="text-2xl font-medium text-gray-600 mt-4">Ground Requirements</h3>
							<ol className="list-disc list-inside text-gray-700 mt-2">
								{sport.ground.map((requirement) => (
									<li key={requirement} className="mt-1">
										{requirement}
									</li>
								))}
							</ol>
						</>}
					</div>
				</div>
			))}
		</div>
	);
};

export default SportsRules;
