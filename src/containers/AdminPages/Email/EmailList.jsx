import { Search} from 'lucide-react';
import EmailItem from './EmailItem';

const EmailList = ({emails}) => (
    <div className="flex-1 bg-white">
      <div className="border-b">
        <div className="flex items-center space-x-4 p-4">
          <div className="flex-1 flex items-center space-x-4">
            {/* <Search className="w-5 h-5 text-gray-500" /> */}
          </div>
          <Search className="w-5 h-5 text-gray-500" />
        </div>
      </div>
  
      <div className="divide-y">
        {emails.map(email => (
          <EmailItem key={email.id} email={email} />
        ))}
      </div>
    </div>
);

export default EmailList;