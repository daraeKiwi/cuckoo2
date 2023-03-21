import React, {Component} from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';

import MainMenuList from './mainMenuList';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

export default class Layout extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          open: false,
        }
    }

    toggleDrawer = () => {
        let open = this.state.open;
        open = !open;

        this.setState({open: open});
    };

    render() {
        return (
        <ThemeProvider theme={mdTheme}>
      
            <Box sx={{ display: 'flex' }}>
      
              <CssBaseline />
      
              {/* 타이틀바 */}
              <AppBar position="absolute" open={this.state.open}>
                <Toolbar
                  sx={{
                    pr: '24px', // keep right padding when drawer closed
                  }}
                >
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.toggleDrawer}
                    sx={{
                      marginRight: '12px',
                      ...(this.state.open && { display: 'none' }),
                    }}
                  >
                    <MenuIcon />
      
                  </IconButton>
      
                  {/* 텍스트 스타일 */}
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    오늘은 뭐 먹을까
                    
                  </Typography>
      
                  {/* 오른쪽 벳지 */}
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
      
                </Toolbar>
              </AppBar>
      
              <Drawer variant="permanent" open={this.state.open}>
      
                <Toolbar
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                  }}
                >
                  {/* 메뉴 축소 버튼 */}
                  <IconButton onClick={this.toggleDrawer}>
                    <ChevronLeftIcon />
                  </IconButton>
                </Toolbar>
      
                {/* 리스트 선 */}
                <Divider />
      
                <List component="nav">
                  <MainMenuList />
                  {/*
                  <Divider sx={{ my: 1 }} />
                  {secondaryListItems}
                  */}
                </List>
      
              </Drawer>
      
              <Box
                component="main"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  flexGrow: 1,
                  width: '100vh',
                  height: '100vh',
                  overflow: 'auto',
                }}
              >
                {/* 툴바 위치 */}
                <Toolbar />

                {/* Route 내용 */}
                <Outlet />
      

              </Box>
      
            </Box>
        
        </ThemeProvider>
        );
    }
}
