import React from 'react'
import create from 'zustand'
import HeroSlider from '../components/HeroSlider'
import TopFeature from '../components/TopFeature'

export default function Home() {
  const counter = useMainStore((state: any) => state.counter)
  const incrementCounter = useMainStore((state: any) => state.increasePopulation)
  return (
    <div>
      <HeroSlider />
      <TopFeature />
      {/* <div className={styles.card}>
        <a>
          <h5 className={styles.cardTitle}>Server is UP</h5>
        </a>
        <p className={styles.cardSubtitle}>Nextjs + Tailwind CSS + Zustand</p>
        <a className={styles.cardAction} onClick={incrementCounter}>
          Increment Store {counter}
          <svg aria-hidden="true" className={styles.cardSvg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
      </div> */}
    </div>
  )
}

/** All Styling */
const styles = {
  main: "flex justify-center",
  card: "p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",
  cardTitle: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
  cardSubtitle: "mb-3 font-normal text-gray-700 dark:text-gray-400",
  cardAction: "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  cardSvg: "ml-2 -mr-1 w-4 h-4"
}

/** zustand store */
const useMainStore = create((set) => ({
  counter: 0,
  increasePopulation: () => set((state: any) => ({ counter: state.counter + 1 })),
}))