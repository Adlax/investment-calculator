import React, { useState } from "react";

const UserInput = ({ userInputs, handleChange }) => {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="initialInvestment">Initial Investment</label>
					<input
						type="number"
						name="initialInvestment"
						required={false}
						onChange={(evt) => handleChange("initialInvestment", parseInt(evt.target.value))}
						value={userInputs.initialInvestment}
					/>
				</p>
				<p>
					<label htmlFor="annualInvestment">Annual Investment</label>
					<input
						type="number"
						name="annualInvestment"
						required={false}
						onChange={(evt) => handleChange("annualInvestment", parseInt(evt.target.value))}
						value={userInputs.annualInvestment}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expectedReturn">Expected Return</label>
					<input
						type="number"
						name="expectedReturn"
						required={false}
						onChange={(evt) => handleChange("expectedReturn", parseInt(evt.target.value))}
						value={userInputs.expectedReturn}
					/>
				</p>
				<p>
					<label htmlFor="duration">Duration</label>
					<input
						type="number"
						name="duration"
						required={false}
						onChange={(evt) => handleChange("duration", parseInt(evt.target.value))}
						value={userInputs.duration}
					/>
				</p>
			</div>
		</section>
	);
};

export default UserInput;
