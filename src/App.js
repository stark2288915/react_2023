import logo from './logo.svg';
import './App.css';
import SimpsonsComponent from "./components/Simpsons/SimpsonsComponent";


function App() {
  return (
    <div className="App">
        <SimpsonsComponent name={'Bart Simpson'} pic={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
        <SimpsonsComponent name={'Homer Simpson'} pic={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
        <SimpsonsComponent name={'Maggi Simpson'} pic={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
        <SimpsonsComponent name={'Lisa Simpson'} pic={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
        <SimpsonsComponent name={'Marge Simpson'} pic={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}/>
    </div>
  );
}

export default App;
