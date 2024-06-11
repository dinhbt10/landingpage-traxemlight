import { Box, Button, Stack, Typography } from '@mui/material';

// ==============================|| LANDING - FOOTER PAGE ||============================== //
import Footer1 from 'assets/images/landing/Home/IconFoter1.svg';
import Footer2 from 'assets/images/landing/Home/IconFooter2.svg';
import Footer3 from 'assets/images/landing/Home/IconFooter3.svg';
import Footer4 from 'assets/images/landing/Home/IconFooter4.svg';
import LogoText2 from './LogoText2';

const FooterPage = () => {
    return (
        <Box sx={{ maxWidth: '1440px', margin: 'auto' }}>
            <Stack
                px="30px"
                my="10px"
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    }
                }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Stack direction="row">
                    <Button
                        sx={{ p: '0', m: '0' }}
                        onClick={() => window.open('https://www.youtube.com/channel/UCbzgyuU8XqBu2g-Y0TvPiag', '_blank')}
                    >
                        <img src={Footer1} alt="logo" />
                    </Button>
                    <Button
                        sx={{ p: '0', m: '0' }}
                        onClick={() => window.open('https://www.linkedin.com/company/vietsoftware-international', '_blank')}
                    >
                        <img src={Footer2} alt="logo" />
                    </Button>
                    <Button sx={{ p: '0', m: '0' }} onClick={() => window.open('https://www.facebook.com/VSII.Fanpage', '_blank')}>
                        <img src={Footer3} alt="logo" />
                    </Button>
                    <Button
                        sx={{ p: '0', m: '0' }}
                        onClick={() => window.open('https://www.tiktok.com/@vsii_official?_t=8iKWCgvXweY&_r=1', '_blank')}
                    >
                        <img src={Footer4} alt="logo" />
                    </Button>
                </Stack>
                <LogoText2 />
                <Typography>Copyright © 2023 emTeller.AI - All rights reserved.</Typography>
            </Stack>
        </Box>
    );
};

export default FooterPage;
