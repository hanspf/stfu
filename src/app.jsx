import '@babel/polyfill';
import 'font-awesome/css/font-awesome.css';
import domdom from '@eirikb/domdom';
import user from './data/user';
import map from './data/map';
import Map from './map.jsx';
import Login from './login.jsx';
import Bedrifter from './bedrifter.jsx';

const dd = domdom();
user(dd);
map(dd);

const view = ({ on, when, set }) => <main>
  {on('info', info => info)}

  {when('route',
    [
      'login', () => <Login/>,
      'bedrift', () => <Bedrifter/>,
      'home', () => <a onClick={() => set('route', 'menu')} class="menu fa fa-3x fa-bars"/>,
      'menu', () => <div class="menu">
      <a class="link" onClick={() => set('route', 'bedrift')}>Toppliste Bedrift</a>
      <a class="menu fa fa-3x fa-close" onClick={() => set('route', 'home')}/>
    </div>
    ])}

  {on('map', () => <Map/>)}
</main>;

dd.append(document.body, view);

dd.trigger('initAuth');
