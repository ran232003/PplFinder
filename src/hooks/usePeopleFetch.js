import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    //2 solutions: 1. localStorage 2. DB. 
    response.data.results.map((user)=>{
      const checkingIcon = localStorage.getItem(user.email);
      if(checkingIcon){
        user.favorite = true;
      }
      else{
        user.favorite = false;
      }
      
    })
    
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};
