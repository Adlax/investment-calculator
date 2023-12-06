import React from "react";
import { calculateInvestmentResults, formatter } from "../utils/investment";

const Results = ({ userInputs }) => {
	const { initialInvestment, annualInvestment, expectedReturn, duration } = userInputs;
	const data = calculateInvestmentResults(initialInvestment, annualInvestment, expectedReturn, duration);
	const initialInvestmentValue = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

	console.log(data);

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Interest (Total)</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{data.map((yearData, index) => {
					const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestmentValue;
					const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
					return (
						<tr key={index}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
