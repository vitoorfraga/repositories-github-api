import React from 'react';
import darkModeIcon from './../../images/icons/dark-mode.png'
import lightModeIcon from './../../images/icons/light-mode.png'

function ThemeSwitcher() {

  const [theme, setTheme] = React.useState('dark-mode')

  
  React.useEffect(() => {
    const html = document.querySelector('html')
    if (localStorage.getItem('user-theme') === null) {
      setTheme('dark-mode')
      window.localStorage.setItem('user-theme', 'dark-mode')
      html.classList.add('dark-mode')
    }
    else {
      const localStorageTheme = localStorage.getItem('user-theme')
      setTheme(localStorageTheme)
      html.classList.add(localStorageTheme)
    }
    html.classList.toggle(theme)
  }, [])


  const handleClick = () => {

    const localStorageTheme = localStorage.getItem('user-theme')
    setTheme(localStorageTheme)
    const html = document.querySelector('html')
    
    if (theme == 'dark-mode') {
      html.classList.remove('dark-mode')
      html.classList.add('light-mode')
      localStorage.setItem('user-theme', 'light-mode')
      setTheme('light-mode')
    } else if (theme == 'light-mode') {
      html.classList.remove('light-mode')
      html.classList.add('dark-mode')
      setTheme('dark-mode')
      localStorage.setItem('user-theme', 'dark-mode')
    }

  }

  return (
    <div onClick={() => handleClick()}>
      <img src={theme === 'dark-mode' ? darkModeIcon : lightModeIcon} alt='Icone do tema.' />
    </div>
  );
}

export default ThemeSwitcher;