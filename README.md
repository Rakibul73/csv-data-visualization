# CSV Data Visualization Web Application

This repository contains the code for a simple web application built with ReactJS for the frontend and Python (Flask) for the backend. The application visualizes CSV data retrieved from a SQLite database using RESTful API endpoints.

> Used this backend API: [CSV Data Visualization Web Application Backend API](https://github.com/Rakibul73/csv-data-visualization-backend)

## Features

- **Table Visualization**: Displays tabular data fetched from the backend server, allowing users to view and edit the data directly in the table.
- **Line Chart Visualization**: Shows a line chart with the close column on the y-axis and sorted date on the x-axis. Users can select a trade code from the dropdown to view corresponding data in the line chart.
- **Pie Chart Visualization**: Presents a pie chart that visualizes the distribution of trade codes in the dataset.

## Technologies Used

- **Frontend**:
  - ReactJS
  - React Chart.js 2 for chart visualization
  - CSS for styling

- **Backend**:
  - Python
  - Flask for creating RESTful APIs
  - SQLAlchemy for database interaction

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running:
    ```bash
    npm install
    ```
4. Start the frontend and backend servers:
    - run `npm start`.
5. Access the application in your web browser at `http://localhost:3000`.

## Challenges Faced

1. **Data Visualization**: Implementing various types of data visualizations, such as line charts and pie charts, required understanding how to work with different chart libraries and manipulate data to fit the desired format.
2. **CRUD Operations**: Implementing CRUD operations in the frontend and integrating them with the backend posed some challenges, particularly in handling asynchronous requests and updating the UI accordingly.

## Lessons Learned

- **ReactJS and Python Integration**: I gained valuable experience in integrating ReactJS with Python Flask for building full-stack web applications. Understanding how frontend and backend components interact and communicate was a key learning outcome.
- **Data Visualization Techniques**: Through implementing various data visualization techniques, I learned how to effectively represent data in a visually engaging manner, enhancing the user experience and understanding.
- **RESTful API Development**: Developing RESTful APIs using Flask allowed me to understand the principles of web service development and how to create scalable backend solutions for web applications.

