import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import Layout from '../components/Layout'

export default function Home() {
  const intl = useIntl()
  return (
    <Layout
      title='404'
      description={intl.formatMessage({ defaultMessage: 'Seite ist nicht vorhanden' })}
      noindex={true}
      nofollow={true}
      openGraph={null}
    >
      <div className='max-w-7xl m-auto'>
        <div className='md:pt-32 md:pb-52 pt-20 pb-24 flex items-center justify-between'>
          <div className='px-6 m-auto flex flex-col-reverse lg:flex-row justify-between items-center'>
            <div className='w-full mb-16 md:mb-8 text-center lg:text-left'>
              <h1 className='font-mono text-center lg:text-left text-5xl lg:text-8xl font-semibold mt-12 md:mt-0'>
                <FormattedMessage defaultMessage='Seite nicht gefunden' />
              </h1>
            </div>
            <div className='block w-full mx-auto md:mt-0 max-w-md lg:max-w-2xl'>
              <img src='/404.svg' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
