import { Box, Button, Stack, Typography } from '@mui/material';

import Facebook from 'assets/footer/Facebook.svg';
import Youtube from 'assets/footer/Youtube.svg';
import VSII from 'assets/footer/VSII.svg';
import Linkedln from 'assets/footer/Linked.svg';
import { FormattedMessage } from 'react-intl';

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
                <Typography>
                    <FormattedMessage id="footer" />
                </Typography>
                <Stack direction="row" gap={'30px'}>
                    <Button
                        sx={{ p: '0', m: '0' }}
                        onClick={() => window.open('https://www.youtube.com/channel/UCbzgyuU8XqBu2g-Y0TvPiag', '_blank')}
                    >
                        <img src={Youtube} alt="logo" />
                    </Button>
                    <Button
                        sx={{ p: '0', m: '0' }}
                        onClick={() => window.open('https://www.linkedin.com/company/vietsoftware-international', '_blank')}
                    >
                        <img src={Linkedln} alt="logo" />
                    </Button>
                    <Button sx={{ p: '0', m: '0' }} onClick={() => window.open('https://www.facebook.com/VSII.Fanpage', '_blank')}>
                        <img src={Facebook} alt="logo" />
                    </Button>
                    <Button sx={{ p: '0', m: '0' }} onClick={() => window.open('https://insight.vsi-international.com/', '_blank')}>
                        <img src={VSII} alt="logo" />
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default FooterPage;
