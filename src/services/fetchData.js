const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/';
const OPEN_WEATHER_API_TOKEN = 'd914b5caf437b7e3788952dcb4b2c55e';

const fetchData = async (city) => {
  try {
    const rawResult = await fetch(
      `${OPEN_WEATHER_API_URL}weather?q=${city}&appid=${OPEN_WEATHER_API_TOKEN}`,

      {
        method: 'get',
      }
    );
    const result = await rawResult.json();

    return {
      ...result,
      status: 'fetchedData',
    };
  } catch (err) {
    return {
      message: err.message,
      status: 'err',
    };
  }
};

export default fetchData;
