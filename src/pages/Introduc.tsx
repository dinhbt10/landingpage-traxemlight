import { Box, Grid, Stack, Typography, Button } from '@mui/material';
import Logo7 from 'assets/images/landing/Home/Logo7.svg';

const Introduc = () => {
    const handleScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const topOffset = section.offsetTop - 110;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    return (
        <section id="introduction" style={{ padding: '0', margin: '0 30px' }}>
            <Box width="100%" mt="80px" bgcolor="#DFEAFC" borderRadius="30px">
                <Grid container px="30px" pb="30px">
                    <Grid item xs={12} lg={6} pt="70px">
                        <Stack direction="column" alignItems="start" spacing={2}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '30px',
                                            sm: '50px'
                                        }
                                    }}
                                    color="#616161"
                                    fontWeight={400}
                                >
                                    Điều Gì Làm Nên
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '30px',
                                            sm: '50px'
                                        }
                                    }}
                                    color="#3871DF"
                                    fontWeight={600}
                                >
                                    Sự Khác Biệt?
                                </Typography>
                            </Box>
                            <Typography
                                width="100%"
                                fontSize={24}
                                sx={{
                                    textAlign: {
                                        xs: 'left'
                                    }
                                }}
                            >
                                emTeller.AI không chỉ là một Omni-Channel chatbot thông thường. Nó là một mô hình trí tuệ nhân tạo (AI)
                                thông minh, giúp tăng cường trải nghiệm của khách hàng qua nhiều kênh giao tiếp. Với emTeller.AI, bạn có thể
                                quản lý các kênh mà người dùng có thể giao tiếp với AI chatbot của bạn bằng một trang quản trị duy nhất.
                            </Typography>
                            <Button
                                onClick={() => handleScrollToSection('contact')}
                                sx={{
                                    marginY: '22px',
                                    padding: '13px 24px',
                                    background: '#3871DF',
                                    color: 'rgba(255, 255, 255, 1)',
                                    borderRadius: '10px',
                                    '&:hover': { background: '#3871DF !important', color: 'rgba(255, 255, 255, 1)' }
                                }}
                            >
                                Liên hệ ngay
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6} pt="90px" width="100%">
                        <img src={Logo7} alt="logo" width="100%" />
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default Introduc;
