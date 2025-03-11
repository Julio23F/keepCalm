import React, { useState } from 'react';
import { Users, Plus } from 'lucide-react';
import { createUseStyles } from "react-jss";
import styles from './calendar-jss'; 

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
    <div className={classes.container}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={classes.title}>Menu calendar</h1>
          <div className="flex gap-4">
            {/* <div className="flex bg-[#25262b] rounded-md overflow-hidden">
              <button className="px-4 py-2 hover:bg-[#373a40] transition-colors">Week</button>
              <button className="px-4 py-2 bg-[#373a40]">Next</button>
            </div> */}
            <button className={classes.buttonAddMenu}>
                <Plus size={20} />
                <span>New Menu</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1">
          {days.map((day) => (
            <div key={day} className={`${classes.dayContainer} ${day === "WED 20" && classes.dateToday}`}>
              <h2 className={classes.dayTitle}>{day}</h2>

              <div className="space-y-2">
                {menus[day]?.map((task) => (
                  <div
                    key={task.id}
                    className={`${selectedTask === task.id ? classes.selectedTaskCard: classes.taskCard}`}
                    onClick={() => handleCardClick(task.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className={
                        `${classes.priorityIndicator} ${
                          task.isAllowed ? classes.lowPriority : classes.highPriority}`
                      } />
                    </div>
                    <div style={{lineHeight: '0.8em'}}>
                      <h3 className={`${selectedTask === task.id ? classes.selectedTaskTitle: classes.taskTitle}`}>{task.title}</h3>
                      <p className="text-gray-400" style={{fontSize: "0.7em"}}>Repas</p>
                    </div>
                    {(task.participants) && (
                      <div className={classes.taskDetails}>
                        {task.participants && (
                          <div className="flex items-center gap-1">
                            <Users size={14} />
                            <span>{task.participants}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuCalendar;
