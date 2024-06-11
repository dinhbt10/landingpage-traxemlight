import React, { ReactElement, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger,
    Button
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// project imports
import Logo from 'ui-component/Logo';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import menu from 'assets/images/landing/Home/Menu.svg';
import LogoText2 from 'pages/LogoText2';

// elevation scroll
interface ElevationScrollProps {
    children: ReactElement;
    window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window!
    });
    const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
        style: {
            backgroundColor: theme.palette.background.default,
            borderBottom: trigger ? 'none' : '1px solid',
            borderColor: trigger ? '' : darkBorder,
            color: theme.palette.text.dark
        }
    });
}

const nav = [
    // { id: 'summary', name: 'Trang chủ', key: 0 },
    // { id: 'hightlight', name: 'Tính năng', key: 1 },
    // { id: 'introduction', name: 'Giới thiệu', key: 2 },
    // { id: 'teller', name: 'Tại sao chọn emTeller?', key: 3 }
    { id: 'summaryIntro', name: 'Giới thiệu', key: 0 },
    { id: 'benefit', name: 'Lợi ích', key: 1 },
    { id: 'feature', name: 'Tính năng nổi bật', key: 2 },
    { id: 'procedure', name: 'Quy trình', key: 3 },
    { id: 'price', name: 'Bảng giá', key: 4 },
    { id: 'contact', name: 'Liên hệ', key: 5 }
];

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
    const [isActive, setIsActive] = useState(0);
    /** Method called on multiple components with different event types */
    const drawerToggler = (open: boolean) => (event: any) => {
        if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    const handleScrollToSection = (sectionId: string, key?: number) => {
        if (key || key === 0) {
            setIsActive(key);
        }
        const section = document.getElementById(sectionId);
        if (section) {
            const topOffset = section.offsetTop - 110;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar sx={{ width: '100%' }}>
                <Toolbar>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" mx="15px">
                        <Typography
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block'
                                }
                            }}
                        >
                            <Logo />
                        </Typography>
                        <Typography
                            sx={{
                                display: {
                                    xs: 'block',
                                    sm: 'none'
                                }
                            }}
                        >
                            <LogoText2 />
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} spacing={2}>
                            {nav.map((item, index) => (
                                <Button key={item.key} color="inherit" onClick={() => handleScrollToSection(item.id, item.key)}>
                                    <Typography fontWeight={500} sx={{ color: index === isActive ? '#00A64F' : 'none' }}>
                                        {item.name}
                                    </Typography>
                                </Button>
                            ))}
                            <Button sx={{ display: 'none' }} color="inherit" onClick={() => handleScrollToSection('teller')}>
                                <Typography fontWeight={500}>Tại sao chọn emTeller?</Typography>
                            </Button>
                        </Stack>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            <Button
                                // onClick={() => handleScrollToSection('contact')}
                                sx={{
                                    marginRight: '10px',
                                    marginY: '22px',
                                    padding: '13px 24px',
                                    background: 'white',
                                    color: '#00A64F',
                                    borderRadius: '10px',
                                    border: '1px solid #00A64F'
                                }}
                            >
                                Vi <KeyboardArrowDownIcon />
                            </Button>
                            <Button
                                // onClick={() => handleScrollToSection('contact')}
                                sx={{
                                    marginY: '22px',
                                    padding: '13px 24px',
                                    background: 'white',
                                    color: '#00A64F',
                                    borderRadius: '10px',
                                    border: '1px solid #00A64F'
                                }}
                            >
                                Đăng ký
                            </Button>
                            <Button
                                sx={{
                                    borderRadius: '10px',
                                    color: 'white',
                                    padding: '5px 14px',
                                    background: '#00A64F',
                                    marginLeft: '10px',
                                    ':hover': { background: '#00A64F', color: 'white' }
                                }}
                            >
                                Đăng nhập
                            </Button>
                        </Stack>
                        <Stack sx={{ display: { sm: 'block', md: 'none' } }} direction="row">
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="small">
                                <img src={menu} alt="menu" />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('summaryIntro')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconHome2 />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Giới thiệu" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('benefit')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconDashboard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Lợi ích" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('feature')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBook />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Tính năng nổi bật" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('procedure')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Quy trình" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('price')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Bảng giá" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('contact')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Liên hệ " />
                                                </ListItemButton>
                                            </Link>
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Stack>
                    </Stack>
                </Toolbar>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
