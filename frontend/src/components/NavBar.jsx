import { AppBar, Box, Toolbar, Typography, Button, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Tabs = styled( NavLink )`
color:inherit;
`

const NavBar = () =>
{
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Tabs to="/">My App</Tabs>
            </Typography>
            <Tabs to="/register">
              <Button color="inherit">Register</Button>
            </Tabs>
            <Tabs to="/login">
              <Button color="inherit">Login</Button>
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default NavBar;