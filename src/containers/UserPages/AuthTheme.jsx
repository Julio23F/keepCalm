import { Mountain } from 'lucide-react';

const AuthTheme = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
            <img 
            src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
            alt="Purple desert landscape"
            className="object-cover w-full h-full"
            style={{borderRadius: '10px'}}
            />
            <div className="absolute inset-0 bg-purple-900/30" />
            
            {/* Logo and Back Button */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Mountain className="h-6 w-6 text-white" />
                <span className="text-white text-xl font-semibold">KeepCalm</span>
            </div>
            </div>

            <div className="absolute bottom-20 left-0 w-full px-12">
            <h1 className="text-white text-4xl font-semibold mb-4">
                Less work,<br />For better result
            </h1>
            <div className="flex space-x-2">
                <div className="w-8 h-1 bg-white/30 rounded" />
                <div className="w-8 h-1 bg-white rounded" />
                <div className="w-8 h-1 bg-white/30 rounded" />
            </div>
            </div>
        </div>
    )
}

export default AuthTheme;