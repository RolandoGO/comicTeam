import React, { useContext } from "react";
import { CharacterContext } from "../context/context";
import {Qualities} from "../constants/characterConta"

export default function HeroCard({ herosData }) {
	

	const { addCharacter } = useContext(CharacterContext);

	return (
		<div key={herosData.id} id="cardShadow" className="col-sm-2 d-flex">
			<div onClick={() => addCharacter(herosData)} id="characterAdd" className="bg-warning">
				<span>+</span>
			</div>
			<img style={{ height: "160px", width: "150px" }} src={herosData.image.url} alt="no image"></img>
			<div style={{ height: "160px", width: "160px", lineHeight: "8px", fontSize: "15px", padding: "5px" }}>
				<div className="mb-4 ">
					<strong style={{ lineHeight: "12px" }}>{herosData.name}</strong>
				</div>
				{Qualities.map(c => (
					<p key={c}>
						{c}: {herosData.powerstats[c] === "null" ? "-" : herosData.powerstats[c]}
					</p>
				))}
			</div>
		</div>
	);
}
