import Card from '../../UI/Card';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id : 'm1',
        name: 'Shushi',
        description: 'Finnest fish and veggies',
        price: 22.99,
},
{
    id : 'm2',
        name: 'Kimbap',
        description: 'A korean speciality',
        price: 16.5,
},
{
    id : 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.35,
},
{
    id : 'm4',
        name: 'Green Bowl',
        description: 'Healthy and green',
        price: 20.65,
}
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
    return (
        <section className={classes.meals}>
            <Card>
            <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;