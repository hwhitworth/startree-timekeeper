import { useEffect } from 'react'
import { useStore } from '../store/store'
import { useRouter } from 'next/router'
import { Box, Text } from '@chakra-ui/react';

export default function Timekeeper() {
    const router = useRouter();
    const { timeInterval, setTimeInterval } = useStore()
    let duration = 10000,
        endTime = Date.now(),
        startTime = endTime - duration;

    if(router.query.duration && !timeInterval.fromInput) { 
        duration = router.query.duration;
        startTime = endTime - duration;
    } else if(timeInterval.fromInput){ 
        duration = timeInterval.duration;
        startTime = endTime - duration;
    }

    if (router.query.duration && router.query.duration != timeInterval.duration && !timeInterval.fromInput) {
        let newTimeInterval = {
            startTime: startTime,
            endTime: endTime,
            duration: duration
        }
        setTimeInterval(newTimeInterval)
    }
    

    useEffect(() => {
        router.push({
            pathname: router.pathname,
            query: { duration: duration, startTime: startTime, endTime: endTime },
        })
    }, [timeInterval])

    return (
        <Box py={4}>
            <Text fontWeight="bold">Start Time: {new Date(startTime).toString()}</Text>
            <Text fontWeight="bold">End Time: {new Date(endTime).toString()}</Text>
            <Text fontWeight="bold">Duration {timeInterval.duration != 10000 ? '(Custom)' : '(Default)'}: {duration} milliseconds</Text>
        </Box>
    )
}
