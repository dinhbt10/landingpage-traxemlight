import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import introIMG from 'assets/images/landing/Home/IntroIMG.svg';

const SumIntro = () => {
    return (
        <>
            <section
                id="summaryIntro"
                // style={{ background: 'linear-gradient(180deg, #FFDFBF 0%, #FFFCF8 100%)' }}
                className="home__summary"
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
                                    color="#00A64F"
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
                                    An tâm tiêu dùng, thông tin minh bạch
                                </Typography>
                                <br />
                                <Typography
                                    font-family="Montserrat"
                                    fontWeight="500"
                                    color="#393939"
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
                                    TraXem Light là một giải pháp tạo ra sự{' '}
                                    <strong style={{ color: '#00A64F' }}>minh bạch xuyên suốt qua QR code trên thiết bị di động</strong>.
                                    Mục tiêu hàng đầu của TraXem Light là truyền tải thông tin của sản phẩm, mang lại sự tin cậy giữa nhà
                                    sản xuất, doanh nghiệp và người tiêu dùng.
                                </Typography>
                                <br />
                                <Typography
                                    font-family="Montserrat"
                                    fontWeight="500"
                                    color="#393939"
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
                                    Doanh nghiệp có thể dễ dàng{' '}
                                    <strong style={{ color: '#00A64F' }}>
                                        công khai nguồn gốc xuất xứ, quy trình sản xuất và các thông tin hữu ích khác của sản phẩm và lưu
                                        trữ trong một mã QR đơn giản
                                    </strong>
                                    . Từ đó giúp người tiêu dùng dễ dàng truy cập thông tin sản phẩm nhờ thao tác quét mã QR bằng camera của
                                    điện thoại.
                                </Typography>{' '}
                                <br />
                                <Typography font-family="Montserrat" fontWeight="500" color="#393939" width="100%" px="10%" align="justify">
                                    <Button
                                        sx={{
                                            borderRadius: '41px',
                                            color: 'white',
                                            padding: '10px 15px',
                                            background: '#00A64F',
                                            fontWeight: '700',
                                            ':hover': { background: '#00A64F', color: 'white' }
                                        }}
                                    >
                                        Trải nghiệm ngay
                                    </Button>
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={introIMG} alt="bg" width="100%" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default SumIntro;
