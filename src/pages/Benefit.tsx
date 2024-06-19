import { Container, Grid, Stack, Typography, Box } from '@mui/material';
import backgroundBenefit from 'assets/BackgroundBenefit.svg';
import checkboxTXL from 'assets/CheckboxTXL.svg';
import { FormattedMessage } from 'react-intl';
const Benefit = () => {
    return (
        <>
            <section
                id="benefit"
                // style={{ background: 'linear-gradient(180deg, #FFDFBF 0%, #FFFCF8 100%)' }}
                className="home__summary"
                style={{
                    backgroundImage: `url(${backgroundBenefit})`,
                    backgroundSize: 'cover', // Ensures the image covers the entire section
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                    backgroundPosition: 'center' // Centers the image
                }}
            >
                <Container>
                    <Grid mt="80px" container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Stack alignItems="start" height="100%" width="100%" justifyContent="center" pt="10%">
                                <Typography
                                    fontWeight="600"
                                    fontFamily="Montserrat"
                                    color="white"
                                    width="100%"
                                    px="10%"
                                    sx={{
                                        fontSize: {
                                            xs: '32px',
                                            sm: '32px',
                                            lg: '32px'
                                        }
                                    }}
                                >
                                    <FormattedMessage id="bnf_h1" />
                                </Typography>
                                <br />
                                <Typography
                                    // fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="white"
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
                                            src={checkboxTXL}
                                            alt="bg"
                                            width="24px"
                                            height="24px"
                                            style={{ marginRight: '8px', marginTop: '4px' }}
                                        />
                                        <Box>
                                            <Typography
                                                fontWeight="600"
                                                lineHeight="26.82px"
                                                fontFamily="Montserrat"
                                                sx={{
                                                    fontSize: {
                                                        xs: '20px',
                                                        lg: '22px'
                                                    }
                                                }}
                                            >
                                                <FormattedMessage id="bnf_ct1" />
                                            </Typography>
                                            <Typography fontWeight="400" fontSize="16px" fontFamily="Montserrat">
                                                <FormattedMessage id="bnf_ct2" />
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Typography>
                                <br />
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="white"
                                    width="100%"
                                    px="10%"
                                    align="justify"
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
                                            src={checkboxTXL}
                                            alt="bg"
                                            width="24px"
                                            height="24px"
                                            style={{ marginRight: '8px', marginTop: '4px' }}
                                        />
                                        <Box>
                                            <Typography
                                                fontWeight="600"
                                                lineHeight="26.82px"
                                                fontFamily="Montserrat"
                                                sx={{
                                                    fontSize: {
                                                        xs: '20px',
                                                        lg: '22px'
                                                    }
                                                }}
                                            >
                                                <FormattedMessage id="bnf_ct3" />
                                            </Typography>
                                            <Typography fontWeight="400" fontSize="16px" fontFamily="Montserrat">
                                                <FormattedMessage id="bnf_ct4" />{' '}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Typography>{' '}
                                <br />
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="white"
                                    width="100%"
                                    px="10%"
                                    align="justify"
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
                                            src={checkboxTXL}
                                            alt="bg"
                                            width="24px"
                                            height="24px"
                                            style={{ marginRight: '8px', marginTop: '4px' }}
                                        />
                                        <Box>
                                            <Typography
                                                fontWeight="600"
                                                lineHeight="26.82px"
                                                fontFamily="Montserrat"
                                                sx={{
                                                    fontSize: {
                                                        xs: '20px',
                                                        lg: '22px'
                                                    }
                                                }}
                                            >
                                                <FormattedMessage id="bnf_ct5" />{' '}
                                            </Typography>
                                            <Typography fontWeight="400" fontSize="16px" fontFamily="Montserrat">
                                                <FormattedMessage id="bnf_ct6" />
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Typography>
                                <br />
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '30px'
                            }}
                        >
                            <iframe
                                width="611px"
                                height="405px"
                                src="https://www.youtube.com/embed/9q14JNH6CHU"
                                title="YouTube video player"
                                style={{
                                    borderRadius: '30px'
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Benefit;
