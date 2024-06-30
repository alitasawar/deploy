import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'
import TopColoredDiv from './TopColoredDiv'
import menuIcon from './../../assets/menu.svg'
import { useState } from 'react'
import { GLOBAL } from '../../Utils/global'
import { getSvg } from '../../Utils/svgGetter'
const Navbar = () => {
    const [active, setActive] = useState('HOME')
    const [menuOpened, setMenuOpened] = useState(false)
    const bigScreen=window.innerWidth>750
    const navItems = ['HOME', 'MEMBER DETAILS', 'SERVICES', 'BLOG', 'PRICING', 'CONTACT']
    return (
        <>
        <nav className={menuOpened ? "MobileUI" : null}>
            <TopColoredDiv colors={GLOBAL.colors} />
            <div className='nav-container'>
                {!menuOpened && <div className="logo">
                    <img src={getSvg("responsive","orangered")} style={{height:"50px"}} alt="logo" />
                    <div className='desc'>
                        <h2>Bravo</h2>
                        <p>The New Dev's.</p>
                    </div>
                </div>}
                {!menuOpened
                    ? <button className="menu-mobile" onClick={() => { setMenuOpened(e => e = !e) }}>
                        <img src={menuIcon} height={32} alt="menu-icon" />
                    </button>
                    : <button className="menu-mobile cross" onClick={() => { setMenuOpened(e => e = !e) }}>
                        <span >X</span>
                    </button>
                }
                {(bigScreen || menuOpened) && <ul>
                    {navItems.map(e => <li key={e}>
                        <Link className={"nav-link " + (e === active ? 'active' : null)} onClick={() => { setActive(e) }} to={e==="HOME"?'/':e.toLowerCase()}>
                        {e}
                        </Link>
                    </li>)}
                </ul>
                }
            </div>
        </nav>
        </>
    )
}

export default Navbar