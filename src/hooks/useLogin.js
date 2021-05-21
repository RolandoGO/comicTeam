import React, { useState, useEffect } from "react";

export const useLogin = () => {
	const [isTokenExist, setIsTokenExist] = useState(false);

	const logOut = () => {
		localStorage.clear();
		setIsTokenExist(false);
	};

	useEffect(() => {
		const token = localStorage.getItem("challengeToken");
		if (token) setIsTokenExist(true);
	}, []);

	return {
		isTokenExist,
		setIsTokenExist,
		logOut,
	};
};
