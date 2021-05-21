import React, { useState } from "react";
import HeroCard from "./HeroCard";
import { useFormik } from "formik";
import * as Yup from "yup";
import {searchCharacter} from "../api/api"


const validationSchema = Yup.object({
	name: Yup.string().required("required!!"),
});

export default function SearchBox() {
	const [hero, setHero] = useState();
	const [progress, setProgress] = useState(false);
	const [error, setError] = useState();

	
	const formik = useFormik({
		initialValues: {
			name: "",
		},
		onSubmit: async values => {
			setHero(null);
			setProgress(true);
			setError(null);
			const characterResponse = await searchCharacter(values);

			if(!characterResponse.boleean){
				setError(characterResponse.error);
				setProgress(false);
			}
			else{

				console.log(characterResponse.results)

				setHero(characterResponse.results);
				setProgress(false);
			}
			
		
		},

		validationSchema,
	});	
			


	

	return (
		<div className="container">
			<div className="row  p-2">
				<div className="col d-flex justify-content-center">
					<form onSubmit={formik.handleSubmit}>
						<div className="form-group">
							<input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="name" value={formik.values.name} className="form-control" id="character" placeholder="Character Name" />
						</div>

						{error && <strong className="text-danger">{error}</strong>}
						{formik.errors.name && formik.touched.name ? (
							<div className="text-danger text-uppercase" style={{ fontWeight: "bold" }}>
								{formik.errors.name}
							</div>
						) : null}

						<div className="d-flex justify-content-around">
							<button type="submit" className="btn btn-light mt-2">
								Search
							</button>
							{progress && <div className="spinner-border text-success mt-3" role="status"></div>}
						</div>
					</form>
				</div>
			</div>

			<div className="row p-2" style={{ gridGap: "10px" }}>
				{hero && hero.map(h => <HeroCard herosData={h} key={h.id} />)}
			</div>
		</div>
	);
}
