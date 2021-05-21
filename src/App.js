import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { CharacterContext } from "./context/context";
import { useCharacter } from "./hooks/useCharacter";
import { useLogin } from "./hooks/useLogin";

const App = () => {
	const characterHook = useCharacter();
	const { isTokenExist, setIsTokenExist, logOut } = useLogin();

	return (
		<CharacterContext.Provider value={characterHook}>
			<div className="container">{isTokenExist ? <Home logOut={logOut} /> : <Login setIsTokenExist={setIsTokenExist} />}</div>;
		</CharacterContext.Provider>
	);
};

export default App;
