import {Box} from "@mui/material";

const TaskCard = ({tasks}) => {
    return (
        <>
            <Box className="w-70 p-3 border border-gray-200" style={{ marginTop: "1vh", borderRadius: "0.375rem", backgroundColor: "white", height: '43vh' }}>
                <span>Notes</span>
                <Box className="space-y-4 py-4 px-1">
                    {tasks.map((task, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                <span className="text-sm">{task.title}</span>
                            </div>
                            <div className="flex -space-x-2">
                                {task.users.map((user, userIndex) => (
                                    <img
                                        key={userIndex}
                                        src={user}
                                        alt="User"
                                        className="w-6 h-6 rounded-full border-2 border-white"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </Box>
            </Box>
        </>
    );
    
}

export default TaskCard;