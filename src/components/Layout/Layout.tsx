import Header from "../Header";
import Router from "../Router";
import  './style.css';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Router />
      </main>
    </div>
  )
}

export default Layout;