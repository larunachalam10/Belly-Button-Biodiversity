# Belly Button Biodiversity

Belly Button Biodiversity

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Plotly.js
----------

This project used JavaScript, Plotly.js, Python, HTML, CSS, Bootstrap, and Flask to explore the Belly Button Biodiverisity dataset. The data was analyzed and then I built three graphs using Plotly and Javascript. The pie chart shows the top ten samples for a particular sample id. The bubble chart shows all the samples and OTU ID data points. Metadata for the sample is also displayed, along with a gauge chart for wahing freequency. The display for each key/value pair from the metadata JSON object on the page. The graphs resize when the page size is modified.

CODE FILES
----------
1.app.py- the Flask app that calls the Python functions to read and store the bio samples, OTU and metadata.

2.index.html- Contains the Javascript code to get the data and create the 3 charts, the metadata, and the dropdown with the list of sample IDs.

3.style.css- CSS styling for the panel
