import { useEffect, useState } from "react";


const UserInfo = () => {

    const [allUser, setAllUser] = useState([])

    useEffect(()=>{

        fetch('https://freetestapi.com/api/v1/users')
        .then(res => res.json())
        .then(res => setAllUser(res))

    },[])


    return (
        <div className="border-2 border-emerald-600 p-4 w-[31%] rounded-xl h-[300px]">

        {
            allUser.map((user, u)=>{
                return(
                    <div key={u}>
                        <h2 className="text-lg capitalize"> user name: {user.name} </h2>

                    </div>
                    )
                })
            }
            </div>
    );
};

export default UserInfo;