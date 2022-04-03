# Pexapark Test App

This application allows a user to select from a range of energy farms to view a more detailed chart displaying the farms Capacity Factor. The user is also able to narrow down their time frame window and view the Capacity Factor for a set date range. Finally the user will be notified of any data points that do not have the total 24 value day average Capacity Factor values, by displaying the data point in red.

## App Setup

-To run locally the deployment machine requires Nodejs. Please install Nodejs if you haven't already.

-Please install the necessary node packages by navigating to the project root folder in a bash terminal and entering 'npm install'.

-The app uses a mock web server. To run the server please type 'npm run mock:server' into the bash terminal.

-To run the app please type into the bash terminal 'npm run start'.

-Open any local browser and navigate to `http://localhost:4200/`.

## Impletmentation

The app consists of two main views. The first view is the farm selection view. An array of farms is requested from the server, and displayed as selectable tiles, showing the farm name and type.

The second view is the farms capcity factor display, using a chart to show the capacity factor over a range of days. The user will see all the available data for the farm initially, they can also narrow the date range with a date selector at the top right of the chart.

Both views use the apps state. The state is very basic allowing the user to get the farms details or capacity factor data using a service to make http requests. The state is set with only UI relevant values such as the current selected farm. 

The data for all farms is initially loaded, and with the known selected farm id, the relevant farm data can be found in the dataset and passed to the chart.

Outside of the two main views the other components have been isolated so that they can be reused elsewhere. These include the chart component and date range picker component.

The data displayed is strictly typed and so models are used to define the data coming from server side.

## Future Improvements

-Currently data for all farms are loaded. I would separate this to only make calls for single farm data on the farms chart view.

-There is only a single state on the store as the application is small, however going forward the state should be broken down into multiple feature states, with each feature state having its only defined action/effects/reducer/selector files.

-Allow user to select the type of chart/graph they want

-Implement a tool bar allowing a user to select other farms when already in the capcity factor view

-Allow a search input on the farms view and let user search for farm by name

-Limit the date range picker to only current or past days, disable future day selection