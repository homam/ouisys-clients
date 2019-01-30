import * as React from 'react'
import { render } from 'react-dom'
import "@babel/polyfill";
import Root from "./Root"

export default Root

if (!module.hot) render(<Root />, document.querySelector('#root'))

