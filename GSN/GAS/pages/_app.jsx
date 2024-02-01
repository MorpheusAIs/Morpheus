import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
{/*       <a href="https://shipr.dev">
        <div className="w-34 fixed right-0 bottom-0 z-[100] mb-4 mr-4 flex h-7 flex-row items-center rounded-md border border-gray-500 bg-white">
          <img
            src="https://app.shipr.dev/img/logo.png"
            className="h-8 w-8"
            alt="Shipr Logo"
          />
          <p className="pr-1 text-sm">Made with Shipr</p>
        </div>
      </a> */}
    </>
  );
}

export default MyApp;
