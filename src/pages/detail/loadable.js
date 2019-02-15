import Loadable from 'react-loadable';
import React from 'react'

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading(){return <div styled="margin:0 auto;padding-top:40px">正在加载</div>},
});

export default ()=>{
    return <LoadableComponent/>
}