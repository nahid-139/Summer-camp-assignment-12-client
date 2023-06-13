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
  'https://img.freepik.com/premium-vector/english-word-education-banner_66675-157.jpg',
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

  const springs = useSpring({
    from: {
      strokeDashoffset: 120,
    },
    to: {
      strokeDashoffset: 0,
    },
    config: {
      duration: 11000,
    },
    loop: true,
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
    </div>
  )
}
