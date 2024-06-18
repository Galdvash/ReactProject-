import { useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./userContextApp";

const useGetUser = () => {
  const { userInformation, setUserInformation } = useContext(UserContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || !userInformation) return;

      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${userInformation._id}`,
        headers: {
          "x-auth-token": token,
        },
      };

      try {
        const response = await axios(config);
        setUserInformation(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [userInformation, token, setUserInformation]);

  return; // אין צורך להחזיר ערך מתוך ה-hook
};

export default useGetUser;
