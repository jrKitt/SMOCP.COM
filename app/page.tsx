export default function Home() {
  return (
    <div 
      className="relative flex min-h-screen items-center justify-center font-sans"
      style={{
        backgroundColor: '#f0f9ff',
        backgroundImage: `
          linear-gradient(to right, rgb(0 0 0 / 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(0 0 0 / 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent"
        style={{ pointerEvents: 'none' }}
      />
      <main className="relative z-10 flex flex-col items-center justify-center gap-8 px-8 text-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-light tracking-tight text-black sm:text-7xl md:text-8xl">
            SMOCP.COM
          </h1>
          <p className="text-lg font-light tracking-wide text-zinc-400 sm:text-xl">
            COMING SOON
          </p>
        </div>
      </main>
      
      <footer className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-2 text-sm text-zinc-500">
        <span>SMOCP</span>
        <a 
          href="https://www.facebook.com/profile.php?id=100083108863117" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-zinc-700 transition-colors hover:text-blue-600"
        >
          <svg 
            className="h-4 w-4" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </a>
      </footer>
    </div>
  );
}
