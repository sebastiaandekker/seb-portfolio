import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'
import HomeProjectListCell from 'src/components/HomeProjectListCell'
import HomeIntro from 'src/components/HomeIntro/HomeIntro'

const HomePage = () => {
  return (
    <HomeLayout>
      <HomeIntro />
      <HomeProjectListCell></HomeProjectListCell>
    </HomeLayout>
  )
}

export default HomePage
