/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
export default function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your First city buy clicking on a city on the map" />
    );
  // Initialize an object to group countries and emojis
  const countriesMap = {};

  // Fill the countriesMap object with country as key and emoji as value
  cities.forEach((city) => {
    if (!countriesMap[city.country]) {
      countriesMap[city.country] = {
        country: city.country,
        emoji: city.emoji,
      };
    }
  });
  console.log(countriesMap);
  // Create an array of country objects
  const countries = Object.values(countriesMap);
  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
