"use client";
import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  console.log('ingredient', ingredient);
   
    const [meals, setMeals] = useState([]);
  
    // Function to fetch meal ideas
    const fetchMealIdeas = async (ingredient) => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('No meal ideas found for :', error);
      }
    };
  
    // Function to load meal ideas
    const loadMealIdeas = () => {
      fetchMealIdeas(ingredient);
    };
  
    // Load meal ideas when the ingredient changes
    useEffect(() => {
      loadMealIdeas();
    }, [ingredient]);
  
    return (
      <div>
        <h2>Here are some meal ideas using {ingredient}</h2>
        {meals ? (<ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal}
            </li>
          ))}
        </ul>) : <p>No meal ideas found</p> }
      </div>
    );
};

export default MealIdeas;