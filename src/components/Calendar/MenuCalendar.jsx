import React, { useState } from 'react';
import { Users, Plus } from 'lucide-react';
import { createUseStyles } from "react-jss";
import styles from './calendar-jss'; 
import { 
  Button,
  Box
} from "@mui/material";
const useStyles = createUseStyles(styles);

const MenuCalendar = () => {
  const classes = useStyles();

  const [selectedTask, setSelectedTask] = useState(null);

  const days = ['MON 18', 'TUE 19', 'WED 20', 'THU 21', 'FRI 22'];

  const menus = {
    'MON 18': [
      {
        id: 1,
        title: 'Poisson frit',
        isAllowed: true,
        participants: 3
      },
      {
        id: 2,
        title: 'Haricots',
        isAllowed: false,
        participants: 3
      }
    ],
    'WED 20': [
      {
        id: 3,
        title: 'Légumes',
        isAllowed: true,
        participants: 3
      },
      {
        id: 4,
        title: 'Boulette Poisson fritPoisson frit',
        isAllowed: true,
        participants: 3
      }
    ],
    'THU 21': [
      {
        id: 5,
        title: 'Viande',
        isAllowed: true,
        participants: 3
      },
      {
        id: 6,
        title: 'Légumes',
        isAllowed: false,
        participants: 3
      }
    ]
  };

  const handleCardClick = (taskId) => {
    setSelectedTask(taskId === selectedTask ? null : taskId);
  };

  return (
    <Box className={classes.container}>
      <Box className="max-w-7xl mx-auto">
        <Box className="flex justify-between items-center mb-8">
          <h1 className={classes.title}>Menu calendar</h1>
          <Box className="flex gap-4">
            {/* <Box className="flex bg-[#25262b] rounded-md overflow-hidden">
              <button className="px-4 py-2 hover:bg-[#373a40] transition-colors">Week</button>
              <button className="px-4 py-2 bg-[#373a40]">Next</button>
            </Box> */}
            {/* <button className={classes.buttonAddMenu}>
                <Plus size={20} />
                <span>New Menu</span>
            </button> */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: 'capitalize'
              }}
            >
              <Plus size={20} />
              <span>New Menu</span>
            </Button>
          </Box>
        </Box>

        <Box className="grid grid-cols-5 gap-1">
          {days.map((day) => (
            <Box key={day} className={`${classes.dayContainer} ${day === "WED 20" && classes.dateToday}`}>
              <h2 className={classes.dayTitle}>{day}</h2>

              <Box className="space-y-2">
                {menus[day]?.map((task) => (
                  <Box
                    key={task.id}
                    className={`${selectedTask === task.id ? classes.selectedTaskCard: classes.taskCard}`}
                    onClick={() => handleCardClick(task.id)}
                  >
                    <Box className="flex items-center justify-between">
                      <Box className={
                        `${classes.priorityIndicator} ${
                          task.isAllowed ? classes.lowPriority : classes.highPriority}`
                      } />
                    </Box>
                    <Box style={{lineHeight: '0.8em'}}>
                      <h3 className={`${selectedTask === task.id ? classes.selectedTaskTitle: classes.taskTitle}`}>{task.title}</h3>
                      <p className="text-gray-400" style={{fontSize: "0.7em"}}>Repas</p>
                    </Box>
                    {(task.participants) && (
                      <Box className={classes.taskDetails}>
                        {task.participants && (
                          <Box className="flex items-center gap-1">
                            <Users size={14} />
                            <span>{task.participants}</span>
                          </Box>
                        )}
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default MenuCalendar;
