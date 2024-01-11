import Image from "next/image"
import styles from "./singlePost.module.css"
import postUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async(slug) => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"}); // always fetching data while directing to blog page
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}); // use for fetching blog data in every one hour
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); // use for fetching blog data in every one hour

  if(!res.ok){
    throw new Error("Something went wrong");
  }

  return res.json();
};


const SinglePostPage = async({params}) => {
  const {slug} = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg" alt="" 
          height={50} width={50} />



          {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Robert Downey</span>
          </div> */}

          <Suspense fallback={<div>Loading...</div>}>
            <postUser userId = {post.userId}/>
          </Suspense>


          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage