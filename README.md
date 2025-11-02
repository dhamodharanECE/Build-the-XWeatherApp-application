🌦️ React Weather App
🧾 Overview

This project is a React-based weather application that provides real-time weather data for cities entered by the user.
Users can search for any city to view its Temperature, Humidity, Weather Condition, and Wind Speed in a clean, card-based layout.

The app uses the WeatherAPI
 to fetch live weather data.

🌍 API Information

Endpoint:

https://api.weatherapi.com/v1/current.json


Required Parameters:

Parameter	Description	Example
key	Your personal API key from WeatherAPI	1234567890abcdef
q	City name entered by user	Pune

👉 To get your own API key:

Sign up at WeatherAPI.com

Go to My Account

Copy your API Key

🖥️ Application Flow
🔹 Initial Render

Upon the initial render:

The page displays a search bar and a Search button.

No weather data is displayed initially.

Example layout:

[ Search City:  __________ ] [ Search ]

🔹 Search Behavior

When the user:

Enters a valid city name, and

Clicks the Search button

Then:

A message "Loading data…" appears below the search bar while data is being fetched.

Once data is successfully retrieved, weather details appear in cards.

🔹 Example — Searching "Pune"

When the user searches for "Pune", the weather data will be displayed like this:

+---------------------------------------------+
| Temperature: 27°C                           |
| Humidity: 78%                               |
| Condition: Partly Cloudy                    |
| Wind Speed: 10 km/h                         |
+---------------------------------------------+


Each metric is displayed inside a card element.

🔹 Invalid City Handling

If the user searches for an invalid or misspelled city,
show an alert message:

Failed to fetch weather data

🧱 Required Structure and Class Names

To pass the functional and structural requirements, your JSX must follow this structure:

<div className="weather-cards">
  <div className="weather-card">Temperature: 27°C</div>
  <div className="weather-card">Humidity: 78%</div>
  <div className="weather-card">Condition: Partly Cloudy</div>
  <div className="weather-card">Wind Speed: 10 km/h</div>
</div>


Key Class Requirements:

Class Name	Usage
weather-cards	Parent container div holding all weather cards
weather-card	Each individual weather information card
⚠️ Loading State

While the API request is in progress, display this message:

<p>Loading data…</p>


Ensure you use a <p> element for this text.

🧠 Implementation Logic
State Management:
const [city, setCity] = useState("");
const [weatherData, setWeatherData] = useState(null);
const [loading, setLoading] = useState(false);

API Call:
const fetchWeatherData = async () => {
  if (!city) return;
  setLoading(true);
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`
    );
    if (!response.ok) throw new Error("Invalid city");
    const data = await response.json();
    setWeatherData(data);
  } catch (error) {
    alert("Failed to fetch weather data");
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};

Rendering Logic:
return (
  <div className="app">
    <input
      type="text"
      placeholder="Enter city name"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
    <button onClick={fetchWeatherData}>Search</button>

    {loading && <p>Loading data…</p>}

    {weatherData && (
      <div className="weather-cards">
        <div className="weather-card">
          Temperature: {weatherData.current.temp_c}°C
        </div>
        <div className="weather-card">
          Humidity: {weatherData.current.humidity}%
        </div>
        <div className="weather-card">
          Condition: {weatherData.current.condition.text}
        </div>
        <div className="weather-card">
          Wind Speed: {weatherData.current.wind_kph} km/h
        </div>
      </div>
    )}
  </div>
);

⚙️ Technologies Used

Technology	Purpose

ReactJS	Frontend framework for UI

Fetch API	Fetching data from WeatherAPI

CSS3 (Flexbox/Grid)	Styling weather cards

JavaScript (ES6)	Logic and validation

🚀 Setup Instructions

Clone the Repository

git clone https://github.com/dhamodharanECE/Build-the-XWeatherApp-application.git

cd Weather-App


Install Dependencies

npm install


Add Your API Key

Open the main file (e.g. App.js)

Replace "YOUR_API_KEY" with your actual WeatherAPI key

Run the Application

npm start

Open in Browser

http://localhost:3000

🧠 Learnings

Using React useState and useEffect for dynamic UI updates

Handling asynchronous API requests

Implementing loading and error states

Designing flex-based layouts for weather cards

📸 UI Overview:

Initial View:

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/7acd222c-a328-4e58-9646-57af3ff68c9c" />

Dashboard View:

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/ba1c6add-1575-46cd-aeae-f93b14fcc10b" />

Weather Display:

Temperature: 27°C

Humidity: 78%

Condition: Cloudy

Wind Speed: 12 km/h

Development Link:
```base
https://build-the-x-weather-app-application.vercel.app/
