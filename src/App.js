import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Chat from './components/Chat.jsx';

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
