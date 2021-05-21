import React, { useState } from "react";

export const useCharacter = () => {
	const [team, setTeam] = useState([]);

	const addCharacter = selectedCharacter => {
		if (team.filter(character => character.id === selectedCharacter.id).length === 1) {
			alert("pick another");
			return;
		}

		if (selectedCharacter.biography.alignment === "good") {
			if (team.filter(d => d.biography.alignment === "good").length === 3) alert("3 heroes already, pick the villans");
			else {
				const newTeam = [...team, selectedCharacter];
				setTeam(newTeam);
			}
		} else {
			if (team.filter(d => d.biography.alignment === "bad").length === 3) alert("3 villans already, pick the heroes");
			else {
				const newTeam = [...team, selectedCharacter];
				setTeam(newTeam);
			}
		}
	};

	const deleteCharacter = selectedCharacter => {
		const newTeam = team.filter(character => character.id !== selectedCharacter.id);
		setTeam(newTeam);
	};

	return {
		addCharacter,
		deleteCharacter,
		team,
		setTeam,
	};
};
