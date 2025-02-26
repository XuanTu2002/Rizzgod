import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import BottomBar from '../components/BottomBar';
import ScreenshotUpload from '../components/ScreenshotUpload';

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-9 main-content">
        <Head>
          <title>Rizzgod</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <a className="text-blue-600" href="#">Rizzgod!</a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">pages/index.js</code>
          </p>

          <ScreenshotUpload />
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>

        <BottomBar />
      </div>
    </div>
  );
}
