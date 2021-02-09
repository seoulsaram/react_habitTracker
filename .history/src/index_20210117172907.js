import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //root라는 아이디를 가진 요소에 제일 상위에 있는 App이라는 컴포넌트를 연결할거다.
  document.getElementById('root')
  //index.html에 id=rood인 div를 찾아서 이 요소에 rootcomponent를 연결시켜준다.
);
