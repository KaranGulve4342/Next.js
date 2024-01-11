import { getUser } from "@/lib/data";
import styles from "./postUser.module.css"


// const getData = async(userId) => {
//     // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"}); // always fetching data while directing to blog page
//     // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}); // use for fetching blog data in every one hour
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"}); // use for fetching blog data in every one hour
  
//     if(!res.ok){
//       throw new Error("Something went wrong");
//     }
  
//     return res.json();
// };


const postUser = async({userId}) => {

    // FETCH DATA WITH AN API
    // const user = await getData(userId);

    // FETCH DATA WITHOUT AN API
    const user = await getUser(userId);

  return (
    <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
    </div>
  )
}

export default postUser;
