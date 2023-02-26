import React from 'react';
import darkModeIcon from './../../images/icons/dark-mode.png'
import lightModeIcon from './../../images/icons/light-mode.png'

function ThemeSwitcher() {

  const [theme, setTheme] = React.useState('dark-mode')

  const handleClick = () => {
    const html = document.querySelector('html')
    html.classList.toggle('light-mode')

    if(theme === 'dark-mode'){
      setTheme('light-mode')
    } else{
      setTheme('dark-mode')
    }
  }

  return (
    <div onClick={() => handleClick()}>
        <img src={theme === 'dark-mode' ? darkModeIcon : lightModeIcon} alt='Icone do tema.' />
    </div>
  );
}

export default ThemeSwitcher;