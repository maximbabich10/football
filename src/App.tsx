import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LineUpPage from './pages/LineUpPage';

const App: React.FC = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <LineUpPage />
    </DndProvider>
  );
};

export default App;
