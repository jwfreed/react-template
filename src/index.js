module.exports = () => {
    import 'core-js/stable'
    import 'regenerator-runtime/runtime'
    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App.js'
    return ReactDOM.render(<App />, document.getElementById('root'))
}
