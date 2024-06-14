import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import create from 'assets/procedure/CreateProduct.svg';
import enterInfor from 'assets/procedure/EnterInformation.svg';
import scanQR from 'assets/procedure/ScanQR.svg';
import viewQR from 'assets/procedure/ViewInforQR.svg';
import img from 'assets/procedure/ImgProcedure.svg';
import './Procedure.css';
import { FormattedMessage } from 'react-intl';
const Procedure = () => {
    return (
        <>
            <section id="procedure" className="home__summary">
                <Container>
                    <Grid mt="80px">
                        <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: 'black' }}>
                            <FormattedMessage id="pr_h1" />
                        </h1>
                        <Grid container item xs={12} sm={12} md={12}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack alignItems="start" height="100%" width="100%" justifyContent="center" pt="5%" px="10%">
                                    <img src={img} alt="bg" height="100%" width="100%" />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Stack alignItems="start" height="100%" width="100%" justifyContent="center" pt="5%" px="5%">
                                    <Typography
                                        fontStyle="Montserrat"
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
                                                    <FormattedMessage id="pr_create" />
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontWeight="400" fontSize="16px" style={{ textAlign: 'justify' }}>
                                            <FormattedMessage id="pr_ct_create" />
                                        </Typography>
                                    </Typography>
                                    <br />
                                    <Typography
                                        fontStyle="Montserrat"
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
                                                    <FormattedMessage id="pt_enter_info" />
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontWeight="400" fontSize="16px" style={{ textAlign: 'justify' }}>
                                            <FormattedMessage id="pt_ct_info" />
                                        </Typography>
                                    </Typography>
                                    <br />
                                    <Typography
                                        fontStyle="Montserrat"
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
                                                    <FormattedMessage id="pt_print" />
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontWeight="400" fontSize="16px" style={{ textAlign: 'justify' }}>
                                            <FormattedMessage id="pt_ct_print" />
                                        </Typography>
                                    </Typography>
                                    <br />
                                    <Typography
                                        fontStyle="Montserrat"
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
                                                    <FormattedMessage id="pt_scan" />
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontWeight="400" fontSize="16px" style={{ textAlign: 'justify' }}>
                                            <FormattedMessage id="pt_ct_scan" />
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
