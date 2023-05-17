import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import './components/index.css'

import './public/i18n/i18n'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
