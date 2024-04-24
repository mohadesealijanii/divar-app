import { sp } from 'src/utils/numbers'
import styles from './Main.module.css'

function Main({ posts }) {
  const baseURL = import.meta.env.VITE_BASEURL
  return (
    <div className={styles.container}>
      {posts.data.posts.map((post) => (
        <data key={post._id} className={styles.card}>
          <div className={styles.info}>
            <p>{post.options.title}</p>
            <div>
              <p>{sp(post.amount)}تومان</p>
              <span>{post.options.city}</span>
            </div>
          </div>
      {console.log(post.images[0])}
          <img src={`${baseURL}${post.images[0]}`} />
        </data>
      ))}
    </div>
  )
}

export default Main