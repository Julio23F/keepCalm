const EmailItem = ({email}) => {
    return (
        <div className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer ${!email.read && 'bg-blue-50'}`}>
            <input type="checkbox" className="mr-4 rounded" />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${!email.read ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                {email.avatar}
            </div>
            <div className="flex-1">
            <div className="flex items-center">
                <span className={`font-medium ${!email.read && 'text-blue-600'}`}>{email.sender}</span>
                <span className="text-sm text-gray-500 ml-auto">{email.time}</span>
            </div>
            <div className="text-gray-600">{email.subject}</div>
                <div className="text-sm text-gray-500">{email.preview}</div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
                {email.labels.map((label) => (
                    <span key={label} className="text-xs bg-gray-100 px-2 py-1 rounded">{label}</span>
                ))}
            </div>
        </div>
    )
}

export default EmailItem;