import React from "react";
import SearchBox from "./SearchBox";
import TeamDisplay from "./TeamDisplay";
import PowerstatsSum from "./PowerstatsSum";

const Home = ({ logOut }) => {
	return (
		<div className="container">
			<button className="btn btn-dark mt-2" onClick={logOut}>
				Log Out
			</button>
			<>
				<SearchBox />
				<PowerstatsSum />
				<TeamDisplay />
			</>
		</div>
	);
};

export default Home;
