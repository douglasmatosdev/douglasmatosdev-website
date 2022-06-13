import type { NextPage } from 'next'
import { HomeHero, Navbar } from '../components'

import { navigation, profile } from '../utils'

const Home: NextPage = () => {
  return (
    <>
      <Navbar
        navigation={navigation}
        gravatar={profile.gravatar}
        nickName={profile.nickName}
      />
      <HomeHero
        title={profile.displayname}
        subtitle={profile.description}
      />
    </>
  )
}

export default Home
