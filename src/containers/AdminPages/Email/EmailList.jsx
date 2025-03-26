import { Search} from 'lucide-react';
import EmailItem from './EmailItem';

const EmailList = ({emails}) => {
  const tags = ["React", "JavaScript", "CSS", "HTML", "Node.js"];

  return(
      <div className="flex-1 bg-white">
        <div className="border-b">
          <div className="flex items-center space-x-4 p-4">
            <div className="flex-1 flex flex-wrap items-center space-x-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-black px-3 py-1 rounded-full" style={{fontSize: '0.7em'}}>
                  {tag}
                </span>
              ))}
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
}
  

export default EmailList;