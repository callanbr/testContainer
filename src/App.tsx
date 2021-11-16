import styles from './app.module.scss';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/Routes';

export const App = () => {
  return (
    <div className={styles}>
      <Router basename="/">
        <Link to="/"> Home!</Link>
        <Link to="/example"> ExamplePage</Link>
        <Routes />
      </Router>
    </div>
  );
};
