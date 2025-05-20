import MediaPlayer from '@/components/MediaPlayer';
import Suggestion from '@/components/Suggestion';
import DisplayComments from '@/components/DisplayComments';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          StreamSpace
        </h1>
      </header>
      <main className="flex flex-col lg:flex-row gap-6 p-6 flex-grow">
        <section className="w-full lg:w-2/3 bg-white rounded-2xl shadow-md p-4 border border-pink-300">
          <MediaPlayer />
        </section>
        <aside className="w-full lg:w-1/3 bg-white rounded-2xl shadow-md p-4 border border-pink-300">
          <Suggestion />
        </aside>
      </main>
      <section className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-md p-4 border border-pink-300">
          <DisplayComments />
        </div>
      </section>
      <footer className="p-4 text-center bg-pink-800 text-white">
        <p className="text-sm">© 2024 StreamSpace. All rights reserved.</p>
      </footer>
    </div>
  );
}
