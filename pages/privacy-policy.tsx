import * as React from 'react'
import {useIntl} from 'react-intl'

import Layout from '../components/Layout'
import {PrivacyPolicyDe} from '../components/PrivacyPolicyDe'
import {PrivacyPolicyEn} from '../components/PrivacyPolicyEn'
import {PrivacyPolicyFr} from '../components/PrivacyPolicyFr'
/* import {PrivacyPolicyEs} from '../components/PrivacyPolicyEs' */

export default function Home() {
  const intl = useIntl()

  return (
    <Layout
      title={intl.formatMessage({defaultMessage: 'Datenschutzerklärung'})}
      description={intl.formatMessage({defaultMessage: 'Datenschutzerklärung'})}
      noindex={true}
      nofollow={true}
      openGraph={null}
    >
      <section className='max-w-7xl mx-auto px-4 text-sm p-4'>
        {process.env.NEXT_PUBLIC_LOCALE == 'de' && <PrivacyPolicyDe />}
        {process.env.NEXT_PUBLIC_LOCALE == 'en' && <PrivacyPolicyEn />}
        {process.env.NEXT_PUBLIC_LOCALE == 'fr' && <PrivacyPolicyFr />}
        {process.env.NEXT_PUBLIC_LOCALE == 'es' && <PrivacyPolicyEn />}
      </section>
    </Layout>
  )
}
