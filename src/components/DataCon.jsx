import { MyContext } from "../MyContext";

const DataCon = () => {
  return (
    <MyContext.Consumer>
      {({user}) => (
        <div className="my-5 inline-block px-3 py-5 rounded-lg border-2 border-yellow-300">
          <h3> User Name: {user.name} </h3>
          <h3> User age: {user.age} </h3>
          {
            user.loggedIn?
            <button className="btn block my-3">log out</button>
            :
            <button className="btn block my-3">log in</button>
          }

        </div>
      )}
    </MyContext.Consumer>
  );
};

export default DataCon;
