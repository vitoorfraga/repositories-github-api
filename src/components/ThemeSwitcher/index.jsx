import React from 'react';
import darkModeIcon from './../../images/icons/dark-mode.png'
import lightModeIcon from './../../images/icons/light-mode.png'

function ThemeSwitcher() {

  const [theme, setTheme] = React.useState('dark-mode')

  React.useEffect(() => {
    if (localStorage.getItem('user-theme') === null) {
      console.log('nenhum tema anterior')
      setTheme('dark-mode')
    }
    else {
      const localStorageTheme = localStorage.getItem('user-theme')

      console.log(`Valor do localStorage: ${localStorageTheme}`)
      setTheme(localStorageTheme)
    }

    const html = document.querySelector('html')
    html.classList.toggle(theme)
  }, [])


  const handleClick = () => {
    const localStorageTheme = localStorage.getItem('user-theme')

    console.log(localStorageTheme)
    const html = document.querySelector('html')
    html.classList.toggle('light-mode')

    if (theme == 'dark-mode') {
      localStorage.setItem('user-theme', 'dark-mode')
      setTheme('light-mode')
    } else if (theme == 'light-mode') {
      setTheme('dark-mode')
      localStorage.setItem('user-theme', 'light-mode')
    }

  }

  return (
    <div onClick={() => handleClick()}>
      <img src={theme === 'dark-mode' ? darkModeIcon : lightModeIcon} alt='Icone do tema.' />
    </div>
  );
}

export default ThemeSwitcher;