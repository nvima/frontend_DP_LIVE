import * as React from 'react'
import {FormattedMessage, useIntl} from 'react-intl'

import Layout from '../components/Layout'

export default function Home() {
  const intl = useIntl()

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: 'About',
      })}
    >
      <section className='max-w-7xl mx-auto px-4 p-4 pb-20'>
        <h2 className='font-extrabold md:text-5xl text-4xl font-mono py-12'>
          Impressum
        </h2>
        <h2 className='py-4 font-semibold text-lg'>
          Angaben gem&auml;&szlig; &sect; 5 TMG
        </h2>
        <p>Delivery+</p>
        <p>Bestellsystem f&uuml;r Restaurant &amp; Lieferdienste</p>
        <p>Patrick Mirwald</p>
        <p>Hubertusweg 7</p>
        <p>68229 Mannheim</p>

        <h2 className='py-4 font-semibold text-lg'>Kontakt</h2>
        <p>Telefon: +4962148195092</p>
        <p>E-Mail: info@delivery.plus</p>

        <h2 className='py-4 font-semibold text-lg'>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
          Umsatzsteuergesetz:
        </p>
        <p>- in Beantragung -</p>

        <h2 className='py-4 font-semibold text-lg'>EU-Streitschlichtung</h2>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a
            className='underline'
            href='https://ec.europa.eu/consumers/odr/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>
    </Layout>
  )
}
