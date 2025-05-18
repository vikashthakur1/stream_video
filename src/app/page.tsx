import MediaPlayer from '@/components/MediaPlayer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <MediaPlayer />
      </div>
    </main>
  );
}
