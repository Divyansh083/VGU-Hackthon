import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import $ from "jquery";

var lat = 26.811,
    long = 75.889;
var x = document.getElementById("test");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}

function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(lat, long);
}

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=02823c704385be331f682e77eabacece&units=metric",
    method: "GET",
    data: { id: "2172797", appid: "02823c704385be331f682e77eabacece" },
    success: function (response) {
        // response from OpenWeatherMap
        let dataArray = JSON.parse(JSON.stringify(response)); // create an array from JSON element
        console.log(dataArray);
        var a = document.getElementById("weather");
        var b = document.getElementById("temp");
        var c = document.getElementById("humidity");
        var d = document.getElementById("city");
        a.innerHTML = dataArray.weather[0].main;
        b.innerHTML = dataArray.main.temp+"°C";
        c.innerHTML = dataArray.main.humidity+"%";
        d.innerHTML = dataArray.name;
        const date = new Date();
        document.getElementById("date").innerHTML = date.toDateString();
    },
});
/* Object { coord: {…}, weather: (1) […], base: "stations", main: {…}, visibility: 5000, wind: {…}, clouds: {…}, dt: 1665730473, sys: {…}, timezone: 19800, … }
base: "stations"​
clouds: Object { all: 0 }
cod: 200
coord: Object { lon: 75.889, lat: 26.811 }
dt: 1665730473
id: 8030622
main: Object { temp: 31.14, feels_like: 30.67, temp_min: 31.14, … }
feels_like: 30.67
humidity: 37
pressure: 1015
temp: 31.14
temp_max: 31.14
temp_min: 31.14
<prototype>: Object { … }
​
name: "Jagatpura"
​
sys: Object { type: 1, id: 9170, country: "IN", … }
​
timezone: 19800
​
visibility: 5000
​
weather: Array [ {…} ]
​​
0: Object { id: 721, main: "Haze", description: "haze", … }
​​​
description: "haze"
​​​
icon: "50d"
​​​
id: 721
main: "Haze"
<prototype>: Object { … }
length: 1​​
<prototype>: Array []
wind: Object { speed: 1.03, deg: 0 }
<prototype>: Object { … }
farmer.jsx:25
 */
const FarmerPage = () => {
    return (
        <>
            <div className="container fluid">
                <br />
                <div className="row" style={{ float: "right" }}>
                    {/* <div className="col-lg-6 img-fluid">
                <img src="images.jpg" alt="">
            </div> */}
                    <div className="col-lg-3">
                        <table id="customers">
                            <tr>
                                <th>Weather</th>
                                <th id="date">Calculating</th>
                                <th id="city">Calculating</th>
                            </tr>
                            <tr>
                                <td id="humidity">Calculating</td>
                                <td id="temp"></td>
                                <td id="weather">Calculating</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2>Suggested Crops</h2>

                <div
                    id="carouselMultiItemExample"
                    className="carousel slide carousel-dark text-center"
                    data-mdb-ride="carousel"
                >
                    <div className="d-flex justify-content-center mb-4">
                        <button
                            className="carousel-control-prev position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="carousel-inner py-4">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2 card-blocks">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                                                className="card-img-top"
                                                alt="Waterfall"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-none d-lg-block card-blocks">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                                                className="card-img-top"
                                                alt="Sunset Over the Sea"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-none d-lg-block card-blocks">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                                className="card-img-top"
                                                alt="Sunset over the Sea"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-none d-lg-block card-blocks">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                                className="card-img-top"
                                                alt="Sunset over the Sea"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-none d-lg-block card-blocks">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                                className="card-img-top"
                                                alt="Sunset over the Sea"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-none d-lg-block card-blocks">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                                className="card-img-top"
                                                alt="Sunset over the Sea"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2 col-md-12">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                                className="card-img-top"
                                                alt="Fissure in Sandstone"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                                                className="card-img-top"
                                                alt="Storm Clouds"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card's content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                                                className="card-img-top"
                                                alt="Hot Air Balloons"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card's content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2 col-md-12 mb-4 mb-lg-0">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                                                className="card-img-top"
                                                alt="Peaks Against the Starry Sky"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card's content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                                                className="card-img-top"
                                                alt="Bridge Over Water"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                                                className="card-img-top"
                                                alt="Purbeck Heritage Coast"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                                                className="card-img-top"
                                                alt="Purbeck Heritage Coast"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>

                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FarmerPage;
