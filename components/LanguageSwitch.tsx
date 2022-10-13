import { FormattedMessage, useIntl } from 'react-intl'
import {useRouter} from 'next/router';
import { useState } from 'react'

import { SvgDeFlag } from './SvgDeFlag'
import { SvgGbFlag } from './SvgGbFlag'
import { SvgFrFlag } from './SvgFrFlag'
import { SvgEsFlag } from './SvgEsFlag'

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
      ) : process.env.NEXT_PUBLIC_LOCALE == 'en' ? (
        <SvgGbFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'fr' ? (
        <SvgFrFlag />
      ) : process.env.NEXT_PUBLIC_LOCALE == 'es' ? (
        <SvgEsFlag />
      ) : (
        <SvgGbFlag />
      )}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className={'w-6 h-6 m-auto ml-1 text-gray-800' + (languageSwitch ? ' rotate-180': '')}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
        />
      </svg>
      <div
        className={
          'absolute rounded-lg border shadow-lg top-14 right-0 space-y-4 p-4 cursor-pointer bg-white' +
          (languageSwitch ? '' : ' hidden')
        }
      >
        {process.env.NEXT_PUBLIC_LOCALE != 'en' && (
          <a href={'https://delivery.plus' + router.pathname } className='flex'>
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
        {process.env.NEXT_PUBLIC_LOCALE != 'de' && (
          <a href={'https://de.delivery.plus' + router.pathname } className='flex'>
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
        {process.env.NEXT_PUBLIC_LOCALE != 'es' && (
          <a href={'https://es.delivery.plus' + router.pathname } className='flex'>
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
          <a href={'https://fr.delivery.plus' + router.pathname } className='flex'>
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
      </div>
    </div>
  )
}
