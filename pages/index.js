import { useEffect } from 'react'
import Header from '../components/Header';
import { useStore } from '../store/store'

export default function Home() {
    const { timeInterval } = useStore()
    let endTime = new Date(timeInterval.endTime),
        duration = new Date(timeInterval.duration),
        startTime = new Date(endTime - duration);

  return (
    <Header title="Screen A" />
  )
}
