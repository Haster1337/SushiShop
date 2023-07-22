import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mean Spicy Tuna",
    description:
      "avocado, mizuna and spicy mayo rolled in chilli furikake",
    price: 7.25,
  },
  {
    id: "m2",
    name: "California",
    description: "fresh crab meat, cucumber and avocado with mayo",
    price: 7.99,
  },
  {
    id: "m3",
    name: "Green Goddess",
    description: "wakame seaweed, cucumber, avocado, mizuna and chives rolled in aonori furikake",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'King Prawn Tempura',
    description:
      "avocado and mayo",
    price: 7.99,
  },
];

const MealList = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        name={meal.name}
        key={meal.id}
        description={meal.description}
        price={meal.price}
        id={meal.id}
      />
    );
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
