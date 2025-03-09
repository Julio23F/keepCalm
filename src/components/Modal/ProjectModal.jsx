import React from "react";
import { Drawer, Typography, Box, IconButton, Chip, Avatar } from "@mui/material";
import { X, Clock, Pencil } from "lucide-react";
import { createUseStyles } from "react-jss";
import styles from "./modal-jss";

const useStyles = createUseStyles(styles);

const ProjectModal = ({ open, onClose }) => {
    const classes = useStyles();

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box className={classes.drawerContent}>
                {/* Header */}
                <Box className={classes.header}>
                    <Typography variant="h6" fontWeight="bold">
                        Paridental Studio
                    </Typography>
                    <IconButton onClick={onClose}>
                        <X size={24} />
                    </IconButton>
                </Box>

                {/* Status & Date */}
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <Chip label="En cours" className={classes.chip} />
                    <Chip 
                        className={classes.chipDate} 
                        icon={<Clock size={20} color='grey' />} 
                        label="Jul 10 - 14" 
                    />
                    {/* <Typography variant="body2" className={classes.dateText}>
                        📅 Jul 10 - 14
                    </Typography> */}
                </Box>

                {/* Time Info */}
                <Box className={classes.timeInfoContainer}>
                    <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Avatar className={classes.projectTimeInfo} variant="rounded">
                            <Clock size={20} color="#fff" />
                        </Avatar>
                        <Typography variant="body2" color="black">
                            Time spent on this project
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="black" fontWeight="bolder">
                        4 years
                    </Typography>
                </Box>

                {/* Description */}
                <Box className={classes.descriptionProject}>
                    <Typography variant="h6">
                        Description
                    </Typography>
                    <IconButton className={classes.updateDescriptionIcon}>
                        <Pencil size={15} color="#1A1A1A" />
                    </IconButton>
                </Box>
                
                <Typography variant="body2" color="textSecondary">
                    Specializes in the diagnosis and treatment of diseases related to the endocrine system, which includes glands and organs that produce hormones.
                </Typography>

                {/* Member */}
                <Typography variant="h6" className={classes.sectionTitle}>
                    Member
                </Typography>

                <Box className={classes.memberContainer}>
                    <Avatar>J</Avatar>
                    <Box>
                        <Typography fontSize={14} fontWeight="bold">
                            FARALAHY Julio
                        </Typography>
                        <Typography className={classes.memberText}>
                            Dev
                        </Typography>
                    </Box>
                </Box>

                <Box className={classes.memberContainer}>
                    <Avatar>J</Avatar>
                    <Box>
                        <Typography fontSize={14} fontWeight="bold">
                            FARALAHY Julio
                        </Typography>
                        <Typography className={classes.memberText}>
                            Dev
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};

export default ProjectModal;
