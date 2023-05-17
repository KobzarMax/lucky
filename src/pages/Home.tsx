import { useTranslation } from 'react-i18next'

function Home() {
  const { t, i18n } = useTranslation(['home'])
  return <div className="relative overflow-hidden bg-white"></div>
}

export default Home
