import MenuItem from '@mui/material/MenuItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import Assignment from '@mui/icons-material/Assignment';
import LowPriority from '@mui/icons-material/LowPriority';

const PREFIX = 'auth_';

const HAuthMenuItems = ({ 
    createCarverMatrixHandler,
    createPlanHandler
}) => [
    <MenuItem key={PREFIX + 1} onClick={ createCarverMatrixHandler }>
        <ListItemIcon>
            <LowPriority fontsize="small" />
        </ListItemIcon> 
        Create Carver Matrix
    </MenuItem>,
    <MenuItem key={PREFIX + 2} onClick={ createPlanHandler }>
        <ListItemIcon>
            <Assignment fontsize="small" />
        </ListItemIcon> 
        Create Plan
    </MenuItem>
];

export default HAuthMenuItems;
