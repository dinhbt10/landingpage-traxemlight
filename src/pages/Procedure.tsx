import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import create from 'assets/procedure/CreateProduct.svg';
import enterInfor from 'assets/procedure/EnterInformation.svg';
import scanQR from 'assets/procedure/ScanQR.svg';
import viewQR from 'assets/procedure/ViewInforQR.svg';
import img from 'assets/procedure/ImgProcedure.svg';
import './Procedure.css';
const Procedure = () => {
    return (
        <>
            <section
                id="procedure"
                // style={{ background: 'linear-gradient(180deg, #FFDFBF 0%, #FFFCF8 100%)' }}
                className="home__summary"
            >
                <Container>
                    <Grid mt="80px">
                        <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: 'black' }}>Quy trình hoạt động</h1>
                        <Grid container item xs={12} sm={12} md={12}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack alignItems="start" height="100%" width="100%" justifyContent="center" pt="5%" px="10%">
                                    <img src={img} alt="bg" height="100%" width="100%" />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack alignItems="start" height="100%" width="100%" justifyContent="center" pt="5%" px="5%">
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
                                        <Box display="flex" alignItems="center">
                                            <img
                                                src={create}
                                                alt="bg"
                                                width="32px"
                                                height="32px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                            <Box>
                                                <Typography fontWeight="600" fontSize="24px" lineHeight="29.26px">
                                                    Tạo mẫu sản phẩm mới
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontWeight="400" fontSize="16px">
                                            Doanh nghiệp lựa chọn các thông tin muốn công khai và thiết kế giao diện cho trang thông tin sản
                                            phẩm. Ví dụ như: hình ảnh sản phẩm, thành phần nguyên liệu, quy trình sản xuất, hướng dẫn sử
                                            dụng, chứng chỉ và giải thưởng.
                                        </Typography>
                                    </Typography>
                                    <br />
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
                                        <Box display="flex" alignItems="center">
                                            <img
                                                src={enterInfor}
                                                alt="bg"
                                                width="32px"
                                                height="32px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                            <Box>
                                                <Typography fontWeight="600" fontSize="24px" lineHeight="29.26px">
                                                    Nhập thông tin lô sản phẩm
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontWeight="400" fontSize="16px">
                                            Doanh nghiệp lựa chọn mẫu sản phẩm và nhập thông tin cho lô sản xuất như mã lô và ngày sản xuất
                                            và điều kiện môi trường tại thời điểm sản xuất. Ngoài ra, doanh nghiệp có thể tùy chỉnh thêm
                                            thông tin muốn chia sẻ với người tiêu dùng.
                                        </Typography>
                                    </Typography>
                                    <br />
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
                                        <Box display="flex" alignItems="center">
                                            <img
                                                src={scanQR}
                                                alt="bg"
                                                width="32px"
                                                height="32px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                            <Box>
                                                <Typography fontWeight="600" fontSize="24px" lineHeight="29.26px">
                                                    In và dán mã QR
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontWeight="400" fontSize="16px">
                                            In mã QR đã được tạo từ thông tin lô sản xuất và dán lên sản phẩm
                                        </Typography>
                                    </Typography>
                                    <br />
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
                                        <Box display="flex" alignItems="center">
                                            <img
                                                src={viewQR}
                                                alt="bg"
                                                width="32px"
                                                height="32px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                            <Box>
                                                <Typography fontWeight="600" fontSize="24px" lineHeight="29.26px">
                                                    Quét mã QR và xem thông tin
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontWeight="400" fontSize="16px">
                                            Người tiêu dùng sử dụng điện thoại hoặc máy tính bảng có camera để quét mã QR và xem thông tin
                                            sản phẩm đã được doanh nghiệp công khai.
                                        </Typography>
                                    </Typography>
                                    <br />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Procedure;
