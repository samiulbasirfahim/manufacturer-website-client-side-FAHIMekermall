import { useState } from "react"

const App = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('isDarkTheme'))
	const handleDarkTheme = () => {
		localStorage.setItem('isDarkTheme', !isDarkTheme)
		setIsDarkTheme(!isDarkTheme)
	}
	return (
		<div className="min-h-screen" data-theme={isDarkTheme ? 'dark' : 'mytheme'}>
			<button class="btn btn-primary" onClick={handleDarkTheme}>Button</button>
		</div>
	)
}
export default App
