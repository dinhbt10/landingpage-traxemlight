// project imports
import { Box } from '@mui/material';
import Form from './Form';
import HightLight from './HightLight';
import Introduc from './Introduc';
import Summary from './Summary';
import SumIntro from './SumIntro';
import Teller from './Teller';
import Benefit from './Benefit';
import Feature from './Feature';
import Procedure from './Procedure';
import Price from './Price';
import Ecosystem from './Ecosystem';
// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <>
        {/* <Summary /> */}
        <SumIntro />
        <Box sx={{ maxWidth: '1440px', margin: 'auto' }}>
            {/* <Feature /> */}
            <Benefit />
            <Feature />
            {/* <HightLight /> */}
            <Procedure />
            {/* <Introduc /> */}
            <Price />
            <Ecosystem />
            <Teller />
            <Form />
        </Box>
    </>
);

export default Landing;
