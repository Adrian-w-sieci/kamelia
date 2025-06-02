

import photos from '@/app/photos';
import App from './app'
import Nav from '../ui/nav'

export default function Page() {
  return (
    <main>
      <div>
      </div>
      <div className="mt-[16%] lg:mt-[6%]">
        <App photos={photos} />
      </div>
    </main>
  )
}