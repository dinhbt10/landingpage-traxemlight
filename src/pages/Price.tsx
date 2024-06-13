import { Box, Button, Container, Grid, Typography } from '@mui/material';

import iconPrice from 'assets/price/IconPrice.svg';
import { FormattedMessage } from 'react-intl';
const typographyStyle = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: 'black',
    width: '100%',
    px: '10%',
    border: '0.2px solid #f1f1f1',
    borderRadius: '10px',
    padding: '16px',
    transition: 'background-color 0.3s ease, color 0.3s ease',

    fontSize: {
        xs: '16px',
        sm: '16px',
        lg: '18px'
    }
};
const typographyStyle2 = {
    padding: '16px',
    backgroundColor: '#00A64F',
    color: 'white',
    '& img': {
        filter: 'brightness(0) invert(1)'
    },
    '& *': {
        color: 'white'
    },
    fontSize: {
        xs: '16px',
        sm: '16px',
        lg: '18px'
    }
};
function Price() {
    return (
        <>
            <section id="price" className="home__summary">
                <Container>
                    <Grid mt="80px">
                        <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: 'black' }}>
                            <FormattedMessage id="price_h1" />
                        </h1>
                        <br />
                        <Box display="flex" flexWrap="wrap">
                            <Grid container item xs={12} sm={12} md={12} spacing={2}>
                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography
                                        fontStyle="Montserrat"
                                        fontWeight="500"
                                        color="black"
                                        width="10%"
                                        px="10%"
                                        style={{ border: '0.2px solid #f1f1f1', borderRadius: '30px' }}
                                        sx={typographyStyle}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={iconPrice}
                                                alt="bg"
                                                width="80px"
                                                height="80px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                        </Box>
                                        <br />
                                        <Box>
                                            <Typography fontWeight="600" fontSize="32px" textAlign="center" color="#00A64F">
                                                <FormattedMessage id="25" />
                                            </Typography>
                                            <Typography fontWeight="500" fontSize="18px" lineHeight="29.26px" textAlign="center">
                                                <FormattedMessage id="c_starter" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="time" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="1m" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="time2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="30d" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sumScan" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sumQR" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="500QR" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="buy" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="50d" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="storage" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="2gb" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="buy2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="price_b1" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="max_user" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="10" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sale" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="bonus1" />
                                            </Typography>
                                            <br />
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    sx={{
                                                        borderRadius: '10px',
                                                        color: 'white',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' }
                                                    }}
                                                >
                                                    <FormattedMessage id="btnBuy" />
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography
                                        fontStyle="Montserrat"
                                        fontWeight="500"
                                        color="black"
                                        width="100%"
                                        px="10%"
                                        style={{ border: '0.2px solid #f1f1f1', borderRadius: '30px' }}
                                        sx={typographyStyle}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={iconPrice}
                                                alt="bg"
                                                width="80px"
                                                height="80px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                        </Box>
                                        <br />
                                        <Box>
                                            <Typography fontWeight="600" fontSize="32px" textAlign="center" color="#00A64F">
                                                <FormattedMessage id="300" />
                                            </Typography>
                                            <Typography fontWeight="500" fontSize="18px" lineHeight="29.26px" textAlign="center">
                                                <FormattedMessage id="c_basic" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="time" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="1y" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="time2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="90d" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sumScan" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sumQR" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="6000QR" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="buy" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="50d" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="storage" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="5gb" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="buy2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="price_b1" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="max_user" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="100" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sale" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="bonus2" />
                                            </Typography>
                                            <br />
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    sx={{
                                                        borderRadius: '10px',
                                                        color: 'white',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' }
                                                    }}
                                                >
                                                    <FormattedMessage id="btnBuy" />
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography
                                        fontStyle="Montserrat"
                                        fontWeight="500"
                                        color="black"
                                        width="100%"
                                        px="10%"
                                        style={{ border: '0.2px solid #f1f1f1', borderRadius: '30px ' }}
                                        sx={typographyStyle2}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={iconPrice}
                                                alt="bg"
                                                width="80px"
                                                height="80px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                        </Box>
                                        <br />
                                        <Box>
                                            <Typography fontWeight="600" fontSize="32px" textAlign="center" color="#00A64F">
                                                <FormattedMessage id="900" />
                                            </Typography>
                                            <Typography fontWeight="500" fontSize="18px" lineHeight="29.26px" textAlign="center">
                                                <FormattedMessage id="c_advanced" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="time" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="1y" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="time2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="90d" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sumScan" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sumQR" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="20000QR" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="buy" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="50d" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="storage" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="20gb" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="buy2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="price_b1" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="max_user" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="500" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sale" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="bonus3" />
                                            </Typography>
                                            <br />
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    sx={{
                                                        borderRadius: '10px',
                                                        color: 'white',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        border: ' 1px solid white'
                                                    }}
                                                >
                                                    <FormattedMessage id="btnBuy" />
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography
                                        fontStyle="Montserrat"
                                        fontWeight="500"
                                        color="black"
                                        width="100%"
                                        px="10%"
                                        style={{ border: '0.2px solid #f1f1f1', borderRadius: '30px' }}
                                        sx={typographyStyle}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={iconPrice}
                                                alt="bg"
                                                width="80px"
                                                height="80px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                        </Box>
                                        <br />
                                        <Box>
                                            <Typography fontWeight="600" fontSize="32px" textAlign="center" color="#00A64F">
                                                <FormattedMessage id="hd_contact" />
                                            </Typography>
                                            <Typography fontWeight="500" fontSize="18px" lineHeight="29.26px" textAlign="center">
                                                <FormattedMessage id="c_pro" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="time" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="time2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="90d" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sumScan" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sumQR" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="buy" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="hd_contact" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="storage" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="buy2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="hd_contact" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="max_user" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                                <FormattedMessage id="sale" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                                <FormattedMessage id="bonus3" />
                                            </Typography>
                                            <br />
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    sx={{
                                                        borderRadius: '10px',
                                                        color: 'white',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' }
                                                    }}
                                                >
                                                    <FormattedMessage id="btnBuy" />
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default Price;
