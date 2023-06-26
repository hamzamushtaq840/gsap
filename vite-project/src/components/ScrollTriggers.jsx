import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggers = () => {
  useEffect(() => {
    //* triggers when square1 comes in place
    // gsap.to('.square', { duration: 3, x: 300, scrollTrigger: '.square' })
    //* triggers when square2 comes in place
    gsap.to('.square', { duration: 3, x: 300, scrollTrigger: '.square2' })

  }, [])

  return (
    <div>
      <div className='h-[100vh] bg-blue-300'>
      </div>
      <div className='h-[100vh] bg-pink-300'>
        <div className='square w-[150px] h-[150px] bg-orange-400'></div>
        <div className='square2 w-[150px] h-[150px] mt-96 bg-red-400'></div>
      </div>
    </div>
  )
}

export default ScrollTriggers