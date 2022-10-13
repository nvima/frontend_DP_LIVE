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
  children
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
            <a className="order-1">
              <h2 className='cursor-pointer inline text-3xl font-extrabold leading-tight content-center align-middle'>
                DELIVERY
                <span className='text-delivery align-none transform -translate-y-4'>
                  +
                </span>
              </h2>
            </a>
          </Link>
          <nav className='font-semibold font-mono md:pt-0 pt-4 md:order-2 order-3 col-span-2 mx-auto flex justify-between gap-8 md:w-auto w-full'>
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
                    rel='me'
                    title={intl.formatMessage({
                      defaultMessage: 'Folge uns auf Instagram',
                    })}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      style={{ fill: '#000000' }}
                    >
                      <path d='M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z'></path>
                    </svg>
                  </a>
                </li>
                <li className='mr-5'>
                  <a
                    itemProp='sameAs'
                    href='https://github.com/lieferservice-cloud'
                    rel='me'
                    title={intl.formatMessage({
                      defaultMessage: 'Folge uns auf GitHub',
                    })}
                    className='text-black'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      style={{ fill: '#000000' }}
                    >
                      <path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z'></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    itemProp='sameAs'
                    href='https://www.linkedin.com/company/lieferservice-cloud'
                    rel='me'
                    title={intl.formatMessage({
                      defaultMessage: 'Folge uns auf LinkedIn',
                    })}
                    className='text-black'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      style={{ fill: '#000000' }}
                    >
                      <path d='M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z'></path>
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
            <Link href='/imprint'>
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
