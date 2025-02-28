import Places from './Places.jsx';
import {useState, useEffect} from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import {fetchAvailablePlaces} from '../http.js'
const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error,setError] = useState();

  useEffect(()=>{
    setIsFetching(true);
    async function fetchPlaces(){

      try{
        const places = await fetchAvailablePlaces()
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(
            places, 
            position.coords.latitude, 
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch(error){
        setError({message: error.message || 'Could not fetch places, please try again later.'});
        setIsFetching(false);
      }
      // JS won't wait for navigator to return the position
    }

    fetchPlaces();
  }, []);

  if(error){
    return(
      <Error title="Error has occured :( :(" message={error.message}/>
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
