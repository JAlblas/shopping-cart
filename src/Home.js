import Navigation from './Navigation'
import Footer from './Footer'

import './Home.css';

function Home() {
  return (
    <div>
        <Navigation />
        <div id="content">
          <h1>Welcome to our shop!</h1>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
