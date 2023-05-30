import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
  Box,
  BoxProps,
  Menu,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

interface TopBarProps {
  pages: string[],
  openedTab: number,
  handleChangeTab: (event: React.SyntheticEvent<Element, Event>, value: any) => void
}

function TopBar(props: TopBarProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        {!isMobile ? <DesktopTopBar {...props}/> : <MobileTopBar {...props}/>}
      </Container>
    </AppBar>
  );
}

const DesktopTopBar = (props: TopBarProps) => {
  const { pages, openedTab, handleChangeTab } = props;
  const theme = useTheme();

  return (
    <Toolbar disableGutters={false}>
      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row'}} >
        <Box sx={{mr: 2}}>
          <Logo/>
        </Box>
        <DownloadCVMenu/>
      </Box>

      <Box sx={{ flex: 2, justifyContent: 'center', display: 'flex' }}>
        <Tabs
          value={openedTab}
          onChange={handleChangeTab}
          indicatorColor='secondary'
        >
          {pages.map((page) => (
            <Tab
              key={page}
              label={page}
              sx={{ textTransform: 'none', fontSize: '1.2rem', paddingX: 2, color: theme.palette.black.main }}
            />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'right', flex: 1 }}>
        <IconButton><TwitterIcon fontSize='large' sx={{color: '#55ACEE'}} /></IconButton>
        <IconButton><GitHubIcon fontSize='large' sx={{color: theme.palette.black.main}} /></IconButton>
      </Box>
    </Toolbar>
  );
}

const MobileTopBar = (props: TopBarProps) => {
  const { pages } = props;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Toolbar disableGutters={true} sx={{display: {xs: 'flex'}, justifyContent: {xs: 'space-between'}}}>
      <Box sx={{ flex: { sm: 1}, display: 'flex', alignItems: 'center' }}>
        <Box sx={{mr: {sm: 2}}}>
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
        </Box>
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
        <DownloadCVMenu />
      </Box>

      <Box sx={{justifyContent: 'center', flex: {sm: 1}}}>
        <MobileLogo />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'right', flex: {sm: 1} }}>
        <IconButton><GitHubIcon fontSize='large' sx={{color: theme.palette.black.main}} /></IconButton>
      </Box>
    </Toolbar>
)};

const DownloadCVMenu = () => {
  return (
    <Button
      variant='contained'
      size='small'
      color='secondary'
      endIcon={<FileDownloadOutlinedIcon />}
    >
      CV
    </Button>
  );
}

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: 'flex',
        fontWeight: 700,
        color: theme.palette.black.main,
        textDecoration: 'none',
      }}
    >
      MarkTF
    </Typography>
  );
}

const MobileLogo = ({ sx, ...props }: BoxProps) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', ...sx }} {...props}>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          display: 'flex',
          fontWeight: 700,
          color: theme.palette.black.main,
          textDecoration: 'none',
        }}
      >
        MarkTF
      </Typography>
    </Box>
  );
}

export default TopBar;