import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex flex-col gap-2.5'>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer