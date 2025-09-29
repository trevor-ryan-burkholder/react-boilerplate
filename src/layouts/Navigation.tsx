import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import routes from '../routes/routes';

const Navigation = ({ onNavigate }: { onNavigate?: () => void }) => {
  return (
    <>
      <Divider />
      <List>
        {routes.map((route, index) =>
          route.showInNav ? (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={route.path} onClick={onNavigate}>
                <ListItemText primary={route.desc} />
              </ListItemButton>
            </ListItem>
          ) : null,
        )}
      </List>
      <Divider />
    </>
  );
};

export default Navigation;
