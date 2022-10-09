import { useState } from 'react'
import { useIntl } from 'react-intl'

export const FaqDropdown = ({ title, description }) => {
  const intl = useIntl()
  const [status, setStatus] = useState(false)

  return (
    <div className='border-b'>
      <button
        type='button'
        aria-label={intl.formatMessage({
          defaultMessage: 'Open Item',
        })}
        title={intl.formatMessage({
          defaultMessage: 'Open Item',
        })}
        className='flex items-center justify-between w-full p-4 focus:outline-none'
        onClick={() => setStatus(!status)}
      >
        <p className='text-lg font-medium text-left'>{title}</p>
        <svg
          viewBox='0 0 24 24'
          className={
            'w-3 text-gray-600 transition-transform duration-200 transform' +
            (status ? ' rotate-180' : '')
          }
        >
          <polyline
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeMiterlimit='10'
            points='2,7 12,17 22,7'
            strokeLinejoin='round'
          ></polyline>
        </svg>
      </button>
      <div className='p-4 pt-0'>
        <p
          className={
            'text-gray-700 ' +
            (status ? '' : 'hidden')
          }
        >
          {description}
        </p>
      </div>
    </div>
  )
}
