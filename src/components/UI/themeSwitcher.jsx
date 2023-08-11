import { useTheme } from '../../hooks/useTheme'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  function handleDarkThemeClick() {
    setTheme('dark')
  }

  function handleLightThemeClick() {
    setTheme('light')
  }

  function handleCheckboxChange(event) {
    if (event.target.checked) {
      handleDarkThemeClick()
    } else {
      handleLightThemeClick()
    }
  }

  return (
    <div className='themeSwitcher'>
      <input
        type='checkbox'
        onChange={handleCheckboxChange}
        checked={theme === 'dark'}
      />
    </div>
  )
}
