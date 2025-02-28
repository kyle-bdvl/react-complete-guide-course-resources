export async function fetchAvailablePlaces(){
    const response = await fetch('http://localhost:3000/places');
          const resData = await response.json();
  
        if(!response.ok){
          const error = new Error('Failed to fetch places');
          throw error;
        } //200, 300 status code if false then 400-500 code

        return resData.places;
}

export async function fetchUserPlaces(){
  const response = await fetch('http://localhost:3000/user-places');
        const resData = await response.json();

      if(!response.ok){
        const error = new Error('Failed to fetch user places');
        throw error;
      } //200, 300 status code if false then 400-500 code

      return resData.places;
}
//async yields a promise

export async function updateUserPlaces(places){
  const response = await fetch('http://localhost:3000/user-places', {
    method:'PUT',
    body: JSON.stringify({places}),
    headers:{
      'Content-type':'application/json'
    }
  });
  const resData = await response.json();

  if (!response.ok){
    throw new Error('FAiled to update user data.');
  }

  return resData.message;
}