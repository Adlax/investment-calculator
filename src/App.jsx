import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
	const [userInputs, setUserInputs] = useState({ initialInvestment: 15000, annualInvestment: 1200, expectedReturn: 6, duration: 10 });
	const inputValidity = userInputs.duration >= 1;

	const handleChange = (inputField, newValue) => {
		setUserInputs((oldState) => {
			return {
				...oldState,
				[inputField]: newValue,
			};
		});
	};

	// console.log(userInputs);

	return (
		<>
			<Header />
			<UserInput userInputs={userInputs} handleChange={handleChange} />
			{!inputValidity && <p className="center">Please enter duration greater than 0</p>}
			{inputValidity && <Results userInputs={userInputs} />}
		</>
	);
};

export default App;
