import { title } from "motion/react-client";
import Hero from "../components/Hero";
import { PiUserList } from "react-icons/pi";
import { BsFillCameraFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import MostpickedHotel from "../components/MostpickedHotel";
import PopularRooms from "../components/PopularRooms";
import BeforeFooter from "../components/BeforeFooter";

 export const homePAgeData = [
  {
    icon : <PiUserList />,
    title : 'User',
    value: '2500'
  },

   {
    icon : <BsFillCameraFill/>,
    title : 'treasures',
    value: 400
  },

   {
    icon : <SlLocationPin />,
    title : 'Cities',
    value: '200'
  },


]

const Home = () => {
  return (
    <div>
      <Hero/>
      <MostpickedHotel/>
      <PopularRooms/>
      <BeforeFooter />
    </div>
  );
};

export default Home;
