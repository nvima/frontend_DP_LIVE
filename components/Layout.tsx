import { NextSeo } from 'next-seo'
import Head from 'next/head'
import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'
import { LanguageSwitch } from './LanguageSwitch'

export default function Layout({
  title,
  description,
  noindex,
  nofollow,
  openGraph,
  children,
}) {
  const intl = useIntl()

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          {title ||
            intl.formatMessage({
              defaultMessage: 'Delivery Plus',
            })}
        </title>
      </Head>

      <NextSeo
        title={title}
        description={description}
        noindex={noindex}
        nofollow={nofollow}
        openGraph={openGraph}
      />

      <header className='border-b md:h-18 py-4 md:p-0 content-center align-middle w-full'>
        <div className='md:flex grid grid-cols-2 justify-between items-center max-w-7xl mx-auto px-4 content-center align-middle h-full'>
          <Link href='/'>
            <a className='order-1'>
              <h2 className='cursor-pointer inline text-3xl font-extrabold leading-tight content-center align-middle'>
                DELIVERY
                <span className='text-delivery align-none transform -translate-y-4'>
                  +
                </span>
              </h2>
            </a>
          </Link>
          <nav className='font-semibold font-mono md:pt-0 pt-4 md:order-2 order-3 col-span-2 mx-auto flex justify-between gap-8 mobile:gap-4 md:w-auto w-full'>
            <Link href='/about'>
              <a className='cursor-pointer md:mx-12 hover:text-delivery'>
                <FormattedMessage defaultMessage='Über uns' />
              </a>
            </Link>
            <Link href='/faq'>
              <a className='cursor-pointer md:mr-12 hover:text-delivery'>
                <FormattedMessage defaultMessage='FAQ' />
              </a>
            </Link>
            <Link href='/contact'>
              <a className='cursor-pointer md:mr-12 hover:text-delivery'>
                <FormattedMessage defaultMessage='Kontakt' />
              </a>
            </Link>
          </nav>
          <div className='flex justify-between md:order-3 order-2'>
            <LanguageSwitch />
            {/* <a */}
            {/*   href='https//dashboard.delivery.plus/' */}
            {/*   className='font-mono md:inline hidden cursor-pointer bg-white py-2 px-4 rounded-lg bg-transparent border-2 border-delivery text-delivery hover:bg-delivery hover:text-white focus:outline-none focus:shadow-outline' */}
            {/* > */}
            {/*   <svg */}
            {/*     xmlns='http://www.w3.org/2000/svg' */}
            {/*     className='h-5 w-5 mr-1 inline' */}
            {/*     fill='none' */}
            {/*     viewBox='0 0 24 24' */}
            {/*     stroke='currentColor' */}
            {/*   > */}
            {/*     <path */}
            {/*       strokeLinecap='round' */}
            {/*       strokeLinejoin='round' */}
            {/*       strokeWidth='2' */}
            {/*       d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1' */}
            {/*     /> */}
            {/*   </svg> */}
            {/*   <FormattedMessage defaultMessage='LOGIN' /> */}
            {/* </a> */}
          </div>
          {/* <svg */}
          {/*   xmlns='http://www.w3.org/2000/svg' */}
          {/*   className='md:hidden h-6 w-6' */}
          {/*   fill='none' */}
          {/*   viewBox='0 0 24 24' */}
          {/*   stroke='currentColor' */}
          {/* > */}
          {/*   <path */}
          {/*     strokeLinecap='round' */}
          {/*     strokeLinejoin='round' */}
          {/*     strokeWidth='2' */}
          {/*     d='M4 6h16M4 12h16M4 18h16' */}
          {/*   /> */}
          {/* </svg> */}
        </div>
      </header>

      {children}

      <footer className='max-w-7xl mx-auto px-4 w-full'>
        <div className='border-t md:flex justify-between py-3 text-black text-center items-center md:text-left'>
          <div className='py-3'>
            <span itemType='http://schema.org/Organization'>
              <ul className='list-reset flex justify-center md:justify-start'>
                <li className='mr-5'>
                  <a
                    itemProp='sameAs'
                    href='https://instagram.com/deliverydotplus'
                    target="_blank" rel="noopener noreferrer"
                    title={intl.formatMessage({
                      defaultMessage: 'Folge uns auf Instagram',
                    })}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                      className='h-6 text-black'
                    >
                      <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                    </svg>
                  </a>
                </li>
                <li className='mr-5'>
                  <a
                    itemProp='sameAs'
                    href='https://youtube.com/@delivery_plus'
                    target="_blank" rel="noopener noreferrer"
                    title={intl.formatMessage({
                      defaultMessage: 'Folge uns auf Youtube',
                    })}
                    className='text-black'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 576 512'
                      className='h-6 text-black'
                    >
                      <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    itemProp='sameAs'
                    href='https://facebook.com/deliverydotplus'
                    target="_blank" rel="noopener noreferrer"
                    title={intl.formatMessage({
                      defaultMessage: 'Folge uns auf Facebook',
                    })}
                    className='text-black'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                      className='h-6 text-black'
                    >
                      <path d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z' />
                    </svg>
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <div className='md:order-last py-3'>
            <Link href='/privacy-policy'>
              <a className='mr-4'>
                <FormattedMessage defaultMessage='Datenschutzerklärung' />
              </a>
            </Link>
            <Link href='/legal-notice'>
              <a>
                <FormattedMessage defaultMessage='Impressum' />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
