import Places from './Places.jsx';
import {useState, useEffect} from 'react';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(()=>{
    setIsFetching(true);
    async function fetchPlaces(){
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }
    
      // .then((response)=>{
      //   return response.json();
      // })
      // .then((resData)=>{
      //   setAvailablePlaces(resData.places);
      // });

      fetchPlaces();
  },[]);

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
