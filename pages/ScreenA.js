import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import CustomDuration from '../components/CustomDuration';
import Timekeeper from '../components/Timekeeper';

export default function ScreenA() {
    return (
        <Box p={4}>
            <Header title="Screen A" />
            <CustomDuration />
            <Timekeeper />
        </Box>
    )
}
