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
};


// Create function to handle clicks on a button to
// filter responses

function handleClick() 
{
    // Select somthing with a datetime handle in html
    let date = d3.select('#datetime').property('value');

    // Create new table of filtered data from the original table
    let filteredData = tableData;

    if (date) 
    {
        // Apply `filter` to the table data only to keep the 
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };


    // Rebuild the table using the filtered data
    // If no date was entered, the filtered data will 
    // just be the original table
    buildTable(filteredData);
};

// Attach an event to listen for in the form button
d3.selectAll("#filter-btn").on("click", handleClick);


// Build the table when the page loads
buildTable(tableData);