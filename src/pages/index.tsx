import type { NextPage } from 'next'
import { Footer, HomeHero, Navbar } from '../components'

import { navigation, profile } from '../utils'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import Studies from './studies'

const Home: NextPage = () => {
  return (
    <>
      <HomeHero
        title={profile.displayName}
        subtitle={profile.description}
      />
    </>
  )
}

export default Home
