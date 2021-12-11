import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
            <ChatEngine
                height="100vh"
                projectID="3d0f1232-7125-4819-8b31-5e77805533ee"
                userName="Shreya"
                userSecret="123456"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
    );
}

export default App;
