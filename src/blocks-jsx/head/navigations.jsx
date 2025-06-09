function Nav() {
  
  const sections = [
    {aboutMe: 'Обо мне'},
    {portfolio: 'Портфолио'},
    {price: 'Цены'},
    {contacts: 'Контакты'}
  ]
  
  return (
      <nav>
        <ul>
          {sections.map((item, index) => {
            return (
              <li key={index}><a href={`#${Object.keys(item)}`} >{Object.values(item)}</a></li>
            )
          })}
        </ul>
      </nav>
  )
}

export default Nav