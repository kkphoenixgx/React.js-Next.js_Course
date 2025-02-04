import '../../Stylesheet/shared/NavBar.css'
import '../../Stylesheet/App.css'

import { useNavigate, useLocation } from 'react-router-dom';
import { Emitter } from '../../utils/eventHandle.js';
import { useState, useEffect, useCallback } from 'react';

export function NavBar() {
  
  const [navigationCollection, setNavigationCollection] = useState([{
    "name": "Home →",
    "path": "/", 
    "key": '0'
  }]);
  
  const navigation = useNavigate();
  const location = useLocation();

  // ------------ main functions ------------

  // Usando useCallback para memorizar a função resetLis
  const resetLis = useCallback((path) => {
    let pathArray = path.split('/');
    let newNavigationCollection = [];

    // Verificar se o último item é '/' para evitar adicionar 'Home' duplicado
    if (pathArray[pathArray.length - 1] === '') {
      pathArray.pop(); // Remove a barra final
    }

    for (let index = pathArray.length - 1; index >= 0; index--) {
      newNavigationCollection.push({
        "name": `${generateName(pathArray[index])}→`,
        "path": `${generatePath(pathArray.join('/'))}`,
        "key": `${index}`
      });
      pathArray.pop(pathArray[index]);
    }

    if (newNavigationCollection.length === 2 && newNavigationCollection[1].name === 'Home→' && newNavigationCollection[0].name === 'Home→') {
      newNavigationCollection.pop(newNavigationCollection.length);
    }
    setNavigationCollection(newNavigationCollection);
  }, []);

  useEffect(() => {
    resetLis(location.pathname);
  }, [location.pathname, resetLis]);
  
  useEffect(() => {
    Emitter.once('pageChange', (props) => {
      resetLis(props.path);
    });
  }, [resetLis]);

  // ------------ side functions ------------

  const handleLi = (event) => {
    navigation(event.target.dataset.path);
    resetLis(event.target.dataset.path);
  };

  const generatePath = (path) => {
    if (path === '') path = '/';
    return path;
  };

  const generateName = (name) => {
    if (name === '') name = 'Home';
    else name = name.toUpperCase();
    return name;
  };

  return (
    <nav id="nav">
      { 
        navigationCollection.map(liObject => (
          <li onClick={handleLi} data-path={liObject.path} key={liObject.key}>
            {liObject.name}
          </li>
        ))
      }
    </nav>
  );
}
