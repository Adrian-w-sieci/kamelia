import photos from '@/app/photos';
import App from './app'
import Nav from '../ui/nav'

export default function Page() {
  return (
    <main>
      <div className="w-full h-[10%] fixed top-0 left-0 z-50 bg-[linear-gradient(to_bottom,_rgb(15,15,15),_rgb(15,15,15),_rgb(15,15,15),_rgb(15,15,15),_transparent)]">
        <Nav />
      </div>
      <div className="mt-[16%] lg:mt-[6%]">
        <App photos={photos} />
      </div>
    </main>
  )
}