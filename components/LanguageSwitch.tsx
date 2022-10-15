import { FormattedMessage, useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { SvgDeFlag } from './flags/SvgDeFlag'
import { SvgDkFlag } from './flags/SvgDkFlag'
import { SvgEsFlag } from './flags/SvgEsFlag'
import { SvgFrFlag } from './flags/SvgFrFlag'
import { SvgGbFlag } from './flags/SvgGbFlag'
import { SvgGrFlag } from './flags/SvgGrFlag'
import { SvgHrFlag } from './flags/SvgHrFlag'
import { SvgItFlag } from './flags/SvgItFlag'
import { SvgNlFlag } from './flags/SvgNlFlag'
import { SvgPlFlag } from './flags/SvgPlFlag'
import { SvgPtFlag } from './flags/SvgPtFlag'
import { SvgRoFlag } from './flags/SvgRoFlag'
import { SvgSeFlag } from './flags/SvgSeFlag'

export const LanguageSwitch = () => {
  const [languageSwitch, setLanguageSwitch] = useState<boolean>(false)

  const router = useRouter()
  const intl = useIntl()

  return (
    <div
      className='md:m-auto ml-auto md:mr-4 relative cursor-pointer flex'
      onClick={() => setLanguageSwitch(!languageSwitch)}
    >
      {process.env.NEXT_PUBLIC_LOCALE == 'de' ? (
        <SvgDeFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'dk' ? (
        <SvgDkFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'es' ? (
        <SvgEsFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'fr' ? (
        <SvgFrFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'en' ? (
        <SvgGbFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'gr' ? (
        <SvgGrFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'hr' ? (
        <SvgHrFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'it' ? (
        <SvgItFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'nl' ? (
        <SvgNlFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'pl' ? (
        <SvgPlFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'pt' ? (
        <SvgPtFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'ro' ? (
        <SvgRoFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'se' ? (
        <SvgSeFlag />
      ) : (
        <SvgGbFlag />
      )}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className={
          'w-6 h-6 m-auto ml-1 text-gray-800' +
          (languageSwitch ? ' rotate-180' : '')
        }
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
        />
      </svg>
      <div
        className={
          'grid grid-cols-2 gap-4 us:gap-2 w-max h-max absolute rounded-lg border shadow-lg top-14 right-0 p-4 cursor-pointer bg-white us:text-sm' +
          (languageSwitch ? '' : ' hidden')
        }
      >
        {process.env.NEXT_PUBLIC_LOCALE != 'de' && (
          <a
            href={'https://de.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgDeFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Deutsch',
              })}
            >
              <FormattedMessage defaultMessage='Deutsch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'en' && (
          <a href={'https://www.delivery.plus' + router.pathname} className='flex'>
            <SvgGbFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Englisch',
              })}
            >
              <FormattedMessage defaultMessage='Englisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'es' && (
          <a
            href={'https://es.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgEsFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Spanisch',
              })}
            >
              <FormattedMessage defaultMessage='Spanisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'fr' && (
          <a
            href={'https://fr.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgFrFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Französisch',
              })}
            >
              <FormattedMessage defaultMessage='Französisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'dk' && (
          <a
            href={'https://dk.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgDkFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Dänisch',
              })}
            >
              <FormattedMessage defaultMessage='Dänisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'gr' && (
          <a
            href={'https://gr.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgGrFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Griechisch',
              })}
            >
              <FormattedMessage defaultMessage='Griechisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'hr' && (
          <a
            href={'https://hr.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgHrFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Kroatisch',
              })}
            >
              <FormattedMessage defaultMessage='Kroatisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'it' && (
          <a
            href={'https://it.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgItFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Italienisch',
              })}
            >
              <FormattedMessage defaultMessage='Italienisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'nl' && (
          <a
            href={'https://nl.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgNlFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Niederländisch',
              })}
            >
              <FormattedMessage defaultMessage='Niederländisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'pl' && (
          <a
            href={'https://pl.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgPlFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Polnisch',
              })}
            >
              <FormattedMessage defaultMessage='Polnisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'pt' && (
          <a
            href={'https://pt.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgPtFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Portugiesisch',
              })}
            >
              <FormattedMessage defaultMessage='Portugiesisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'ro' && (
          <a
            href={'https://ro.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgRoFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Rumänisch',
              })}
            >
              <FormattedMessage defaultMessage='Rumänisch' />
            </p>
          </a>
        )}
        {process.env.NEXT_PUBLIC_LOCALE != 'se' && (
          <a
            href={'https://se.delivery.plus' + router.pathname}
            className='flex'
          >
            <SvgSeFlag />
            <p
              className='pl-2 my-auto hover:font-semibold before:content-[attr(data-before)] before:block before:font-semibold before:h-0 before:overflow-hidden before:invisible'
              data-before={intl.formatMessage({
                defaultMessage: 'Schwedisch',
              })}
            >
              <FormattedMessage defaultMessage='Schwedisch' />
            </p>
          </a>
        )}
      </div>
    </div>
  )
}
