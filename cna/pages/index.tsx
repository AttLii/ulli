import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Ulli } from "../../"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Ulli
          list={[1,2,3,4,5,6]}
          itemFunc={(item) => <div>{item}</div>}
        />
      </main>
    </div>
  )
}

export default Home
