import React from "react";
import SearchBox from "./SearchBox";
import TeamDisplay from "./TeamDisplay";
import PowerstatsSum from "./PowerstatsSum";

const Home = () => {
	return (
		<div className="container">
			
			<>
				<SearchBox />
				<PowerstatsSum />
				<TeamDisplay />
			</>
		</div>
	);
};

export default Home;
