//material
import { Container, Grid, Stack, Typography } from '@mui/material';

//assets
import summaryBg from 'assets/images/landing/Home/SummaryBg.svg';

const Introduction = () => {
    return (
        <>
            <section id="summary" style={{ background: 'linear-gradient(180deg, #FFDFBF 0%, #FFFCF8 100%)' }} className="home__summary">
                <Container>
                    <Grid mt="80px" container>
                        <Grid item xs={12} sm={6}>
                            <Stack alignItems="end" height="100%" width="100%" justifyContent="center" pt="10%">
                                <Typography
                                    fontWeight="600"
                                    color="#393939"
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
                                    Trải Nghiệm
                                </Typography>
                                <Typography
                                    fontWeight="600"
                                    color="#393939"
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
                                    Omni-Channel ChatBot thế hệ mới Với Sức Mạnh AI
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={summaryBg} alt="bg" width="100%" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Introduction;
