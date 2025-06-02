

import photos from '@/app/photos';
import App from './app'

export default function Page() {
  return (
    <main>
      <div>
      </div>
      <div>
        <App photos={photos} />
      </div>
    </main>
  )
}