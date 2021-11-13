import {useState, useEffect} from "react";

//components
import Header from "./Header";
import Grid from "./Grid";

import { accessToken } from '../config';
import { getUser, getPlaylists } from "../APIs"

const Home = () => {
  const [access, setAccess] = useState(null);
  const [user, setUser] = useState(null)
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUser();
      setUser(userData.data)
      console.log(userData.data)

      const userPlaylists = await getPlaylists();
      setPlaylists(userPlaylists.data.items)
      console.log(userPlaylists.data)
    }   
    getUserData();
   
    },[])


  return (
    <>
      <Header /> 
        <Grid playlists = {playlists}/>
    </>
  );
};

export default Home;
