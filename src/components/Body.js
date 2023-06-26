import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import tempretureConversion from '../common/tempretureConversion';
import dateBuilder from '../common/dateBuilder';

export const Body = () => {
  const [appState, immutableSetState] = useContext(AppContext);

  if (!appState?.selctedCityInfo?.status) {
    return <h1 className="text-explain">please write the city name</h1>;
  }

  if (appState?.selctedCityInfo?.message) {
    return (
      <h1 className="text-explain">{appState?.selctedCityInfo?.message}</h1>
    );
  }

  const temprature = tempretureConversion(
    appState?.selctedCityInfo,
    appState?.unitTemp
  );

  return (
    <div className="search-box">
      <div className="location-box">
        <div className="location">
          {`${appState?.selctedCityInfo?.name}, ${appState?.selctedCityInfo?.sys?.country}`}
        </div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          <h1 className="main-Temp">{temprature?.temp}</h1>
          <small>
            Feels: {temprature?.feels_like}
            <br />
          </small>
          <br />
          <p className="wind">
            <span>
              <i className="fa-solid fa-wind"></i>
            </span>{' '}
            {appState?.selctedCityInfo?.wind?.speed}m/s
          </p>
          <br />
          <small>
            Humidity
            {appState?.selctedCityInfo?.main?.humidity}%
          </small>
        </div>

        <div className="weather">
          {appState?.selctedCityInfo?.weather[0]?.description}
        </div>
      </div>
      <div className="convert-button-container">
        <button
          className={`
                    convert-button +
                    ${
                      appState?.selctedCityInfo?.main?.temp >
                      Number(12 + 273.15)
                        ? 'button-warm'
                        : 'button-cold'
                    }
                `}
          onClick={async () => {
            immutableSetState((draft) => {
              if (appState?.unitTemp === 'C') {
                draft.unitTemp = 'F';
                return;
              }
              draft.unitTemp = 'C';
            });
          }}
        >
          Convert to {appState?.unitTemp === 'C' ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>
    </div>
  );
};
