//import logo from './logo.svg';
//import './App.css';
import Header from './Header'
import EnjoyMovies from './EnjoyMovies'
import '../styles/Layout.css'

function App() {
  return (
    <div>
      <Header>
				<h1 className='mv-title'>Edition des films</h1>
			</Header>
    <div className='mv-layout-inner'>
      <EnjoyMovies />
    </div>
    </div>
  );
}

export default App;
