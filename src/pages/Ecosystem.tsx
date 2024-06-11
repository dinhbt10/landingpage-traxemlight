import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import imgEco1 from 'assets/ecosystem/ImgEco1.svg';
import imgEco2 from 'assets/ecosystem/ImgEco2.svg';
import traXemAgri from 'assets/ecosystem/TraXemAgri.svg';
import traXemEmarket from 'assets/ecosystem/TraXemMarket.svg';
import traXemSCM from 'assets/ecosystem/TraXemSCM.svg';

const Ecosystem = () => {
    return (
        <>
            <section
                id="summaryIntro"
                // style={{ background: 'linear-gradient(180deg, #FFDFBF 0%, #FFFCF8 100%)' }}
                className="home__summary"
            >
                <Container>
                    <Grid mt="80px">
                        <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: 'black' }}>Hệ sinh thái TraXem</h1>
                        <h2 style={{ textAlign: 'center', fontWeight: '600', fontSize: '18px', color: 'black' }}>
                            Hãy cùng tìm hiểu những sản phẩm khác thuộc nhóm TraXem
                        </h2>

                        <br />
                        <Grid container item xs={12} sm={12} md={12}>
                            <Grid container item xs={12} sm={12} md={6}>
                                <Box>
                                    <Typography width="100%" px="10%">
                                        <img src={imgEco1} alt="bg" width="100%" height="375px" style={{ marginBottom: '10px' }} />
                                        <img src={traXemAgri} alt="bg" width="30%" height="60px" />
                                        <img src={traXemEmarket} alt="bg" width="50%" height="60px" />
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid container item xs={12} sm={12} md={6}>
                                <Box>
                                    <Typography width="100%" px="5%">
                                        <img src={imgEco2} alt="bg" width="100%" height="375px" style={{ marginBottom: '10px' }} />
                                        <img src={traXemSCM} alt="bg" width="35%" height="60px" />
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Ecosystem;
