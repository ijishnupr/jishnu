

import menuImage from './img/imagess.png';

function Header() {

    return <nav className="navbar navbar-expand-sm navbar-light na">
        <div className="navbar-brand text-light" >
            <p>Jishnu pr</p>
            
        </div>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <img src={menuImage} style={{width:"26px",height:"26px"}} />
        </button>
        <div
            className="collapse navbar-collapse mr-auto"
            id="navbarNav"
            style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>

                <li className="nav-item">
                  <a className='nav-link text-white small'>HOME</a>
                </li>
                <li>
                    <a href='#expeirence' className='nav-link text-white small'>EXPERIENCE</a>
                </li>
                <li className="nav-item">
                  <a href='#project' className='nav-link text-white small'>PROJECT</a>
                </li>
                <li className="nav-item">
                    <a href='#contact' className='nav-link text-white small'>CONTACT</a>
               </li>

            </ul>
        </div>
    </nav>;
}
export default Header;