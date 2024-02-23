import NavigationItem from "./NavigationItem";
import './style.css'

const navigation = [
  {id: '0', url: '/services', text: 'Services'},
  {id: '1', url: '/our-works', text: 'Our Works'},
  {id: '2', url: '/expertise', text: 'Expertise'},
  {id: '3', url: '/blog', text: 'Blog'},
  {id: '4', url: '/bontact', text: 'Contact'},
]

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation-ul">
        {navigation.map(item => {
          return <li key={item.id} className="navigation-li">
            <NavigationItem 
              label={item.text}
              url={item.url}
            />
          </li>
        })}
      </ul>
    </nav>
  )
};

export default Navigation