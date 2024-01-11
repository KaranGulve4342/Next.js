import PostCard from "@/components/postCard/postCard"
import styles from "./blog.module.css"

const getData = async() => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"}); // always fetching data while directing to blog page
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}); // use for fetching blog data in every one hour

  if(!res.ok){
    throw new Error("Something went wrong");
  }

  return res.json();
};

const blogPage =async() => {

  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
      


      {/* <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div> */}
    </div>
  )
}

export default blogPage