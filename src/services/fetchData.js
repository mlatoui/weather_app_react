const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_TOKEN = '5e784440e207d2ee4f990bac4d85aee5';

const fetchData = async (city) => {
  try {
    const rawResult = await fetch(
      `${OPEN_WEATHER_API_URL}?appid=${OPEN_WEATHER_API_TOKEN}&q=${city}`,
      {
        method: 'get',
      }
    );
    const result = await rawResult.json();

    console.log(result);
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
