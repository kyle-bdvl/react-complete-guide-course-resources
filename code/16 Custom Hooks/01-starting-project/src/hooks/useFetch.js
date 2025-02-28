import {useEffect, useState} from 'react';

export function useFetch(fetchFn, inititalValue){
  //every component needs a state that is manged by that hook. Don't want it to manage the state on its own
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFecthedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFecthedData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data' });
      }

      setIsFetching(false);
    }

    fetchData(); // defining the function and executes the function
  }, [fetchFn]);
  
  return {
    isFetching,
    fetchedData,
    setFecthedData,
    error
  }


}//this is a hook function