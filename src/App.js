import React, { useState, useEffect } from "react";
import Home from "./components/Home";

import { CharacterContext } from "./context/context";
import { useCharacter } from "./hooks/useCharacter";


const App = () => {
	const characterHook = useCharacter();
	

	return (
		<CharacterContext.Provider value={characterHook}>
			<Home  /> 
		</CharacterContext.Provider>
	);
};

export default App;
