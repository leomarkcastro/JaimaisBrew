
import { AnimatePresence, motion } from 'framer-motion';

import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import PHome from './pages/PHome';
import PBlogs from './pages/PBlogs';


function App() {

  const location = useLocation(); // location={location} key={location.pathname}

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={ () =>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PHome />
          </motion.div>
        } />
        <Route exact path="/blogs" component={ () =>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PBlogs />
          </motion.div>
        } />
          
        <Redirect from="/" to="/" />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
