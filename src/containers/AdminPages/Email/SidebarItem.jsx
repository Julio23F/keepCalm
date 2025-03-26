const SidebarItem = ({ icon: Icon, text, count, active }) => (
    <div className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer ${active ? 'bg-[#1A1A1A] text-white' : 'hover:bg-gray-100'}`}>
      <div className="flex items-center space-x-4">
        <Icon className="w-5 h-5" />
        <span>{text}</span>
      </div>
      {count && <span className="text-sm">{count}</span>}
    </div>
);

export default SidebarItem;