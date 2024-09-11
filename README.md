
# **Server Time React Application**

## **Project Overview**

This React application fetches the current server time from an API and displays it on the webpage. The time is automatically refreshed every 5 seconds. This project demonstrates the use of React hooks (`useState`, `useEffect`) and how to handle asynchronous API calls using the Fetch API. Users can replace the API URL with their own local or remote API endpoint.

## **Installation**

### **1. Clone the repository**

To get started, clone the project repository:

```bash
git clone https://github.com/JiayiWu-MobilePractice/server-time-app.git
cd server-time-app
```

### **2. Install dependencies**

Install the required dependencies by running the following command in your project directory:

```bash
npm install
```

### **3. Start the React application**

To run the React application, execute the following command:

```bash
npm start
```

This will start the development server and open the application in your default browser.

## **Project Structure**

```
server-time-app/
├── public/
│   ├── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── package.json
├── README.md
```

- **App.js**: The main component of the project, responsible for fetching and displaying server time.
- **App.css**: The CSS file for styling the application.
- **index.js**: The entry point of the application that renders the `App` component.
- **package.json**: Includes metadata about the project and dependencies.

## **Functionality**

- **Fetch Server Time**: The application fetches the server time from a specified API URL, which can be replaced by the user with their own local or remote server.
- **Format Time**: The fetched server time is formatted using `Intl.DateTimeFormat` for easy reading.
- **Auto-Refresh**: The time is updated automatically every 5 seconds using `setInterval`.
- **Error Handling**: If there's an issue fetching the time, an error message is displayed.

### Code Overview

Here’s a breakdown of the key functionality in `App.js`:

1. **State Management**:
   - `serverTime`: Holds the current server time as a string.
   - `error`: Holds any error messages if fetching the server time fails.

2. **Fetch Server Time**: The `fetchServerTime` function makes an asynchronous call to the API, parses the returned JSON, and formats the time.

3. **Formatting Time**: The `formatServerTime` function formats the server time using `Intl.DateTimeFormat` to display it in a user-friendly format.

4. **Auto-Refresh**: The `useEffect` hook sets up an interval to fetch the server time every 5 seconds. It cleans up the interval when the component unmounts.

```javascript
useEffect(() => {
  fetchServerTime();
  const intervalId = setInterval(fetchServerTime, 5000); // Refresh every 5 seconds
  return () => clearInterval(intervalId); // Cleanup on component unmount
}, []);
```

## **API Information**

By default, the application fetches server time from a local API hosted on `http://10.0.0.189:3000/time`. However, **users can replace this URL with their own local or remote API endpoint** in the `fetchServerTime` function inside `App.js`.

### **How to Replace the API Endpoint**:

1. Open the `App.js` file in your project.
2. Find the following line in the `fetchServerTime` function:

   ```javascript
   const response = await fetch('http://10.0.0.189:3000/time'); // Local IP address
   ```

3. Replace `'http://10.0.0.189:3000/time'` with the URL of your own local or remote API.

   For example:

   ```javascript
   const response = await fetch('http://localhost:3000/time'); // Example for local setup
   ```

4. Ensure that your API returns a response in the following format:

```json
{
  "time": "2024-09-02T12:34:56Z"
}
```

## **Dependencies**

The following dependencies are required to run this application:

- **React**: The main JavaScript framework for building the UI.
- **Fetch API**: Used to make HTTP requests to fetch server time.
- **Intl.DateTimeFormat**: JavaScript built-in object used for formatting dates.

### Full List of Dependencies in `package.json`:

```json
{
  "name": "server-time-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
