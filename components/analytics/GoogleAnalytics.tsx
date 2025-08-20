export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA4_ID;
  if (!id) return null;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
          gtag('config', '${id}');
        `,
        }}
      />
    </>
  );
}
