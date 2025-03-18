import MealItem from './MealItem';
import { useEffect, useState} from 'react'

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  //sending a get request
  //this fetch returns a promise
  //update the state will execute infinitely if we don't add the useEffect. 
  //we are mounting this state of this useEffect
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        console.log('')
      }
      const meals = await response.json();
      //update the loaded meals state that we get from the backedn 
      setLoadedMeals(meals);
    };
    fetchMeals();
  },[])

  return (
    <ul id="meals">
      {loadedMeals.map(meal => 
        //outputing the data from the key. the dummy Meal at the backedn has an ID 
        <MealItem key={meal.id} meal={meal}/>
      )}
    </ul>
  );
}