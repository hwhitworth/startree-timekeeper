import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import CustomDuration from '../components/CustomDuration';
import Timekeeper from '../components/Timekeeper';

export default function ScreenC() {
    return (
        <Box p={4}>
            <Header title="Screen C" />
            <CustomDuration />
            <Timekeeper />
        </Box>
    )
}
