import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online sushi shop</h2>
      <p>
        Lovingly handmade sushi (and more). Have your lunch or dinner delivered
        fresh to your home or office. Choose us for mouth-watering sushi,
        flavoursome chicken and delectable gyoza: perfect as a treat or if
        you’re rushed off your feet.
      </p>
      <p>Your favourite sushi. Delivered free.</p>
    </section>
  );
};

export default PromoText;
