import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import Layout from '../components/Layout'

export default function Home() {
  const intl = useIntl()

  function getUrl() {
    return process.env.NEXT_PUBLIC_LOCALE == 'en'
      ? 'https://delivery.plus/'
      : process.env.NEXT_PUBLIC_LOCALE == 'de'
        ? 'https://de.delivery.plus/'
        : process.env.NEXT_PUBLIC_LOCALE == 'fr'
          ? 'https://fr.delivery.plus/'
          : process.env.NEXT_PUBLIC_LOCALE == 'es'
            ? 'https://es.delivery.plus/'
            : 'https://delivery.plus/'
  }

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: 'Delivery+ | Über uns' })}
      description={intl.formatMessage({
        defaultMessage:
          'Die Idee hinter Delivery Plus ist, dass jeder seinen eigenen Shop mit Homepage erstellen kann für das eigene Restaurant oder Lieferdienst',
      })}
      noindex={false}
      nofollow={false}
      openGraph={{
        url: getUrl() + 'about',
        type: 'website',
        locale: process.env.NEXT_PUBLIC_LOCALE,
        site_name: intl.formatMessage({
          defaultMessage: 'Delivery+ | Über uns',
        }),
        images: {
          url: getUrl() + 'og-delivery.jpg',
          width: '640',
          height: '610',
          alt: intl.formatMessage({
            defaultMessage: 'Lieferung App',
          }),
          type: 'image/jpeg',
        },
      }}
    >
      <section className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse pb-20'>
        <div className='flex-1'>
          <h1 className='text-center md:text-left font-mono font-extrabold md:text-5xl text-4xl py-6 md:pt-36 pt-12'>
            <FormattedMessage defaultMessage='Über uns' />
          </h1>
          <div className='text-center md:text-left md:text-xl text-lg'>
            <FormattedMessage
              defaultMessage={
                'Von Beginn an hatten wir die Überzeugung, ' +
                'dass jeder Lieferservice die Möglichkeit haben soll, ihr Essen ohne Provision zu verkaufen. ' +
                'Es gibt zwar Alternativmodelle, die ein Bestellsystem ohne Provision anbieten, ' +
                'meistens sind diese Systeme veraltet, zu teuer oder benötigen das manuelle Anlegen vom Anbieter. ' +
                'Das Ziel war von Anfang das Restaurants selber Ihre Homepage, ' +
                'Öffnungszeiten oder Produkte pflegen können und eine moderne Website erhalten, die dem heutigen Standard entsprechen.'
              }
            />
          </div>
        </div>
        <div className='flex-1 p-4 md:pt-24'>
          <div className='flex flex-col md:grid grid-cols-12 text-white'>
            <div className='flex md:contents'>
              <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-delivery pointer-events-none'></div>
                </div>
                <div className='cursor-default w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-delivery shadow text-center'>
                  &#10003;
                </div>
              </div>
              <div className='bg-delivery col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
                <p className='p-1'>
                  <FormattedMessage defaultMessage='Oktober 2021' />
                </p>
                <h3 className='font-semibold text-lg p-1'>
                  <FormattedMessage defaultMessage='Idee' />
                </h3>
              </div>
            </div>

            <div className='flex md:contents'>
              <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-delivery pointer-events-none'></div>
                </div>
                <div className='cursor-default w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-delivery shadow text-center'>
                  &#10003;
                </div>
              </div>
              <div className='bg-delivery col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
                <p className='p-1'>
                  <FormattedMessage defaultMessage='Dezember 2021' />
                </p>
                <h3 className='font-semibold text-lg p-1'>
                  <FormattedMessage defaultMessage='Erster Demoshop' />
                </h3>
              </div>
            </div>

            <div className='flex md:contents'>
              <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-delivery pointer-events-none'></div>
                </div>
                <div className='cursor-default w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-delivery shadow text-center'>
                  &#10003;
                </div>
              </div>
              <div className='bg-delivery col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
                <p className='p-1'>
                  <FormattedMessage defaultMessage='Mitte 2022' />
                </p>
                <h3 className='font-semibold text-lg p-1'>
                  <FormattedMessage defaultMessage='Vollzeit: Entwicklung von Delivery+' />
                </h3>
              </div>
            </div>

            <div className='flex md:contents text-black'>
              <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-300 pointer-events-none'></div>
                </div>
                <div className='cursor-default w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center'>
                  &#128500;
                </div>
              </div>
              <div className='bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
                <p className='p-1'>
                  <FormattedMessage defaultMessage='Voraussichtlich Ende 2022' />
                </p>
                <h3 className='font-semibold text-lg p-1'>
                  <FormattedMessage defaultMessage='Ersten Beta Tests' />
                </h3>
              </div>
            </div>

            <div className='flex md:contents text-black'>
              <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
                <div className='h-full w-6 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-300 pointer-events-none'></div>
                </div>
                <div className='cursor-default w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center'>
                  &#128500;
                </div>
              </div>
              <div className='bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
                <p className='p-1'>
                  <FormattedMessage defaultMessage='Voraussichtlich Anfang 2023' />
                </p>
                <h3 className='font-semibold text-lg p-1'>
                  <FormattedMessage defaultMessage='Liveschaltung' />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
