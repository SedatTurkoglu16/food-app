import React from 'react';

import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Adana Kebab',
      description: 'Made from lamb meat in Adana',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Kunefe',
      description: 'A Turkish wonder!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map(meal => (
        <MealItem
            id={meal.id} 
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />));

  return (
  <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
  </section>
  )
}

export default AvailableMeals;
