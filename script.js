//your JS code here. If required.
const tbody = document.getElementById("output");

tbody.innerHTML = `
<tr id="loading">
<td colspan="2" class="text-center">Loading...</td>
</tr>
`;

function createPromise() {
	return new Promise(function(resolve) {
		const delay = Math.random() * 2 + 1;
		const startTime = performance.now();

		setTimeout(function() {
			const endTime = performance.now();
			const timeTaken = (endTime - startTime) / 1000;
			resolve(timeTaken);
		}, delay * 1000);
	});
}

const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();

Promise.all([p1, p2, p3]).then(function(values) {
	tbody.innerHTML = "";

	values.forEach(function(time, index) {
		const row = document.createElement("tr");

		row.innerHTML = `
		<td>Promise ${index + 1}</td>
		<td>${time.toFixed(3)}</td>
		`;

		tbody.appendChild(row);
	});

	const totalTime = Math.max(...values);
	
	const totalRow = document.createElement("tr");
	totalRow.innerHTML = `
	<td>Total</td>
	<td>${totalTime.toFixed(3)}</td>
	`;

	tbody.appendChild(totalRow);
});