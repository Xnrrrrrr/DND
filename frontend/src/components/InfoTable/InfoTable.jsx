const InfoTable = ({ title, description, die, roll, specialType }) => {
	return (
		<>
			<table className="info-box-table">
				{specialType === "special" ? (
					<>
						<thead>
							<tr>
								<th colSpan={2}>Special Background: {title}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Description:</td>
								<td>{description}</td>
							</tr>
							<tr>
								<td>Die:</td>
								<td>{die}</td>
							</tr>
							<tr>
								<th colSpan={2}>Roll Options</th>
							</tr>
						</tbody>
					</>
				) : (
					<thead>
						<tr>
							<th colSpan={specialType === "ideal" ? 3 : 2}>
								{specialType === "personality" &&
									`Suggested Personality Traits`}
								{specialType === "ideal" && `Suggested Ideals`}
								{specialType === "bond" && `Suggested Bonds`}
								{specialType === "flaw" && `Suggested Flaws`}
							</th>
						</tr>
						<tr>
							<th>Roll ({die})</th>
							<th>Description</th>
							{specialType === "ideal" && <th>Alignment</th>}
						</tr>
					</thead>
				)}
				<tbody>
					{roll
						.filter((o) => o.description !== "")
						.map((entry, index) => (
							<tr key={index}>
								<td>{entry.number}</td>
								<td>
									{specialType === "ideal" && entry.bold ? (
										<strong>{entry.bold} </strong>
									) : null}
									{entry.description}
								</td>
								{specialType === "ideal" && (
									<td>{entry.alignment}</td>
								)}
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default InfoTable;
