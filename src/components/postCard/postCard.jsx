import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const postCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                {/* <Image src="/post.png" alt="" fill className={styles.img} /> */}
                <Image src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=900" alt="" fill className={styles.img} />
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            <Link className={styles.link} href="/blog/post">READ MORE</Link>
        </div>
    </div>
  )
}

export default postCard