import ReactMarkdown from "react-markdown"

const Layout = ({ children, global }) => {
  function toggleMenu(){
    document.getElementById('menuIcon').classList.toggle('activeMenu');
    document.getElementById('menu').classList.toggle('activeMenu');
  }
  return(
    <div>
      <div className="menu-icon" id="menuIcon" onClick={toggleMenu}></div>
      <div className="menu" id="menu">
        <ReactMarkdown children={global.attributes.info} />
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Layout
