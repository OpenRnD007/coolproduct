import { useEffect, useRef } from "react"

const HeroSlider = () => {
    const slide1 = useRef<HTMLDivElement>(null)
    const slide2 = useRef<HTMLDivElement>(null)
    const slide3 = useRef<HTMLDivElement>(null)

    const changeSlide = (prevNext: boolean) => {

        const s1 = slide1.current.classList;
        const s2 = slide2.current.classList;
        const s3 = slide3.current.classList;
        if (s1.contains("active")) {
            s1.remove("active")
            s1.add("hidden")
            if (prevNext) {
                s2.remove("hidden")
                s2.add("active")
            } else {
                s3.remove("hidden")
                s3.add("active")
            }
        }
        else if (s2.contains("active")) {
            s2.remove("active")
            s2.add("hidden")
            if (prevNext) {
                s3.remove("hidden")
                s3.add("active")
            } else {
                s1.remove("hidden")
                s1.add("active")
            }
        }
        else if (s3.contains("active")) {
            s3.remove("active")
            s3.add("hidden")
            if (prevNext) {
                s1.remove("hidden")
                s1.add("active")
            } else {
                s2.remove("hidden")
                s2.add("active")
            }
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            changeSlide(true)
        }, 7 * 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="relative mx-4 mt-2">

            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 cursor-pointer">

                <div ref={slide1} className="active duration-200 hover:animate-pulse">
                    <img src="/assets/images/s1.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

                <div ref={slide2} className="hidden duration-200 ease-linear hover:animate-pulse">
                    <img src="/assets/images/s2.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

                <div ref={slide3} className="hidden duration-200 ease-linear hover:animate-pulse">
                    <img src="/assets/images/s3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>

            <button onClick={() => changeSlide(true)} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={() => changeSlide(false)} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default HeroSlider