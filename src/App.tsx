import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import InterstateTrade from './pages/InterstateTrade'
import Login from './pages/Login'
import Signup from './pages/Signup'
import StateEconomySearch from './pages/StateEconomySearch'
import StateSearch from './pages/StateSearch'

function App() {

    let startRoute=<Home/>;
    if(localStorage.getItem("isLoggedIn")===null)
    startRoute=<Signup/>
    if(localStorage.getItem("isLoggedIn")==="false")
    startRoute=<Login/>

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1 className='headerTitle'>Focus Fullstack Interview Exercise</h1>
                </header>
                <nav
                    style={{
                        borderBottom: 'solid 1px',
                        paddingBottom: '1rem',
                        marginBottom: '1rem',
                        textAlign: 'center',
                    }}
                >
                    <Link to="/" className="navLinks">Home</Link> |
                    <Link to="/states" className="navLinks">States Search Example</Link> |{' '}
                    <Link to="/trade" className="navLinks">Interstate Trade Search</Link> |{' '}
                    <Link to="/economy">State Economy Search</Link> |{' '}
                    {localStorage.getItem("isLoggedIn")==="false" && <Link to="/login" className="navLinks">Login</Link>}
                    {localStorage.getItem("isLoggedIn")==="false" && " | "}
                    {localStorage.getItem("isLoggedIn")==="true" && <a onClick={() => {
                        localStorage.setItem("isLoggedIn", "false")
                        window.location.href="/"
                    }}>Logout</a>}
                    {localStorage.getItem("isLoggedIn")==="false" && <Link to="/signup" className="navLinks">Signup</Link>}
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/states" element={<StateSearch />} />
                    <Route path="/trade" element={<InterstateTrade />} />
                    <Route path="/economy" element={<StateEconomySearch />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
