export default function robots() {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://successcasting.com";
  void site;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/dashboard"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://successcasting.com"}/sitemap.xml`,
  };
}

