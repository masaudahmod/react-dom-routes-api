import { useEffect, useState } from "react";
// import UserInfo from "../components/UserInfo";

const FreeTestApi = () => {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/users")
    .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        setAllUser(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, []);


  return (
    <section className="text-black pt-5">
      <h2 className="text-center text-emerald-800 text-2xl font-semibold">
        Free Test Api
      </h2>
      <div className="container mx-auto text-white mt-10 h-screen">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-between">
          {allUser.map((user) => (
            <div key={user.id} className={`border-2 text-black mb-6 p-4 w-[31%] rounded-xl ${user.age <= 25 ? "border-red-600" : "border-emerald-600"} ${user.age <= 25 ? "bg-red-200" : "bg-emerald-200"}`}>
              <h2 className="text-lg capitalize"> user name: {user.name} </h2>
              <h2 className="text-lg capitalize"> user email: {user.email} </h2>
              <h2 className="text-lg capitalize text-orange-700"> user address: {user.address?.street}, {user.address?.city}, {user.address?.zip}</h2>
              <h2 className="text-lg capitalize"> user telephone: {user.phone} </h2>
              <h2 className="text-lg capitalize"> user age: {user.age} </h2>
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  );
};

export default FreeTestApi;
