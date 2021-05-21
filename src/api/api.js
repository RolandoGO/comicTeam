import axios from "axios";
import { ALKEMY_ENDPOINT,CHARACTER_ENDPOINT } from "./urls";

export const login = async values => {
	try {
		const response = await axios.post(ALKEMY_ENDPOINT, {
			password: values.password,
			email: values.email,
		});
		if (response) {
			localStorage.setItem("challengeToken", response.data.token);
			return true;
		}
	} catch (err) {
		console.error(err);
		return false;
	}
};


export const searchCharacter= async ({name})=>{

	
		 

		try{
			const call = await axios.get(CHARACTER_ENDPOINT+name)
			if (call.data.error) {
				const error=call.data.error
				const boleean=false
				return{
					error,
					boleean
				}
				
			} else {
				const results = call.data.results
				const boleean=true
				return {
					results,
					boleean
				}
			}
		}
		catch{

			const error = "error de conexion o no se encontro el recurso";
			const boleean=false
			return{
				error,
				boleean
			}
		   
		}
		
	
			
	

}
