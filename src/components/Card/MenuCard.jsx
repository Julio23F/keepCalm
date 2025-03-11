import { 
    ChevronRight
} from 'lucide-react';
import { Typography, IconButton, Avatar } from '@mui/material';
import { createUseStyles } from "react-jss";
import styles from './card-jss'; 
const useStyles = createUseStyles(styles);

const MenuCard = ({menu}) => {
    const classes = useStyles();

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase();
      };
    return (
        <div
            key={"index"}
            className={classes.projectCard}
        >
            <div className={classes.projectCardHeader}>
                <Avatar className={classes.projectAvatar} variant="rounded">
                    {capitalizeFirstLetter(menu.title)}
                </Avatar>
            </div>
            <div className={classes.projectTitle}>
                <Typography variant="body2">
                    {menu.title}
                </Typography>
            </div>
        </div>
    )
}

export default MenuCard;