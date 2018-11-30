import ReactDom from 'react-dom';

import Header from './components/header/index';
import Footer from './components/footer/index';
import Main from './components/main/index';

import './reset.scss';
import './styles.scss';

const Wrapper = (
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>
)

ReactDom.render( Wrapper, document.getElementById('app') );