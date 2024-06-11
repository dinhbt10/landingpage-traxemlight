import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import Robot from 'assets/images/landing/Home/robot.svg';
import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Captcha from 'ui-component/Capcha';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactApi } from 'utils/contact';
import { toast } from 'react-hot-toast';

const defaultValues = {
    name: '',
    email: '',
    phoneNum: '',
    message: '',
    captvalue: ''
};

const schema = z.object({
    name: z.string().min(4, 'min_length').max(100, 'max_length'),
    email: z.string().email(),
    phoneNum: z.string().regex(/(84|0)(3|5|7|8|9)+([0-9]{8})\b/, 'phone'),
    message: z.string().min(5, 'min_length').max(500, 'max_length'),
    captvalue: z.string().min(1, 'min_length')
});

const Form = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues,
        mode: 'all',
        resolver: zodResolver(schema)
    });

    const captchaRef = useRef({ refresh: () => {} });

    const onSubmit = async (values: z.infer<typeof schema>) => {
        try {
            await contactApi.sendContact(values);
            reset();
            captchaRef.current.refresh?.();
            toast.success('Cảm ơn bạn đã quan tâm đến sản phẩm emTeller.AI. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        } catch (error) {
            toast.error('Gửi liên hệ không thành công. Vui lòng thử lại.');
        }
    };

    return (
        <>
            <section id="contact" style={{ padding: '0', margin: '0 30px' }}>
                <Stack
                    sx={{
                        background: 'linear-gradient(180deg, #F0C48D 0%, #EFD19E 100%)',
                        flexDirection: {
                            xs: 'column-reverse',
                            sm: 'row'
                        }
                    }}
                    borderRadius={5}
                    mt="10px"
                    px="20px"
                    py="30px"
                    pb="30px"
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '50%'
                            }
                        }}
                    >
                        <Stack width="100%" alignItems={'center'}>
                            <img src={Robot} alt="robot" width="80%" />
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '50%'
                            }
                        }}
                    >
                        <Typography
                            width="100%"
                            fontWeight={500}
                            color="#35353F"
                            fontSize={18}
                            // sx={{
                            //     mt: {
                            //         xs: '30px',
                            //         sm: '150px'
                            //     }
                            // }}
                        >
                            Chưa bao giờ việc triển khai AI chatbot trở nên dễ dàng và hiệu quả như vậy. Bắt đầu ngay hôm nay với
                            emTeller.AI và trải nghiệm sự khác biệt và lợi ích trong việc tương tác với khách hàng của bạn.
                        </Typography>
                        <form style={{ width: '100%', marginTop: '30px' }} onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        variant="outlined"
                                        sx={{ 'form .MuiInputBase-input': { background: '#fffff !important' } }}
                                        label="Họ và tên"
                                        value={value}
                                        onChange={onChange}
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.name?.message}
                                    />
                                )}
                            />
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="phoneNum"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                variant="outlined"
                                                sx={{ 'form .MuiInputBase-input': { background: '#fffff' } }}
                                                label="Số điện thoại"
                                                value={value}
                                                onChange={onChange}
                                                fullWidth
                                                margin="normal"
                                                error={!!errors.phoneNum?.message}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                variant="outlined"
                                                sx={{ 'form .MuiInputBase-input': { background: '#fffff' } }}
                                                label="Email"
                                                value={value}
                                                onChange={onChange}
                                                fullWidth
                                                margin="normal"
                                                error={!!errors.email?.message}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Controller
                                name="message"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        type="textarea"
                                        multiline
                                        rows={4}
                                        label="Nội dung"
                                        value={value}
                                        onChange={onChange}
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.message?.message}
                                    />
                                )}
                            />
                            <Grid container direction="row" justifyContent="space-between">
                                <Grid item xs={12} sm={9}>
                                    <Controller
                                        name="captvalue"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <Stack mt={2} mb={1} direction="row" gap={1} alignItems="center" sx={{ width: { xs: '100%' } }}>
                                                <TextField
                                                    label="Mã kiểm tra"
                                                    value={value}
                                                    onChange={onChange}
                                                    sx={{ width: '100%' }}
                                                    error={!!errors.captvalue?.message}
                                                />
                                                <Captcha ref={captchaRef} />
                                            </Stack>
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Button
                                        type="submit"
                                        sx={{
                                            width: {
                                                xs: '100%'
                                            },
                                            color: 'white',
                                            background: '#3871DF',
                                            ':hover': { color: 'white', background: '#3871DF' }
                                        }}
                                        disabled={isSubmitting}
                                    >
                                        Gửi
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Stack>
            </section>
        </>
    );
};

export default Form;
