/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_LOCALE == 'en'
      ? 'https://www.delivery.plus'
      : `https://${process.env.NEXT_PUBLIC_LOCALE}.delivery.plus`,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404', '/privacy-policy', '/imprint'],
  alternateRefs: buildAltRef(),
}

function buildAltRef() {
  const altRefs = []
  const languages = [
    'de',
    'dk',
    'en',
    'es',
    'fr',
    'gr',
    'hr',
    'it',
    'nl',
    'pl',
    'pt',
    'ro',
    'se',
  ]
  languages.forEach(lang => {
    if (lang != process.env.NEXT_PUBLIC_LOCALE) {
      const altRef = {
        href:
          lang == 'en'
            ? 'https://www.delivery.plus'
            : `https://${lang}.delivery.plus`,
        hreflang: lang,
      }
      altRefs.push(altRef)
    }
  })
  return altRefs
}
