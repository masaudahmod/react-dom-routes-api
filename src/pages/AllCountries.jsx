import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((red) => red.json())
      .then((red) => setCountries(red));
  }, []);

  return (
    <section className="bg-stone-200 min-h-screen">
    <div className="container mx-auto">
        <h2 className="text-center text-4xl text-amber-700 font-bold">
            All Countries Page
        </h2>

        <h4 className="text-center text-2xl font-bold uppercase mt-5">
            Country: {countries.length}
        </h4>

        <div className="flex flex-wrap justify-between items-center">
            {
                countries.map((country, c) => (
                    <div key={c} className="bg-teal-300 w-full sm:w-[48%] md:w-[31%] mb-4 rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{country.name.common}</h2>
                        <h3 className="text-lg my-2">{country.capital}</h3>
                        <img src={country.flags.png} alt={country?.name?.official} className="w-full h-[200px] rounded-md object-cover" />
                        <Link to={`/details/${country.cca2}`} className="w-full block text-center bg-stone-800 text-white text-xl mt-5 rounded-lg py-3 cursor-pointer">
                            More Details <span className="bg-slate-400 px-2 py-1 rounded-xl">{country.cca2}</span>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
</section>

  );
};

export default AllCountries;
