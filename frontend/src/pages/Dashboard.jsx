import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"


export const Dashboard = () => {
    const[ balance,setBalance]=useState("");
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get(
                "http://localhost:3000/api/v1/account/balance",
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
      
              // Assuming the balance is part of the response data, update the state
              setBalance(response.data.balance);
      
             // console.log(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          // Invoke the async function
          fetchData();
        


    },[balance]);
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}