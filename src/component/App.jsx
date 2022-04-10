import './App.css';
import Square from './Square';

export default function App() {

  const wordComponents = [];
  for (let i = 0; i < 42; i++){
    let num = Math.floor(Math.random() * 500)
    const list = [];
    if (num%2 == 0){
        const component = <Square color='green'></Square>
        list.push(component);
    } else if (num%3==0){
        const component = <Square color='yellow' ></Square>
        list.push(component);
    } else {
        const component = <Square color='white'></Square>
        list.push(component);
    }
    wordComponents.push(list);
}

  return (
    <body className="page-color">
      <div className="header-text header-box">Welcome!</div>
      <div id="wel-board-container">{wordComponents}</div>
    </body>
    
  );
}
