import React, { useEffect, useState } from 'react';
import { 
  Filter,
  SortAsc,
  MoreHorizontal,
  Plus,
} from 'lucide-react';
import { 
  Button,
  Box
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {apiGetMembers} from "../../../api/member";
import ProjectCard from "../../../components/Card/ProjectCard";
import ModalModal from "../../../components/Modal/ProjectModal";
import { createUseStyles } from "react-jss";
import styles from './dashboard-jss'; 
import ProfileMember from '../../../components/Table/ProfileMember';
import { useNavigate } from 'react-router-dom';
const useStyles = createUseStyles(styles);

const Dashboard = () => {
  const classes = useStyles();
  const nav = useNavigate();
  const [members, setMembers] = useState();

  const getMembers = async ()  => {
    const resMember = await apiGetMembers();

    if (resMember) {
      console.log("resMember", resMember)
      setMembers(resMember)
    }
  }

  useEffect(() => {
    getMembers();
  }, [])
  // members = [
  //   {
  //     id: 1,
  //     title: "Schedule Me An Appointment With My Endocrine...",
  //     category: "Appointment",
  //     status: "In Review",
  //     priority: "High",
  //     daysLeft: 5,
  //   },
  //   {
  //     id: 2,
  //     title: "Track Medicine Delivery",
  //     category: "Medical",
  //     status: "Draft",
  //     priority: "Medium",
  //     daysLeft: 12,
  //   },
  // ];

  const listProjects = [
    {title: "LAF" },
    {title: "PDL" },
    {title: "Amplify" },
    {title: "DynamicMood" },
    {title: "wordPress" },
  ];

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  
  return (
    <>
      {/* Categories */}
      <Box className={classes.container}>
        <Grid container spacing={3} className='mb-5'>
          <Grid item size={{ md:6}}>
          <h3 className={classes.title}>Projects</h3>
          </Grid>
          <Grid item size={{ md:6}} container justifyContent="flex-end">
            <Button
                variant="contained"
                color="primary"
                onClick={() => nav('/admin/members/add')}
                sx={{
                  textTransform: 'capitalize'
                }}
              >
                <Plus size={20} />
                <span>New Project</span>
              </Button>
          </Grid>
        </Grid>
        <Box className="grid grid-cols-4 gap-4">
          {listProjects.map((category, index) => (
            <ProjectCard
                key={index} 
                category={category}
                onClick={handleClickOpen}
            />
          ))}
        </Box>
      </Box>
      <Box className={classes.container}>
          <Box className="flex items-center justify-between mb-6">
          <Box className="flex items-center space-x-4">
              <Filter size={20} className={classes.icon} />
              <SortAsc size={20} className={classes.icon} />
              <span className="text-gray-400">Hide</span>
              <MoreHorizontal size={20} className={classes.icon} />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => nav('/admin/members/add')}
            sx={{
              textTransform: 'capitalize'
            }}
          >
            <Plus size={20} />
            <span>New Member</span>
          </Button>

          </Box>

          {/* member List */}
          <Box className="space-y-4">
          {members && members.map((member, index) => (
              <ProfileMember
                  key={index}
                  member={member}
              />
          ))}
          </Box>
      </Box>
      <ModalModal 
          open={open}
          onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Dashboard;
