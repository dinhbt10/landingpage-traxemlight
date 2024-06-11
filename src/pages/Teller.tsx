import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import LogoText from './LogoText';
import Check from 'assets/images/landing/Home/Check.svg';
import Check2 from 'assets/images/landing/Home/icon.png';
import Check3 from 'assets/images/landing/Home/Check3.svg';
import LogoText2 from './LogoText2';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    table: {
        '& .MuiTableCell-root': {
            border: '2px solid white'
        }
    }
});

const data = [
    {
        content:
            'Hiểu biết sâu sắc, chính xác và chi tiết về thương hiệu, lĩnh vực kinh doanh, nghiệp vụ của bạn, không chỉ đơn thuần là một giải pháp chatbot tổng quan.',
        check: true
    },
    {
        content: 'Cung cấp câu trả lời chính xác tới khách hàng về thông tin doanh nghiệp thông qua các câu hỏi đầu vào',
        check: true
    },
    {
        content:
            'Khách hàng có thể trao đổi với bạn ở nhiều nền tảng khác nhau, trên nhiều kênh trực tuyến quen thuộc như Zalo, Messenger, Facebook,... và emTeller chat box',
        check: false
    },
    {
        content: 'Truy cập từ mọi nơi, trên mọi kênh trực tuyến',
        check: true
    },
    {
        content: 'Quản lý thông tin khách hàng một cách hiệu quả',
        check: false
    },
    {
        content: 'Quản lý yêu cầu của khách hàng dưới dạng ticket',
        check: false
    },
    {
        content: 'Bảo vệ quyền riêng tư bằng cách ngăn chặn dữ liệu của bạn khỏi việc đào tạo các mô hình AI đại chúng',
        check: false
    },
    {
        content: 'Lưu trữ lịch sử và khôi phục nội dung trò chuyện',
        check: false
    },
    {
        content: 'Hỗ trợ đào tạo chatbot theo chuyên ngành và lĩnh vực đặc thù',
        check: false
    }
];

const Teller = () => {
    const classes = useStyles();
    return (
        <>
            <section id="teller" style={{ padding: '0', margin: '0 30px' }}>
                <Box my="50px" sx={{ borderRadius: '10px' }}>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '32px',
                                md: '50px'
                            },
                            textAlign: {
                                xs: 'center',
                                sm: 'left'
                            }
                        }}
                        fontWeight={400}
                        color="#616161"
                    >
                        Tại sao emTeller lại
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '32px',
                                md: '50px'
                            },
                            textAlign: {
                                xs: 'center',
                                sm: 'left'
                            }
                        }}
                        px="10px"
                        fontWeight={600}
                        color="#3871DF"
                    >
                        phù hợp với doanh nghiệp của bạn?
                    </Typography>
                    <Table
                        className={classes.table}
                        aria-label="simple table"
                        sx={{ background: 'rgba(240, 246, 254, 1)', mt: '40px', borderRadius: '5px' }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">
                                    <Box
                                        p={0}
                                        m={0}
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                sm: 'block'
                                            }
                                        }}
                                    >
                                        <LogoText />
                                    </Box>
                                    <Box
                                        p={0}
                                        m={0}
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                sm: 'none'
                                            }
                                        }}
                                    >
                                        <LogoText2 />
                                    </Box>
                                </TableCell>
                                <TableCell align="center">CHAT GPT</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.content}>
                                    <TableCell>
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: '16px',
                                                    sm: '22px'
                                                }
                                            }}
                                            fontWeight={400}
                                        >
                                            {item.content}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <img src={Check} alt="logo" />
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.check ? <img src={Check2} alt="logo" /> : <img src={Check3} alt="logo" />}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </section>
        </>
    );
};

export default Teller;
