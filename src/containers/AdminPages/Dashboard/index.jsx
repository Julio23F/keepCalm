import React, { useState } from 'react';
import { 
  Filter,
  SortAsc,
  MoreHorizontal,
  Plus,
} from 'lucide-react';
import Avatar from '@mui/material/Avatar';
import ProjectCard from "../../../components/Card/ProjectCard";
import ModalModal from "../../../components/Modal/ProjectModal";
import { createUseStyles } from "react-jss";
import styles from './dashboard-jss'; 
const useStyles = createUseStyles(styles);

const Dashboard = () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Schedule Me An Appointment With My Endocrine...",
      category: "Appointment",
      status: "In Review",
      priority: "High",
      daysLeft: 5,
    },
    {
      id: 2,
      title: "Track Medicine Delivery",
      category: "Medical",
      status: "Draft",
      priority: "Medium",
      daysLeft: 12,
    },
  ]);

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
      <div className={classes.container}>
        <h3 className={classes.title}>Projects</h3>
        <div className="grid grid-cols-4 gap-4">
          {listProjects.map((category, index) => (
            <ProjectCard 
                category={category}
                onClick={handleClickOpen}
            />
          ))}
        </div>
      </div>

      {/* Tasks */}
        <div className={classes.container}>
            <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
                <Filter size={20} className={classes.icon} />
                <SortAsc size={20} className={classes.icon} />
                <span className="text-gray-400">Hide</span>
                <MoreHorizontal size={20} className={classes.icon} />
            </div>
            <button className={classes.button}>
                <Plus size={20} />
                <span>New Member</span>
            </button>
            </div>

            {/* Task List */}
            <div className="space-y-4">
            {tasks.map((task) => (
                <div key={task.id} className={classes.taskCard}>
                <div>
                    <h4 className={classes.taskTitle}>{task.title}</h4>
                    <p className={classes.taskCategory}>{task.category}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Avatar className={classes.memberStatus} variant="rounded">
                        {task.status}
                    </Avatar>
                    <Avatar className={classes.memberStatus} variant="rounded">
                        {task.priority}
                    </Avatar>
                    {/* <span className={`${classes.taskLabel} 
                    ${task.status === 'In Review' ? 'bg-purple-100 text-purple-600' :
                        task.status === 'Draft' ? 'bg-gray-100 text-gray-600' : ''}`}>
                    {task.status}
                    </span>
                    <span className={`${classes.taskLabel} 
                    ${task.priority === 'High' ? 'bg-red-100 text-red-600' :
                        task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' : ''}`}>
                    {task.priority}
                    </span> */}
                    <span className={classes.taskDaysLeft}>{task.daysLeft} Days left</span>
                    <MoreHorizontal size={20} className={classes.icon} />
                </div>
                </div>
            ))}
            </div>
        </div>
        <ModalModal 
            open={open}
            onClose={() => setOpen(false)}
        />
    </>
  );
};

export default Dashboard;
