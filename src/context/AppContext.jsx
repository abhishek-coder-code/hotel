import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { hotelDatas,roomsDatas } from "../assets";

export const AppContext = createContext();





const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);


    //  fetch hotelDatas and roomdata from assests 

    const [hotelData, setHotelData] = useState([]);
    const [roomData, setRoomData] = useState([]);

    const fetchHotelData = () => {
        setHotelData(hotelDatas);

    };

     const fetchRoomData = () => {
        setRoomData(roomsDatas);

    }
    useEffect(() => {
        fetchHotelData();
        fetchRoomData();
    }, []);

    const value = { navigate, user, setUser, hotelData, roomData  }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

};


export default AppContextProvider;

