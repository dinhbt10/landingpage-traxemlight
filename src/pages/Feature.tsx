//material
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import iconQR from 'assets/feature/IconQR.svg';
import iconART from 'assets/feature/IconArt.svg';
import iconTemplate from 'assets/feature/IconTemplate.svg';

//assets
import Logo1 from '../assets/images/landing/Home/MediaLogo.svg';
import Logo2 from 'assets/images/landing/Home/Logo2.svg';
import Logo3 from 'assets/images/landing/Home/Logo3.svg';
import Logo4 from 'assets/images/landing/Home/Logo4.svg';
import Logo5 from 'assets/images/landing/Home/Logo5.svg';
import Logo6 from 'assets/images/landing/Home/Logo6.svg';
import { FormattedMessage } from 'react-intl';

const Feature = () => {
    return (
        <>
            <section id="feature" className="home__intro">
                <Container>
                    <Grid mt="80px">
                        <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: 'black' }}>
                            {' '}
                            <FormattedMessage id="ft_h1" />
                        </h1>
                        <Grid container item xs={12} sm={12} md={12}>
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="black"
                                    width="100%"
                                    px="10%"
                                    sx={{
                                        fontSize: {
                                            xs: '16px',
                                            sm: '16px',
                                            lg: '18px'
                                        }
                                    }}
                                >
                                    <Box display="flex" alignItems="flex-start">
                                        <img
                                            src={iconQR}
                                            alt="bg"
                                            width="80px"
                                            height="80px"
                                            style={{ marginRight: '8px', marginTop: '4px' }}
                                        />
                                    </Box>
                                    <br />
                                    <Box>
                                        <Typography fontWeight="600" fontSize="24px" lineHeight="29.26px">
                                            <FormattedMessage id="ft_g1_h1" />
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="400" fontSize="18px">
                                            <FormattedMessage id="ft_g1_c1" />
                                        </Typography>
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="black"
                                    width="100%"
                                    px="10%"
                                    sx={{
                                        fontSize: {
                                            xs: '16px',
                                            sm: '16px',
                                            lg: '18px'
                                        }
                                    }}
                                >
                                    <Box display="flex" alignItems="flex-start">
                                        <img
                                            src={iconTemplate}
                                            alt="bg"
                                            width="80px"
                                            height="80px"
                                            style={{ marginRight: '8px', marginTop: '4px' }}
                                        />
                                    </Box>
                                    <br />
                                    <Box>
                                        <Typography fontWeight="600" fontSize="24px" lineHeight="29.26px">
                                            <FormattedMessage id="ft_g2_h1" />
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="400" fontSize="18px">
                                            <FormattedMessage id="ft_g2_c1" />
                                        </Typography>
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="black"
                                    width="100%"
                                    px="10%"
                                    sx={{
                                        fontSize: {
                                            xs: '16px',
                                            sm: '16px',
                                            lg: '18px'
                                        }
                                    }}
                                >
                                    <Box display="flex" alignItems="flex-start">
                                        <img
                                            src={iconART}
                                            alt="bg"
                                            width="80px"
                                            height="80px"
                                            style={{ marginRight: '8px', marginTop: '4px' }}
                                        />
                                    </Box>
                                    <br />
                                    <Box>
                                        <Typography fontWeight="600" fontSize="24px" lineHeight="29.26px">
                                            <FormattedMessage id="ft_g3_h1" />
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="400" fontSize="18px">
                                            <FormattedMessage id="ft_g3_c1" />
                                        </Typography>
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Feature;
