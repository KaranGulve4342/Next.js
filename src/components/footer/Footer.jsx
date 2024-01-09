import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>KaranDev</div>
      <div className={styles.text}>
        Karan's creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;