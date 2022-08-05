# UFO-Sightings
### THE TRUTH IS OUT THERE
#### by Justin R. Papreck
---

## Overview
The best way to identify the best places to look for UFOs by shape is to be able to filter by when and where they were found, along with the testimony by the observer. Using a provided set of data in the form of a .js file, this project constructs a webpage using JavaScript, HTML, and CSS to make an aesthetically pleasing website that offers information about UFOs as well as allows the user to interactively filter the data in order to find true gems like the sighting in Paducah, Kentucky in 2010. While the dataset provided only includes about 1000 lines, the site can handle much larger datasets organized in the same format. 

--- 
## Results
Using the HTML grid system, the webpage was set up to have a jumbotron across the top of the page, and using the CSS an image was applied to that container. The color theme was changed using the HTML code to a dark theme. The heading and paragraph were offset as well as the interactive filter and the table. Placeholders were left in the table to allow the user to see the format in which to enter the filter parameters. When constructing the page, fluid containers were used to allow the page to easily adjust to size changes of the page and screen: 

![widePage](https://user-images.githubusercontent.com/33167541/182995103-0c5bcc12-79fd-4f92-a91d-cc4e93164743.png)


![thinPage](https://user-images.githubusercontent.com/33167541/182995132-99819201-c2ab-4bbe-9a4e-ed2bed2ad0f1.png)


In order to use the filters, the user need only enter a parameter. It can be filtered by Date:

![filteredByDate](https://user-images.githubusercontent.com/33167541/182995466-9e9f8baf-48c5-43e6-8653-6e1aa767ec37.png)


Filtered by City:

![filteredByCity](https://user-images.githubusercontent.com/33167541/182995515-f2de2906-098d-4ab8-a900-435a7dcb77cc.png)


Filtered by State:

![filteredByState](https://user-images.githubusercontent.com/33167541/182995552-b8fdeddc-3b36-465d-a110-b45ad03d1e09.png)


Filtered by Country:

![filteredByCountry](https://user-images.githubusercontent.com/33167541/182995579-018d3dd9-db0a-4331-bd2a-79d408dfcc63.png)


Filtered by Shape: 

![filteredByShape](https://user-images.githubusercontent.com/33167541/182995615-a4dc2237-28f8-495f-aa91-c6885e87a4d7.png)


And filtered by multiple parameters simultaneously - this filters by Date and State:

![filteredByDateAndState](https://user-images.githubusercontent.com/33167541/182995715-f865e18b-6322-4cfa-b3d3-7a02fdb6adf9.png)


When parameters are entered that do not provide any results, the table is returned blank: 

![filteredByCityAndShape](https://user-images.githubusercontent.com/33167541/182995848-f3f60eb4-32d2-40bc-9f7a-5645aca37e41.png)


---
## Summary
While this provides a simple-to-use interface for the user, it does have several major limitations. The current website only has data for about 2 months of sightings, but considering a much larger dataset, the limitations still exist. 

1. The first major limitation is that one must know the exact city that they want to search. If the data spanned several years, it would be very difficult to discern unique events. This is already present in the current table, as there were sightings in La Mesa, Bonita, El Cajon, San Diego, National City, Spring Valley, and Lemon Grove on January 1, 2010. While this appears that there were 8 different cities where UFOs were sighted, these are all within 15 miles of one another and all describe the same phenomenon.  One thing that would benefit this analysis would be a proximity to a particular location, so that the user can find all sightings within X miles of a particular location. 

2. It is unclear what types of shapes are available for the user to select. A drop menu would be more appropriate for the shape parameter.

3. Who doesn't love a map? A map with weighted points for each region with UFO sightings that can change as the user filters the data would look spectacular and provide a much better user experience than a simple table. 

4.  ~~Finally, this page clearly needs the X-Files theme song playing on a loop~~ One of the best features of this page is that it does not feature cheesy music like a 1990s Geocities site that would likely be looping the X-Files theme song. However, what would be extremely cool is to change the Jumbotron text from "The Truth Is Out There" to  "Deceive Inveigle Obfuscate" only as the user hovers over the text. 

5. I would also like to add a feature to "find the nearest UFO to my location", which would take the user's input location by city/state and find the nearest locations that have had sightings. 
