# Heathrow Weather Station

This website is the result of an assignment.

## Assignment Description
The end user would like to visualise the Heathrow weather station information on a graph. The heathrow-weatherstation.json file contains the information on temperature max/min, rain fall in mm and sunshine hours. This information starts Jan 1958 and ends Dec 2014.

The picture "the_graph_of_fields.jpg" shows the layout and controls the end user would like in a web browser. The end user will select one of the fields temp max/min, rainfall or sunshine hours. The end user will enter a start and

end range for the graph. The start and end will be the year & month. When the user presses "Display" the graph is generated.

The layout should have a fixed width 1024px in a web-browser (chrome, safari & firefox) and be centrally located. The end user will also use this on their iPhone 5 & iPad 3. The layout should respond and find the best way to layout the graph and controls in the available space.

The deliverable: - A single static html file or a zip file containing an index.html

Please implement this using React.

## Requirements
Node version 6 or higher

## UP and Running
First install all dependencies `npm install`

Run the App `npm start`

After the Server is up, put the `localhost:3000` in the web browser bar.

Have fun exploring the temperature change, the amount of sunlight in the winter and rainfall in the summer.

## Testing
Run Jest tests `npm test`

## Folder Structure

```
/src
 |
  \- app 
      App.js 
      |
       \- components    (App components e.x Chart, Date Field, etc.)
      |
       \- service       (Service Methods e.x. handling data)
  |
   \- data              (Data and Configuration e.x. weather data, form configuration)
``` 

## Notes
To keep requirements and dependency low I avoided using SASS/LESS.


