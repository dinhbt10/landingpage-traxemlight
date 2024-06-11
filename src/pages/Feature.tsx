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

const Feature = () => {
    return (
        <>
            <section id="feature" className="home__intro">
                <Container>
                    <Grid mt="80px">
                        <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: 'black' }}>Tính năng nổi bật</h1>
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
                                            Truy xuất thông tin sản phẩm bằng mã QR
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="400" fontSize="18px">
                                            Người tiêu dùng quét mã QR gắn trên sản phẩm để biết được nguồn gốc xuất xứ và các thông tin
                                            khác của sản phẩm, mang lại trải nghiệm mua sắm thuận tiện và đáng tin cậy cho người tiêu dùng.
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
                                            Ngân hàng mẫu sản phẩm chung
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="400" fontSize="18px">
                                            TraXemLight cung cấp nhiều mẫu trang thông tin sản phẩm đa dạng và chất lượng cao, cho phép
                                            doanh nghiệp sử dụng lại, hoặc tùy chỉnh để phù hợp với nhiều loại sản phẩm và nhu cầu của mình.
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
                                            Tự do thiết kế mẫu sản phẩm
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="400" fontSize="18px">
                                            TraXemLight cho phép doanh nghiệp có thể tự thiết kế trang thông tin cho từng sản phẩm của mình.
                                            Loại bỏ các hạn chế về các mẫu sản phẩm có sẵn, doanh nghiệp có thể thoải mái sáng tạo để tạo ra
                                            các mẫu thông tin sản phẩm của riêng doanh nghiệp.
                                        </Typography>
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                {/* <Box sx={{ background: 'rgba(255, 255, 255, 1)' }} px="10px">
                    <Typography color="rgba(133, 133, 133, 1)" fontSize="25px" textAlign="center" mt="50px">
                        Trusted by partners & customers
                    </Typography>
                    <Stack direction="row" justifyContent="center" alignItems="center" overflow="auto" mt="15px">
                        <img src={Logo1} alt="logo" width="200px" height="100px" />
                        <img src={Logo2} alt="logo" width="200px" height="100px" />
                        <img src={Logo3} alt="logo" width="200px" height="100px" />
                        <img src={Logo4} alt="logo" width="200px" height="100px" />
                        <img src={Logo5} alt="logo" width="200px" height="100px" />
                        <img src={Logo6} alt="logo" width="200px" height="100px" />
                    </Stack>
                </Box> */}
            </section>
        </>
    );
};

export default Feature;
