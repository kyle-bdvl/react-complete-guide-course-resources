import { useState } from 'react';
import {memo, useMemo} from 'react';
import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import { useCallback } from 'react';
import CounterHistory from './CounterHistory.jsx';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter =  memo (function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);

  //prevent isPrime is prevented from being executed
  const initialCountIsPrime = useMemo(()=>isPrime(initialCount),[initialCount]);

  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([initialCount]);

  const currentCounter = counterChanges.reduce(
    (prevCounter,counterChange) => prevCounter + counterChange.value,0
  );

  const handleDecrement = useCallback(function handleDecrement() {
    setCounterChanges((prevCounterChanges) => [{value:-1, id:Math.random()*100}, ...prevCounterChanges]);
  },[])

  const handleIncrement = useCallback(function handleIncrement() {
    setCounterChanges((prevCounter) => [{value:1,id:Math.random()},...prevCounter]);
  },[])

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
        <CounterHistory history={counterChanges}/>
      </p>
    </section>
  );
});

export default Counter;
