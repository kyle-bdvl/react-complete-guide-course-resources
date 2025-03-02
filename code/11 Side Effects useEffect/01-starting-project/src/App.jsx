import { useRef, useState , useEffect, useCallback } from 'react';
import { sortPlacesByDistance } from './loc.js';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';



const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id)=>
  AVAILABLE_PLACES.find((place)=>place.id === id)
);

function App() {
  const [modalIsOpen, setIsOpen] =useState(false);
  const [availablePlaces, setAvailablePLaces] = useState([]);
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);



  //runs after every component that has been executed in app.jsx
  useEffect(()=>{
     //provided by the browser, position object that is auto passed to the functions
    navigator.geolocation.getCurrentPosition((position)=>{
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES,position.coords.latitude, position.coords.longitude);
   
      setAvailablePLaces(sortedPlaces);
     });
  }, []);



  function handleStartRemovePlace(id) {
    setIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsOpen(false);
  }

  
  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    //[] means fallback code if the JSON yields undefined
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];

    if(storedIds.indexOf(id) === -1){
    //changes this into a string and into stores it in an array
    localStorage.setItem('selectedPlaces',JSON.stringify([id, ...storedIds]));
    }
  }
  //creates a constant. It stores it interally in its memory.
  const handleRemovePlace= useCallback(
  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem(
      'selectedPlaces', 
      JSON.stringify(storedIds.filter((id)=> id !== selectedPlace.current))
    );
  },[]);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting place by distance..."
          onSelectPlace={handleSelectPlace}

        />
      </main>
    </>
  );
}

export default App;
