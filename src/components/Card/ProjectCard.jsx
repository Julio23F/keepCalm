import { 
    ChevronRight
} from 'lucide-react';
import { Typography, IconButton, Avatar } from '@mui/material';
import { createUseStyles } from "react-jss";
import styles from './card-jss'; 
const useStyles = createUseStyles(styles);

const ProjectCard = ({category, onClick}) => {
    const classes = useStyles();

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase();
      };
    return (
        <div
            key={"index"}
            className={classes.projectCard}
            onClick={onClick}
        >
            <div className={classes.projectCardHeader}>
                <Avatar className={classes.projectAvatar} variant="rounded">
                    {capitalizeFirstLetter(category.title)}
                </Avatar>
                <IconButton className={classes.seeMore}>
                    <ChevronRight size={25}/>
                </IconButton>
            </div>
            <div className={classes.projectTitle}>
                <Typography variant="body2">
                    {category.title}
                </Typography>
                <span className={classes.projectMember}>Composé de 3 membres</span>
            </div>
        </div>
    )
}

export default ProjectCard;