import React from 'react'
import { useEffect, useState } from 'react';
function RegTImer () {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    // Set the countdown date directly in the code
    const countToDate = new Date(2024, 9, 8).getTime(); // November 10, 2024
    const updateTimer = () => {
      const currentDate = new Date()
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)

      if (timeBetweenDates <= 0) {
        clearInterval(intervalId)
        return
      }

      const seconds = timeBetweenDates % 60
      const minutes = Math.floor(timeBetweenDates / 60) % 60
      const hours = Math.floor((timeBetweenDates / 3600) % 24)
      const days = Math.floor(timeBetweenDates / 86400)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    const intervalId = setInterval(updateTimer, 1000)
    updateTimer() // Initial call to set the time

    return () => clearInterval(intervalId)
  }, [])

  const flipAllCards = timeUnit => {
    const tens = Math.floor(timeUnit / 10)
    const ones = timeUnit % 10

    return (
      <>
        <FlipCard digit={tens} />
        <FlipCard digit={ones} />
      </>
    )
  }
  return (
    <div className='text-white flex w-full justify-center space-x-10'>
      <div className='flex w-fit space-x-10'>
        <Segment title='Days' digits={flipAllCards(timeLeft.days || 0)} />
        <Segment title='Hours' digits={flipAllCards(timeLeft.hours || 0)} />
      </div>
      <div className='flex w-fit space-x-10'>
        <Segment title='Mins' digits={flipAllCards(timeLeft.minutes || 0)} />
        <Segment title='Secs' digits={flipAllCards(timeLeft.seconds || 0)} />
      </div>
    </div>
  )
}

const Segment = ({ title, digits }) => (
  <div className=''>
    <div className=''>{title}</div>
    <div className='flex'>{digits}</div>
  </div>
)

const FlipCard = ({ digit }) => {
  const [currentDigit, setCurrentDigit] = useState(digit)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (digit !== currentDigit) {
      setIsFlipping(true)

      const flipTimeout = setTimeout(() => {
        setCurrentDigit(digit)
        setIsFlipping(false)
      }, 950) // Slightly less than 1000ms to sync with animation

      return () => clearTimeout(flipTimeout)
    }
  }, [digit, currentDigit])

  return (
    <div
      className={` ${
        isFlipping ? '' : ''
      },`}
    >
      <div className=''>{currentDigit}</div>
    </div>
  )
}
export default RegTImer
