

//function to create the bar chart and bubble chart
function getBar(id) {
    //select the json data 
    d3.json("samples.json").then((data) => {
        //get the data for the id
        var sample = data.samples.filter(s => s.id === id)[0];
        console.log(sample);
        //get the top 10 sample values and reverse
        var sampleValues = sample.sample_values.slice(0, 10).reverse();
        console.log(sampleValues);
        //get top 10 otu_ids and reverse
        var otu = sample.otu_ids.slice(0, 10).reverse();
        console.log(otu);
        //associate the otu ids with name "OTU" 
        var otuIds = otu.map(d => "OTU" + d)
        //get top 10 otu labels
        var otu_labels = sample.otu_labels.slice(0, 10).reverse();
        console.log(otu_labels);


        //plot the bar chart of otu_ids and sample values for each id
        var trace1 = {
            x: sampleValues,
            y: otuIds,
            text: otu_labels,
            type: "bar",
            orientation: "h"
        };
        var layout = {
            title: "Top 10 OTUs",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }
        };
        var data = [trace1];
        Plotly.newPlot("bar", data, layout);

        // plot bubble chart of 
        var trace2 = {

            x: sample.otu_ids,
            y: sample.sample_values,
            marker: {
                color: sample.otu_ids,
                size: sample.sample_values
            },
            mode: "markers",
            text: sample.otu_labels
        }
        var layout = {
            xaxis: { title: "OTU ID" },
            height: 600,
            width: 1300
        }
        var data2 = [trace2];

        Plotly.newPlot("bubble", data2, layout);
    })
};


// Display the demographic data 
function getMetadata(id) {
    d3.json("samples.json").then((data) => {
        var metainfo = data.metadata;
        // console.log(metainfo);

        //get the data info from the id
        var info = metainfo.filter(row => row.id.toString() === id)[0];
        // console.log(info);

        //select the html id 
        var demoinfo = d3.select("#sample-metadata");
        demoinfo.html("");
        //append the key value pair data  into the demographic panel
        Object.entries(info).forEach((key) => {
            demoinfo.append("h5").text(key[0] + ": " + key[1] + "\n");

        });
    });
}

//change event function
function optionChanged(id) {
    getBar(id)
    getMetadata(id);

}

//Update the dropdown with the names id and initiate the web page with data

function init() {
    //select the  ID from html 
    var dropdownMenu = d3.selectAll("#selDataset");
    //get the data 
    d3.json("samples.json").then((data) => {
        data.names.forEach(function (name) {
            //append each id from names array to the dropdown menu option value
            dropdownMenu.append("option").text(name).property("value");
            // console.log(data.names[0]);
        });
        //call function and pass the data as argument
        getBar(data.names[0]);
        getMetadata(data.names[0]);
    })
}
// Initiate the name function
init();