/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_LOCALE == 'en'
      ? 'https://delivery.plus'
      : process.env.NEXT_PUBLIC_LOCALE == 'de'
        ? 'https://de.delivery.plus'
        : process.env.NEXT_PUBLIC_LOCALE == 'fr'
          ? 'https://fr.delivery.plus'
          : process.env.NEXT_PUBLIC_LOCALE == 'es'
            ? 'https://es.delivery.plus'
            : 'https://delivery.plus',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404', '/privacy-policy', '/imprint'],
  /* outDir: 'out', */
  /* alternateRefs: [ */
  /*   { */
  /*     href: 'https://es.example.com', */
  /*     hreflang: 'es', */
  /*   }, */
  /*   { */
  /*     href: 'https://fr.example.com', */
  /*     hreflang: 'fr', */
  /*   }, */
  /* ], */
  alternateRefs:
    process.env.NEXT_PUBLIC_LOCALE == 'de'
      ? [
          {
            href: 'https://delivery.plus',
            hreflang: 'en',
          },
          {
            href: 'https://fr.delivery.plus',
            hreflang: 'fr',
          },
          {
            href: 'https://es.delivery.plus',
            hreflang: 'es',
          },
        ]
      : process.env.NEXT_PUBLIC_LOCALE == 'en'
      ? [
          {
            href: 'https://de.delivery.plus',
            hreflang: 'de',
          },
          {
            href: 'https://fr.delivery.plus',
            hreflang: 'fr',
          },
          {
            href: 'https://es.delivery.plus',
            hreflang: 'es',
          },
        ]
      : process.env.NEXT_PUBLIC_LOCALE == 'fr'
      ? [
          {
            href: 'https://de.delivery.plus',
            hreflang: 'de',
          },
          {
            href: 'https://delivery.plus',
            hreflang: 'en',
          },
          {
            href: 'https://es.delivery.plus',
            hreflang: 'es',
          },
        ]
      : process.env.NEXT_PUBLIC_LOCALE == 'es'
      ? [
          {
            href: 'https://de.delivery.plus',
            hreflang: 'de',
          },
          {
            href: 'https://delivery.plus',
            hreflang: 'en',
          },
          {
            href: 'https://fr.delivery.plus',
            hreflang: 'fr',
          },
        ]
      : [
          {
            href: 'https://de.delivery.plus',
            hreflang: 'de',
          },
          {
            href: 'https://delivery.plus',
            hreflang: 'en',
          },
          {
            href: 'https://fr.delivery.plus',
            hreflang: 'fr',
          },
          {
            href: 'https://es.delivery.plus',
            hreflang: 'es',
          },
        ],
}
