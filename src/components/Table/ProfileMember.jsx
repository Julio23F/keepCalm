import Avatar from '@mui/material/Avatar';
import { 
    MoreHorizontal,
  } from 'lucide-react';
import { createUseStyles } from "react-jss";
import {Box} from "@mui/material";

import styles from './table-jss'; 
const useStyles = createUseStyles(styles);

const ProfileMember = ({member}) => {
    const classes = useStyles();
    return (
        <Box key={member.id} className={classes.memberCard}>
            <Box>
                <h4 className={classes.memberTitle}>{member.name}</h4>
                <p className={classes.memberCategory}>{member.email}</p>
            </Box>
            <Box className="flex items-center space-x-4">
                <Avatar className={classes.memberStatus} variant="rounded">
                    {member.type}
                </Avatar>
                <Avatar className={classes.memberStatus} variant="rounded">
                    {member.type}
                </Avatar>
                <span className={classes.memberDaysLeft}>{member.type} Days left</span>
                <MoreHorizontal size={20} className={classes.icon} />
            </Box>
        </Box>
    );
}

export default ProfileMember;