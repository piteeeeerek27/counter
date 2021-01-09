import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
const App = () => {
	const [step, setStep] = useState(0);
	const [step1, setStep1] = useState(0);
	const changeCounter = () => {
		setStep1(+step + +step1);
		setStep(0);
	};
	const changeAlways5 = () => {
		setStep1(+step + +step1);
		setStep(5);
	};
	const resetBtn = () => {
		setStep1(0);
		setStep(0);
	};
	const change = (e) => {
		setStep(e.target.value);
	};
	return (
		<div className="App">
			<h1>{`Licznik: ${step1}`}</h1>
			<div className="es">
				<Button onClick={changeCounter} variant="contained" color="primary">
					Add 1
				</Button>
				<Button onClick={changeAlways5} variant="contained" color="primary">
					Add 2
				</Button>
				<Button onClick={resetBtn} variant="contained" color="primary">
					Reset
				</Button>
			</div>
			<h1 className="essa">
				Krok:{" "}
				<input onChange={change} value={step} type="number" name="" id="" />
			</h1>
		</div>
	);
};
export default App;
