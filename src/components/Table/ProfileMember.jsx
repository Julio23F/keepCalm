import Avatar from '@mui/material/Avatar';
import { 
    MoreHorizontal,
  } from 'lucide-react';
import { createUseStyles } from "react-jss";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import MainCell from "./MainCell";

import styles from './table-jss'; 
const useStyles = createUseStyles(styles);

const ProfileMember = ({member}) => {
    const classes = useStyles();
    return (
        <div key={member.id} className={classes.memberCard}>
            <div>
                <h4 className={classes.memberTitle}>{member.title}</h4>
                <p className={classes.memberCategory}>{member.category}</p>
            </div>
            <div className="flex items-center space-x-4">
                <Avatar className={classes.memberStatus} variant="rounded">
                    {member.status}
                </Avatar>
                <Avatar className={classes.memberStatus} variant="rounded">
                    {member.priority}
                </Avatar>
                <span className={classes.memberDaysLeft}>{member.daysLeft} Days left</span>
                <MoreHorizontal size={20} className={classes.icon} />
            </div>
        </div>
        // <TableBody data-cy="table-body">
        //     {data.map((item, index) => [
        //         <TableRow
        //             key={item.id || index.toString()}
        //             className={classes.memberCard}
        //         >
        //             {anchors.map(
        //             (anchor, key) =>
        //                 anchor.name && (
        //                 <MainCell
        //                     key={key}
        //                     item={item}
        //                     field={anchor.name}
        //                     {...anchor}
        //                 />
        //                 )
        //             )}
        //         </TableRow>,
        //     ])}
        // </TableBody>
    );
}

export default ProfileMember;