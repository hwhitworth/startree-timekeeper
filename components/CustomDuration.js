import { Box } from "@chakra-ui/layout"
import { Button, FormLabel, Input } from "@chakra-ui/react"
import { useRef } from "react"
import { useStore } from '../store/store'

export default function CustomDuration({ title }) {
    const { setTimeInterval } = useStore()
    const durationInput = useRef(null);
    const setCustomDuration = function () {
        let timeInterval =
        {
            duration: Number(durationInput.current.value),
            endTime: Date.now(),
            startTime: Date.now() - durationInput.current.value,
            fromInput: true
        }

        setTimeInterval(timeInterval)
    }
    return (
        <Box width="50%">
            <FormLabel>Insert a custom duration, in milliseconds.</FormLabel>
            <Input ref={durationInput} placeholder="5000" />
            <Button onClick={setCustomDuration}>Test</Button>
        </Box>
    )
}
