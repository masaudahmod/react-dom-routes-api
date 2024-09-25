import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { code } = useParams();

  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountryDetails(data));
  }, [code]);

  return (
    <section className="bg-stone-200 min-h-screen pt-10">
    <div className="container mx-auto p-5">
        <h3 className="text-4xl text-center font-bold mb-10 pt-10">
            Details of {countryDetails[0]?.name.common}
        </h3>
        <div className="border-2 border-indigo-400 rounded-2xl mx-auto w-full sm:w-3/4 md:w-1/2 flex flex-col items-center">
            <img
                src={countryDetails[0]?.flags?.png}
                className="h-[300px] mt-5"
                alt={countryDetails[0]?.name.official}
            />
            <p className="text-2xl font-bold my-5">
                Country official name:{" "}
                <span className="text-amber-500">
                    {countryDetails[0]?.name?.official}
                </span>
            </p>
            <p className="text-2xl font-bold my-5">
                Country Capital:{" "}
                <span className="text-amber-500">
                    {countryDetails[0]?.capital}
                </span>
            </p>
            <p className="text-2xl font-bold my-5">
                Country Time Zone:{" "}
                <span className="text-amber-500">
                    {countryDetails[0]?.timezones}
                </span>
            </p>
            <p className="text-2xl font-bold my-5">
                Country population:{" "}
                <span className="text-amber-500">
                    {countryDetails[0]?.population}
                </span>
            </p>
        </div>
    </div>
</section>

  );
};

export default CountryDetails;
