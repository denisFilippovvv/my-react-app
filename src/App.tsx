import Message from './components/Message';

function App() {
  const messageText = "Привет, это тестовое сообщение!";

  return (
    <div className="App">
      <Message text={messageText} />
    </div>
  );
}

export default App;