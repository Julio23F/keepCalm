import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  FileText, 
  Receipt, 
  MessageCircle,
  Settings,
  HelpCircle,
  Search,
  Bell,
  Filter,
  SortAsc,
  MoreHorizontal,
  Plus
} from 'lucide-react';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Schedule Me An Appointment With My Endocrine...",
      category: "Appointment",
      status: "In Review",
      priority: "High",
      daysLeft: 5
    },
    {
      id: 2,
      title: "Track Medicine Delivery",
      category: "Medical",
      status: "Draft",
      priority: "Medium",
      daysLeft: 12
    }
  ]);

  const categories = [
    { icon: <LayoutDashboard size={20} />, name: "Dashboard" },
    { icon: <CheckSquare size={20} />, name: "My Task", active: true },
    { icon: <Calendar size={20} />, name: "Meal Planner" },
    { icon: <FileText size={20} />, name: "Documents" },
    { icon: <Receipt size={20} />, name: "Receipts" },
    { icon: <MessageCircle size={20} />, name: "Chats" },
  ];

  const recommendedCategories = [
    { icon: "🏠", title: "Home Help" },
    { icon: "📅", title: "Plan an event" },
    { icon: "📦", title: "Return a package" },
    { icon: "🎁", title: "Send a gift" },
    { icon: "📋", title: "Schedule an appointment" },
    { icon: "🛂", title: "Get a passport" },
    { icon: "🎨", title: "Find a kid's activity" },
    { icon: "✈️", title: "Plan a trip" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Sundays.</h1>
        </div>
        
        <div className="space-y-1">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer
                ${category.active ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100'}`}
            >
              {category.icon}
              <span>{category.name}</span>
              {category.name === "Chats" && (
                <span className="ml-auto bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Settings */}
        <div className="absolute bottom-8 space-y-2">
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Settings size={20} />
            <span>Settings</span>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <HelpCircle size={20} />
            <span>Help & Support</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">My Task</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search or type a command"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64"
              />
            </div>
            <Bell size={24} className="text-gray-600 cursor-pointer" />
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Recommended Categories</h3>
          <div className="grid grid-cols-4 gap-4">
            {recommendedCategories.map((category, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-purple-500"
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm">{category.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-gray-400" />
              <SortAsc size={20} className="text-gray-400" />
              <span className="text-gray-400">Hide</span>
              <MoreHorizontal size={20} className="text-gray-400" />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Plus size={20} />
              <span>New Project</span>
            </button>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div>
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-sm text-gray-500">{task.category}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm
                    ${task.status === 'In Review' ? 'bg-purple-100 text-purple-600' : 
                      task.status === 'Draft' ? 'bg-gray-100 text-gray-600' : ''}`}>
                    {task.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm
                    ${task.priority === 'High' ? 'bg-red-100 text-red-600' :
                      task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' : ''}`}>
                    {task.priority}
                  </span>
                  <span className="text-sm text-gray-500">{task.daysLeft} Days left</span>
                  <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;