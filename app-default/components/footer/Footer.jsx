export default function Footer() {
  return (
    <footer className="footer flex justify-center flex-wrap bg-neutral text-neutral-content items-center p-1 mb-0 w-auto h-[200px] mt-60 ">
      <div className="flex flex-wrap justify-center gap-4 mr-3">
        <div>
          <p>Copyright © {new Date().getFullYear()} Kaleb Pierce</p>
        </div>
        <div className="flex flex-row gap-2">
          <p>Made using </p>
          <a className="underline" href="https://nextjs.org/" target="_blank">
            Nextjs
          </a>
          <p>and</p>
          <a className="underline" href="https://daisyui.com/" target="_blank">
            Daisy UI
          </a>
        </div>
      </div>
      <nav className="flex gap-3">
        {/* GitHub */}
        <a
          href="https://github.com/kpierc11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 2.2 2.7 2.3.6-.5.9-1 .9-1.7-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11.2 11.2 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.5-5.4 5.8.4.3.9 1 .9 2.1v3.1c0 .3.2.7.8.6A11.6 11.6 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kaleb-pierce-a829671b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M20.45 20.45h-3.55v-5.4c0-1.3 0-3-1.85-3s-2.1 1.4-2.1 2.9v5.5H9.4V9h3.4v1.6h.05c.5-1 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.4v6.4zM5.35 7.35a2.06 2.06 0 1 1 0-4.1 2.06 2.06 0 0 1 0 4.1zM7.1 20.45H3.6V9h3.5v11.45zM22.25 0H1.75C.8 0 0 .8 0 1.75v20.5C0 23.2.8 24 1.75 24h20.5c.95 0 1.75-.8 1.75-1.75V1.75C24 .8 23.2 0 22.25 0z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
}
