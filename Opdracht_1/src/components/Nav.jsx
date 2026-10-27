function Nav() {

  return (
    <>
        <div className="container-navbar">
            <nav className="navbar">
                <div className="logo">
                    <span className="logo-icon">⚙</span>
                    <div>
                        <h2>ALTECO</h2>
                        <p>Business Template</p>
                    </div>
                </div>

                <div className="nav-links">
                    <a href="#" className="active">HOME</a>
                    <a href="#">ABOUT US</a>
                    <a href="#">SERVICES</a>
                    <a href="#">PAGES</a>
                    <a href="#">SHOP</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTACT US</a>

                    <button className="search-btn">⌕</button>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Nav