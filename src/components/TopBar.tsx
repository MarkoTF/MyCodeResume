import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
  Tooltip,
  Box,
  BoxProps,
  Menu,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const pages = ['Home', 'About', 'Skills', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopBar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        {!isMobile ? <DesktopTopBar/> : <MobileTopBar />}
      </Container>
    </AppBar>
  );
}

const DesktopTopBar = () => {

  const theme = useTheme();

  return (
    <Toolbar disableGutters={false}>
      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row' }} >
        <Logo />
        <Button
          variant='contained'
          size='small'
          color='secondary'
          endIcon={<FileDownloadOutlinedIcon />}
        >
          CV
        </Button>
      </Box>

      <Box sx={{ flex: 2, justifyContent: 'center', display: 'flex' }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ textTransform: 'none', fontSize: '1.2rem', paddingX: 2, color: theme.palette.black.main }}
          >
            {page}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'right', flex: 1 }}>
        <IconButton><TwitterIcon fontSize='large' sx={{color: '#55ACEE'}} /></IconButton>
        <IconButton><GitHubIcon fontSize='large' sx={{color: theme.palette.black.main}} /></IconButton>
      </Box>
    </Toolbar>
  );
}

const MobileTopBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Toolbar disableGutters={true}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <MobileLogo />

      <Box sx={{ display: 'flex', justifyContent: 'right', flex: 1 }}>
        <Account />
      </Box>
    </Toolbar>
)};

const Account = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: 'flex',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>
  );
}

const MobileLogo = ({ sx, ...props }: BoxProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', ...sx }} {...props}>
      <AdbIcon sx={{ display: 'flex', mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: 'flex',
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>
    </Box>
  );
}

export default TopBar;