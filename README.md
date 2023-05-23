<h1 align="center">KPMG-Legal-Tech</h1>

<p align="center">This project aims to develop a cutting-edge web application that leverages modern technologies such as React, CSS, HTML, JavaScript, Babel, Jest, React Testing Library, and Leaflet to create an advanced and intuitive platform for visualizing company data. By seamlessly integrating with an external API, This solution enables users to fetch up-to-date company information and presents it in a structured table format. Moreover, our application incorporates interactive mapping functionalities, allowing users to locate companies geographically and apply filters based on sector and fee ranges.</p>

## Pre-Build plan and the decisions made while solving the task

#### Understanding the requirements:
1. Create a web application to display company data.
2. Retrieve company data from an API in JSON format.
3. Present the data in a table.
4. Map the company locations on a map using latitude and longitude information.
5. Perform tests to validate the code.

#### Designing the application structure:
1. Identified the main components required for the application, such as the DataFetching component, DataMap component, and DataTable component.
2. Determined the data flow between components, such as passing the company data from the DataFetching component to the DataMap and DataTable components.
3. Designed the layout and styling of the application using CSS.

#### Implemented fetching and displaying the data:
1. Created a fetchData function that fetches the company data from the API using the Fetch API.
2. Used the useEffect hook to fetch the data and update the state in the DataFetching component.
3. Set up state variables to store the fetched data and loading status.
4. Displayed a loading message while the data is being fetched.
5. Passed the company data as props to the DataMap and DataTable components.

#### Implemented the DataTable component:
1. Created a DataTable component that receives the company data as props.
2. Renderd a table with table headers and rows to display the company data.
3. Formated and displayed the necessary information such as company name, sector, stock symbol, address, latitude, longitude, fees, etc.
4. Implemented filtering functionality, such as filtering by sector or fee range.
5. Styled the table using CSS.

#### Implemented the DataMap component using Leaflet:
1. Installed Leaflet and all required plugins.
2. Created a DataMap component that renders a map using the MapContainer component from react-leaflet.
3. Used the company data passed as props to map the company locations onto the map using latitude and longitude information.
4. Customized the map markers using Leaflet's Marker and Popup components.
5. Styled the map using CSS or Leaflet's built-in styling options.

#### Writing tests using Jest and React Testing Library:
1. Wrote unit tests for the DataFetching component, ensuring that data is fetched correctly and state is updated accordingly.
2. Wrote tests for the DataMap component, checking if the map and markers are rendered correctly based on the provided company data.
3. Wrote tests for the DataTable component, ensuring that the table is rendered correctly and filtering functionality works as expected.
4. Used React Testing Library's querying and interaction methods to test component behavior and user interactions.

#### Handling errors and edge cases:
1. Implemented error handling for failed API requests or incorrect data responses.
2. Displayed appropriate error messages or fallback components to provide a good user experience.

#### Optimizing and refine the application:
1. Optimized the performance of the application by minimizing unnecessary re-renders and optimizing API calls.
2. Refactored the code to follow best practices, improve readability, and maintainability.
3. Considered performance optimizations for the map component, such as clustering markers for better performance with a large number of companies.

#### Test the application thoroughly:
1. Tested the application on different browsers and devices to ensure compatibility.
2. Performed manual testing to verify that all features and functionalities are working as expected.
3. Used debugging tools like ESLint to identify and fix any issues or errors that may arise.

## Screenshots

![Screenshot (4)](https://github.com/Azeemkhan07/KPMG-Legal-Tech-Test/assets/106512671/0488b6b6-4ec8-4e8e-af4d-c3a0a7ff0760)
![Screenshot (9)](https://github.com/Azeemkhan07/KPMG-Legal-Tech-Test/assets/106512671/5aacb7bf-a8e2-4f01-8e0a-41e55194ff6d)

## Author

**Abdul Azeem Khan**
