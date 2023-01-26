import vocab from './vocab'
import './App.css';
import Box from './Box';

export default function App() {
  return (
    <div className="App">
            Welcome to LinguaTour!
            <p> Match the following words </p>
 
 
        <Box vocab={vocab}></Box>

    </div>
  );
}
