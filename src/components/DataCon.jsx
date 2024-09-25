import { MyContext } from "../MyContext";

const DataCon = () => {
  return (
    <MyContext.Consumer>
      {({user}) => (
        <div className="my-5 inline-block w-full sm:w-auto px-3 py-5 rounded-lg border-2 border-yellow-300">
        <h3 className="text-lg font-semibold">User Name: {user.name}</h3>
        <h3 className="text-lg font-semibold">User Age: {user.age}</h3>
        <button className="btn block my-3 w-full sm:w-auto">
            {user.loggedIn ? 'Log Out' : 'Log In'}
        </button>
    </div>
      )}
    </MyContext.Consumer>
  );
};

export default DataCon;
