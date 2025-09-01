export default function Head() {
  return (
    <>
      {/* Ensure Safari/iOS uses green status/notch area */}
      <meta name="theme-color" content="#5b6854" />
      {/* PWA/Standalone iOS */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </>
  );
}




