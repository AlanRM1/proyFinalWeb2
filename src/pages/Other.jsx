import './Other.css';
import Footer from '../components/Footer';
import errorpage from '../assets/img/404error.avif';

const Other = () => {
  return (
    <div>
        <img src={errorpage}/>
        <Footer></Footer>
    </div>
  );
};

export default Other;
