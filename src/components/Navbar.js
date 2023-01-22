import { Component } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Business</h1>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.clName} href='/'>
                                    <i className={item.icon}>{item.title}</i>
                                </a>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;