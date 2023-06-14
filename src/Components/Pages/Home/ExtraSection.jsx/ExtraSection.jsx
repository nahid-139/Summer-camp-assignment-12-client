import React, { useLayoutEffect, useState } from 'react'
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from '@react-spring/web'

import styles from './styles.module.css'

const IMAGES = [
  'https://hr.un.org/sites/hr.un.org/files/Online%20Language%20Learning%20Banner.png',
  'https://www.unive.it/pag/fileadmin/user_upload/scuole/CFSIE/848X174_banner_2021_ENG.jpg',
  
  "https://alpha-japanese.com/wp-content/uploads/2021/01/alpha-banner-1.jpg",
]

export default function ExtraSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const springApi = useSpringRef()

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    },
    leave: {
      clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1)
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 4000,
    },
    delay: 1000,
    ref: springApi,
  })


  useLayoutEffect(() => {
    springApi.start()
  }, [activeIndex])

  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        {transitions((springs, item) => (
          <animated.div className={styles.img__container} style={springs}>
            <img src={IMAGES[item]} />
          </animated.div>
        ))}
       
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 -mt-80">
      <div className="max-w-lg sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="Go Home"
          title="Logo"
          className="inline-block mb-4"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                width="52"
                height="24"
              />
            </svg>
            
          </span>
          Learning a Foreign Language CLasses
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Discover free online language courses at Alison. Learn a new language online, or refresh your memory on one you know, across a wide range of languages.
        </p>
        <hr className="my-8 border-gray-300" />
        <div className="flex items-center mb-3 sm:justify-center">
          <a href="/" className="mr-3 transition duration-300 hover:shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
          <a href="/" className="transition duration-300 hover:shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
        </div>
        <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
          Happy Learning Happy Journey. <br /> Join Us Today..!!
        </p>
      </div>
    </div>
    </div>
  )
}
