import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Assignment from '@material-ui/icons/Assignment';
import LowPriority from '@material-ui/icons/LowPriority';

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
