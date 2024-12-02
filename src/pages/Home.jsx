
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Fearures';
import Projects from '../components/Projects/Projects';
import SecondHeader from '../components/SecondHeader/SecondHeader';
import Blogs from './Blogs';

const Home = () => {
  

    return (
        <>
            
             <Banner/>
             <SecondHeader/>
             <Features/>
             <Blogs/>
             <Projects/>
            
        </>
    );
};

export default Home;