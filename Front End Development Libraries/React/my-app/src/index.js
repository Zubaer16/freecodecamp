import react from 'react'
import reactDom from 'react-dom'
import Complexjsx from './components/complexjsx'
import Definehtmlclass from './components/defineHtmlClass'
import TypesOfFood from './components/composeComp'

import Simplejsx from './components/simplejsx'
import Calendar from './components/passpropsstate'
import ToDo from './components/arrayprops'
import ShoppingCart from './components/overrridedefaultprop'
import ShoppingCar from './components/definpropype'
import App from './components/thisprops'

const MyComponent = function () {
  return <div>hi</div>
}

reactDom.render(<App />, document.getElementById('root'))
