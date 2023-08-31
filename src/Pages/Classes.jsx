import styles from "../style";
import { Footer, Navbar, Hero, HelpButton, Filter } from "../components";

const Classes = () => (
  <div className="bg-base w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.paddingX} ${styles.boxWidth} shadow`}>
        <Navbar/>
      </div>
    </div>

    <div className={`${styles.paddingX} pt-6 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.boxWidth}`}>
      <hr className="border-gray-300" />
    </div>

    <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Filter />
      </div>
    </div>

    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <HelpButton />
      </div>
    </div>
    
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Classes;