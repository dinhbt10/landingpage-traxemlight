import { Button, Container, Grid, Stack, Typography, Box } from '@mui/material';
import backgroundBenefit from 'assets/BackgroundBenefit.svg';
import introIMG from 'assets/images/landing/Home/IntroIMG.svg';
import checkboxTXL from 'assets/CheckboxTXL.svg';
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
                    <Grid
                        mt="80px"
                        container
                        sx={{
                            flexDirection: {
                                xs: 'column-reverse',
                                md: 'row'
                            }
                        }}
                    >
                        <Grid item xs={12} sm={12} md={6}>
                            <Stack alignItems="start" height="100%" width="100%" justifyContent="center" pt="10%">
                                <Typography
                                    fontWeight="600"
                                    font-family="Montserrat"
                                    color="white"
                                    width="100%"
                                    px="10%"
                                    sx={{
                                        fontSize: {
                                            xs: '32px',
                                            sm: '35px',
                                            lg: '56px'
                                        }
                                    }}
                                >
                                    Lợi ích sử dụng
                                </Typography>
                                <br />
                                <Typography
                                    fontFamily="Montserrat"
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
                                            <Typography fontWeight="600" fontSize="22px" lineHeight="26.82px">
                                                Triển khai nhanh
                                            </Typography>
                                            <Typography fontWeight="400" fontSize="18px">
                                                Thiết lập nhanh chóng, không cần kỹ thuật phức tạp.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Typography>
                                <br />
                                <Typography
                                    font-family="Montserrat"
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
                                            <Typography fontWeight="600" fontSize="22px" lineHeight="26.82px">
                                                Minh bạch thông tin
                                            </Typography>
                                            <Typography fontWeight="400" fontSize="18px">
                                                Thông qua QR code, thông tin sản phẩm dễ dàng được chia sẻ với người tiêu dùng.{' '}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Typography>{' '}
                                <br />
                                <Typography
                                    font-family="Montserrat"
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
                                            <Typography fontWeight="600" fontSize="22px" lineHeight="26.82px">
                                                Tăng độ tin cậy
                                            </Typography>
                                            <Typography fontWeight="400" fontSize="18px">
                                                Giúp tăng cường mức độ tin cậy của sản phẩm thông qua việc chứng minh nguồn gốc xuất xứ, quy
                                                trình sản xuất và các thông tin hữu ích khác.{' '}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Typography>
                                <br />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={introIMG} alt="bg" width="100%" height="100%" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Benefit;
