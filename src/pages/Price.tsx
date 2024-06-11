import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import create from 'assets/procedure/CreateProduct.svg';
import enterInfor from 'assets/procedure/EnterInformation.svg';
import scanQR from 'assets/procedure/ScanQR.svg';
import viewQR from 'assets/procedure/ViewInforQR.svg';
import img from 'assets/procedure/ImgProcedure.svg';
import iconPrice from 'assets/price/IconPrice.svg';

const typographyStyle = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: 'black',
    width: '95%',
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
            <section
                id="price"
                // style={{ background: 'linear-gradient(180deg, #FFDFBF 0%, #FFFCF8 100%)' }}
                className="home__summary"
            >
                <Container>
                    <Grid mt="80px">
                        <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: 'black' }}>Bảng giá</h1>
                        <br />
                        <Grid container item xs={12} sm={12} md={12}>
                            <Grid item xs={12} sm={12} md={3}>
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="black"
                                    width="95%"
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
                                            25.000đ
                                        </Typography>
                                        <Typography fontWeight="500" fontSize="18px" lineHeight="29.26px" textAlign="center">
                                            C-Starter
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Thời gian sử dụng
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            1 tháng
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Thời gian dùng thử
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            30 ngày
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượt quét QR tra cứu
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Không giới hạn
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượng mã QR
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            500 QR
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Mua thêm mã QR
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            50đ/QR
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Dung lượng lưu trữ
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            2 GB
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Mua thêm dung lượng
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            1.650đ/1 Gb/1 tháng
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượng active user tối đa
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            10
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Khuyến mãi
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Tặng 1 tháng license cho user mới
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
                                                Mua ngay
                                            </Button>{' '}
                                        </Box>
                                    </Box>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={3}>
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="black"
                                    width="95%"
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
                                            300.000đ
                                        </Typography>
                                        <Typography fontWeight="500" fontSize="18px" lineHeight="29.26px" textAlign="center">
                                            C-Basic
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Thời gian sử dụng
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            1 năm
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Thời gian dùng thử
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            90 ngày
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượt quét QR tra cứu
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Không giới hạn
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượng mã QR
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            6000 QR
                                        </Typography>
                                        <br />{' '}
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Mua thêm mã QR
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            50đ/QR
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Dung lượng lưu trữ
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            5 GB
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Mua thêm dung lượng
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            1.650đ/1 Gb/1 tháng
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượng active user tối đa
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            100
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Khuyến mãi
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Tặng 2 tháng license cho user mới
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
                                                Mua ngay
                                            </Button>{' '}
                                        </Box>
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="black"
                                    width="95%"
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
                                            900.000đ
                                        </Typography>
                                        <Typography fontWeight="500" fontSize="18px" lineHeight="29.26px" textAlign="center">
                                            C-Advanced
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Thời gian sử dụng
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            1 năm
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Thời gian dùng thử
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            90 ngày
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượt quét QR tra cứu
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Không giới hạn
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượng mã QR
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            20.000 QR
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Mua thêm mã QR
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            50đ/QR
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Dung lượng lưu trữ
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            20 GB
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Mua thêm dung lượng
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            1.650đ/1 Gb/1 tháng
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượng active user tối đa
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            500
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Khuyến mãi
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Tặng 3 tháng license cho user mới
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
                                                Mua ngay
                                            </Button>{' '}
                                        </Box>
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="black"
                                    width="95%"
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
                                            Liên hệ
                                        </Typography>
                                        <Typography fontWeight="500" fontSize="18px" lineHeight="29.26px" textAlign="center">
                                            C-Pro
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Thời gian sử dụng
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Không giới hạn
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Thời gian dùng thử
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            90 ngày
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượt quét QR tra cứu
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Không giới hạn
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượng mã QR
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Không giới hạn
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Mua thêm mã QR
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Liên hệ
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Dung lượng lưu trữ
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Không giới hạn
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Mua thêm dung lượng
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Liên hệ
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Số lượng active user tối đa
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Không giới hạn
                                        </Typography>
                                        <br />
                                        <Typography fontWeight="500" fontSize="12px" color="#8F8F8F" textAlign="center">
                                            Khuyến mãi
                                        </Typography>
                                        <Typography fontWeight="600" fontSize="16px" textAlign="center">
                                            Tặng 3 tháng license cho user mới
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
                                                Mua ngay
                                            </Button>{' '}
                                        </Box>
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default Price;
