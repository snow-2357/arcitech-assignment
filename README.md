##### Assignment

### React Chart Display Assignment

##### Description

This project is a React application that demonstrates how to display charts using a popular charting library. It showcases a simple example of integrating chart components into a React application and visualizing data in a graphical format.

##### Features

Displays a chart using Chart.js, a versatile charting library for JavaScript.
Renders sample data in the chart to demonstrate its functionality.
Responsive design for optimal viewing across different devices.

##### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/yourusername/react-chart-display.git
```

2. Navigate into the project directory:

```
cd arcitech-assignment
```

3. Install dependencies using npm:

```
npm install
```

4. Start the development server:

```
npm run dev
```

Open your web browser and go to http://localhost:5173/ to view the application.

##### Folder Structure

- **public**: Contains the public assets and HTML template for the React application.
- **src**: Contains the React components and application logic.
  - **components**: Contains reusable React components along with the wrappers.
    - **Charts**: Directory for chart-related components.
  - **data**: Directory for storing data files or fetching data.
  - **redux**: Directory for Redux-related files, such as actions, reducers, and store configuration.
  - **App.js**: Main component where the chart is rendered.
  - **index.js**: Entry point of the application.
- **package.json**: Contains metadata and dependencies for the project.
- **README.md**: This file, containing information about the project.

##### Dependencies

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): A blazing fast frontend build tool that provides instant server start and fast builds.
- [Recharts](https://recharts.org/): A composable charting library built on top of React components, offering a simple and declarative way to create interactive charts.
- [Redux](https://redux.js.org/): A predictable state container for JavaScript apps.
- [Redux Toolkit](https://redux-toolkit.js.org/): The official, opinionated, batteries-included toolset for efficient Redux development.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.

##### Video
[Youtube](https://youtube.com/watch?v=Npa7CiLYFWU)

##### Bar Chart

- This component receives category distribution data as props in the form of an object where keys represent category names and values represent corresponding counts.
- It utilizes Recharts library to create a bar chart visualization. The x-axis of the chart represents category names, while the y-axis represents corresponding counts.
- Users can interact with the chart by hovering over bars to view additional information via tooltips.
- The chart dynamically sorts data based on user-selected sorting options:
  - 1: Increasing order
  - -1: Decreasing order
  - 0: Alphabetical order

##### Line Chart

- A line chart visualization of response time data.
- It receives data as props, which can be either day-wise or week-wise data.
- The x-axis of the chart represents either dates or weeks, depending on the selected time period.
- The y-axis represents the average response time.
- It utilizes Recharts library to create an interactive and responsive line chart.
- Users can hover over data points to view additional information via tooltips.

##### Pie Chart

- A pie chart visualization of response time data.
- It receives data as props, where each object contains a rating and count representing the distribution of response times.
- The chart uses Recharts library to create an interactive and responsive pie chart.
- Each segment of the pie represents a response time rating, with the size of the segment indicating the proportion of responses in that rating category.
