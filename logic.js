window.onload = () => {
    // Fetch news articles
    const NewsApi = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fabd8c07281d4c05b984c596954536da    ';
    fetch(NewsApi)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                const newsContainer = document.getElementById('side-1');
                data.articles.forEach(article => {
                    const articleElement = document.createElement('article');

                    const title_1 = document.createElement('h2');
                    title_1.textContent = article.title;

                    const description_1 = document.createElement('p');
                    description_1.textContent = article.description;

                    const image_1 = document.createElement('img');
                    image_1.src = article.urlToImage;
                    const ReadMore_1 = document.createElement('a')
                    ReadMore_1.href = article.url
                    ReadMore_1.textContent = 'ReadMore'

                    articleElement.appendChild(title_1);
                    articleElement.appendChild(description_1);
                    articleElement.appendChild(image_1);
                    articleElement.appendChild(ReadMore_1);

                    newsContainer.appendChild(articleElement);
                });
            } else {
                document.getElementById('side-1').textContent = 'Oops! Something went wrong!';
            }
        })
        .catch(error => {
            document.getElementById('side-1').textContent = 'Oops! Something went wrong!';
            console.error('Error:', error);
        });

    // Fetch news for the middle section
    const SecAPI = 'https://newsapi.org/v2/everything?q=apple&from=2024-08-25&to=2024-08-25&sortBy=popularity&apiKey=fabd8c07281d4c05b984c596954536da';
    fetch(SecAPI)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                const secondElement = document.getElementById('side-2');
                data.articles.forEach(article => {
                    const secondContainer = document.createElement('div');

                    const title_2 = document.createElement('h1');
                    title_2.textContent = article.title;

                    const description_2 = document.createElement('p');
                    description_2.textContent = article.description;

                    const content_2 = document.createElement('p');
                    content_2.textContent = article.content;

                    const image_2 = document.createElement('img');
                    image_2.src = article.urlToImage;

                    secondContainer.appendChild(title_2);
                    secondContainer.appendChild(description_2);
                    secondContainer.appendChild(content_2);
                    secondContainer.appendChild(image_2);

                    secondElement.appendChild(secondContainer);
                });
            } else {
                const err = document.createElement('h1');
                err.textContent = 'Oops! Something went wrong!';
                document.getElementById('side-2').appendChild(err);
            }
        })
        .catch(error => {
            const err = document.createElement('h1');
            err.textContent = 'Oops! Something went wrong!';
            document.getElementById('side-2').appendChild(err);
            console.error('Error:', error);
        });

    // Fetch additional news
    const ThirdApi = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fabd8c07281d4c05b984c596954536da';
    fetch(ThirdApi)
        .then(response => response.json())
        .then(data => {
            const FinalContain = document.getElementById('side-3');

            if (data.status === 'ok') {
                data.articles.forEach(article => {
                    const side3 = document.createElement('article');

                    const title_3 = document.createElement('h2');
                    title_3.textContent = article.title;

                    const description_3 = document.createElement('p');
                    description_3.textContent = article.description;

                    const image_3 = document.createElement('img');
                    image_3.src = article.urlToImage;

                    const ReadMore_2 = document.createElement('a');
                    ReadMore_2.href = article.url;
                    ReadMore_2.textContent = 'Read More';

                    side3.appendChild(title_3);
                    side3.appendChild(description_3);
                    side3.appendChild(image_3);
                    side3.appendChild(ReadMore_2);

                    FinalContain.appendChild(side3);
                });
            } else {
                const err = document.createElement('h1');
                err.textContent = 'Oops! Something went wrong!';
                document.getElementById('side-3').appendChild(err);
            }
        })
        .catch(error => {
            const err = document.createElement('h1');
            err.textContent = 'Oops! Something went wrong!';
            document.getElementById('side-3').appendChild(err);
            console.error('Error:', error);
        });

    // Fetch current weather data
    function fetchWeather(lat, lon) {
        const weatherApiUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=ce2a369bad8542a0a8d1e4747afeff04`;

        fetch(weatherApiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.data && data.data.length > 0) {
                    const weather = data.data[0];
                    document.getElementById('weather-info').innerHTML = `
                        <h2>Location: ${weather.city_name}</h2>
                        <p>Temperature: ${weather.temp} °C</p>
                        <p>Description: ${weather.weather.description}</p>
                        <p>Humidity: ${weather.rh}%</p>
                        <p>Wind Speed: ${weather.wind_spd} m/s</p>
                        <img src="https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png" alt="${weather.weather.description}">
                    `;
                } else {
                    document.getElementById('weather-info').textContent = 'Weather data not available';
                }
            })
            .catch(error => {
                document.getElementById('weather-info').textContent = 'Failed to fetch weather data';
                console.error('Error:', error);
            });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    fetchWeather(lat, lon);
                },
                error => {
                    console.error('Error getting location:', error);
                    document.getElementById('weather-info').textContent = 'Failed to get location';
                }
            );
        } else {
            document.getElementById('weather-info').textContent = 'Geolocation is not supported by this browser.';
        }
    }

    // Call Api.........
    getLocation();


    // For Marque  Tag Data ...........

    let CatFactAPI = 'https://catfact.ninja/fact'
    fetch(CatFactAPI)

    .then(Response => Response.json())
    .then(data => {

        try {

            let Access = document.querySelector('.slide')
            // let fact = data.fact

            let space = document.createElement('div')

            let show = document.createElement('marquee')
            show.textContent = data.fact
            show.direction = 'Left'

            space.appendChild(show)

            Access.appendChild(space)

            
        }catch(Error){
            alert('somthing Went wrong !!!')
        }
    })
};


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

  
