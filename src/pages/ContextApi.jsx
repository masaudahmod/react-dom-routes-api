import { useState } from "react";
import DataCon from "../components/DataCon";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";

const ContextApi = () => {

  const [user, setUser] = useState({
    name: "its You",
    age: 23,
    loggedIn: true,
  });

  return (
    <section className="text-slate-800 relative pt-10 w-screen">
        <Link to={'/user-api-test'} className="btn btn-outline btn-warning absolute right-4 top-4 md:right-5 md:top-5">clicked here</Link>
      <div className="container mx-auto">
        <h2 className="text-4xl text-center capitalize font-bold text-green-600">
          context api
        </h2>

        <MyContext.Provider value={{ user, setUser }}>
          <DataCon />
        </MyContext.Provider>
      </div>
    </section>
  );
};

export default ContextApi;
