import '../Stylesheet/NavBar.css'
import '../Stylesheet/App.css'
import { useNavigate  } from 'react-router-dom';

import {Emitter} from '../utils/eventHandle.js'
import { useState } from 'react';

export function NavBar(){
  
  let [navigationCollection, setNavigationCollection] = useState([{
    "name": "Home →",
    "path": "/", 
    "key": '0'
  }])
  
  let navigation = useNavigate()
    
  // ------------ events ------------

      Emitter.once('pageChange', (props)=>{
        resetLis(props.path)
      })

    // ------------ main functions ------------
    
      // TODO: Navigation
      const handleLi = (event) => {
        navigation(event.target.dataset.path)
        resetLis(event.target.dataset.path);
      }
      const resetLis = (path)=> {
        let pathArray = path.split('/')
        let newNavigationCollection = [];
        
        for (let index = pathArray.length-1; index >= 0; index--) {
          newNavigationCollection.push( {
            "name": `${ generateName( pathArray[index] ) }→`,
            "path": `${ generatePath( pathArray.join('/') )}`,
            "key": `${index}`
          } )
          pathArray.pop(pathArray[index])
        }

        if(newNavigationCollection.length === 2 && newNavigationCollection[1].name === 'Home→' && newNavigationCollection[0].name === 'Home→' ){
          newNavigationCollection.pop(newNavigationCollection.length)
        }
        setNavigationCollection(newNavigationCollection)
      }

    // ------------ side functions ------------

      const generatePath = path =>{
        if(path === '') path = '/';
        return path;
      }
      const generateName = name => {
        if(name === '') name = 'Home';
        else name = name.toUpperCase()
        return name
      }

    return (
      <nav id="nav">
        { 
          navigationCollection.map( liObject => (<li onClick={handleLi} data-path ={liObject.path} key={liObject.key} >{liObject.name}</li>) )

        }
      </nav>
    )
}