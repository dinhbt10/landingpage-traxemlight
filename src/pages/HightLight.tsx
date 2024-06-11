import { Box, Grid, Typography } from '@mui/material';

const HightLight = () => {
    return (
        <>
            <section id="hightlight" style={{ padding: '0', margin: '0 30px' }}>
                <Box width="100%" sx={{ flexGrow: 1 }} mt="80px">
                    <Typography
                        textAlign="center"
                        fontWeight={400}
                        color="#616161"
                        width="100%"
                        mb="30px"
                        sx={{
                            fontSize: {
                                xs: '32px',
                                sm: '50px'
                            }
                        }}
                    >
                        Tính Năng <strong style={{ color: '#3871DF' }}>Nổi Bật</strong>
                    </Typography>
                    <Grid direction="row" container gap="24px">
                        <Grid item xs={12} lg={3.85} sx={{ boxShadow: '0px 6px 20px 0px rgba(135, 135, 135, 0.20)' }} borderRadius="20px">
                            <Box px={'25px'} pt="20px" pb="50px">
                                <Typography color="#3871DF" fontSize={24} fontWeight={600} my="10px">
                                    Xác Định Kênh Giao Tiếp
                                </Typography>
                                <Typography color="#393939" fontSize={18} mb="10px">
                                    Quyết định rõ ràng các kênh mà người dùng có thể sử dụng để tương tác với chatbot của bạn: Website;
                                    Fanpage Facebook; Zalo,...
                                </Typography>
                                <Typography color="#393939" fontSize={18}>
                                    Sử dụng một API đơn giản để tích hợp hoặc thậm chí chỉ cần một lần nhấp chuột để tích hợp kênh giao
                                    tiếp.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3.85} sx={{ boxShadow: '0px 6px 20px 0px rgba(135, 135, 135, 0.20)' }} borderRadius="20px">
                            <Box px={'25px'} pt="20px" pb="30px">
                                <Typography color="#3871DF" fontSize={24} fontWeight={600} my="10px">
                                    Quản Lý Bình Luận
                                </Typography>
                                <Typography color="#393939" fontSize={18} mb="10px">
                                    Theo dõi và quản lý bình luận một cách hiệu quả, tạo cho khách hàng trải nghiệm đang tương tác liên tục
                                    một cách tự nhiên với một nhân viên tư vấn thực thụ.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3.85} sx={{ boxShadow: '0px 6px 20px 0px rgba(135, 135, 135, 0.20)' }} borderRadius="20px">
                            <Box px={'25px'} pt="20px" pb="30px">
                                <Typography color="#3871DF" fontSize={24} fontWeight={600} my="10px">
                                    Hỗ trợ tạo kịch bản mẫu
                                </Typography>
                                <Typography color="#393939" fontSize={18} mb="10px">
                                    Tận dụng khả năng hỗ trợ Intent Actions Text để tùy chỉnh hành động của AI chatbot dựa trên ý định của
                                    người dùng.
                                </Typography>
                                <Typography color="#393939" fontSize={18}>
                                    Cho phép xây dựng kịch bản tự động và chuyên nghiệp theo ngành, có thể tùy biến theo đúng nhu cầu doanh
                                    nghiệp.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3.85} sx={{ boxShadow: '0px 6px 20px 0px rgba(135, 135, 135, 0.20)' }} borderRadius="20px">
                            <Box px={'25px'} pt="20px" pb="30px">
                                <Typography color="#3871DF" fontSize={24} fontWeight={600} my="10px">
                                    Quản Lý Dữ Liệu Khách Hàng
                                </Typography>
                                <Typography color="#393939" fontSize={18} mb="10px">
                                    Cho phép thu thập và quản lý thông tin của khách hàng một cách an toàn và chính xác.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3.85} sx={{ boxShadow: '0px 6px 20px 0px rgba(135, 135, 135, 0.20)' }} borderRadius="20px">
                            <Box px={'25px'} pt="20px" pb="30px">
                                <Typography color="#3871DF" fontSize={24} fontWeight={600} my="10px">
                                    Trò Chuyện Theo Nhóm
                                </Typography>
                                <Typography color="#393939" fontSize={18} mb="10px">
                                    Hỗ trợ nhiều người tham gia trong một cuộc trò chuyện, tạo ra môi trường giao tiếp đa chiều và hiệu quả.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3.85} sx={{ boxShadow: '0px 6px 20px 0px rgba(135, 135, 135, 0.20)' }} borderRadius="20px">
                            <Box px={'25px'} pt="20px" pb="120px">
                                <Typography color="#3871DF" fontSize={24} fontWeight={600} my="10px">
                                    Quản lý ticket
                                </Typography>
                                <Typography color="#393939" fontSize={18} mb="10px">
                                    Hỗ trợ quản lý yêu cầu của khách hàng dưới dạng ticket ngay trên màn hình quản trị.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    );
};

export default HightLight;
