import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setpizzaOfTheDay] = useState(null);
   useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id}` : "loading")
  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setpizzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, []);
 
  return pizzaOfTheDay;
};
