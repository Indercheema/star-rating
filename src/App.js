import './style/index.css';
import StarRating from './components/StarRating';
import { useState } from 'react';
import Dialog from './components/Dialog';
function App() {
  const [dialog, setDialog] = useState(false);
  const handleDialog = () => {
    setDialog(!dialog);
  }
  return (
    <div className="container">
      <StarRating />
      <button className='open-btn' onClick={handleDialog}>Live Chat</button>
      <Dialog
        checkDialogOpen={dialog}
        closeDialog={handleDialog}
      />
    </div>
  );
}

export default App;
