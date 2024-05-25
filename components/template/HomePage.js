import styles from "./HomePage.module.css";
import Search from "../util/Search";

function HomePage() {
  return (
    <>
      <div className={styles.banner}>
       <Search/>
      </div>
    </>
  );
}

export default HomePage;
