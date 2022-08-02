// import the data from data.js
const tableData = data;

// Reference the html table using D3
var tbody = d3.select("tbody");

function buildTable(data)
{
    // First clear any existing data
    tbody.html("");

    // Next, loop through each object of the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) =>
    {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table data cell (td)
        Object.values(dataRow).forEach((val) =>
        {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}