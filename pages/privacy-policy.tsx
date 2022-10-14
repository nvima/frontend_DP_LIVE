import * as React from 'react'
import {useIntl} from 'react-intl'

import Layout from '../components/Layout'
import {PrivacyPolicyDe} from '../components/privacy-policy/PrivacyPolicyDe'
import {PrivacyPolicyDk} from '../components/privacy-policy/PrivacyPolicyDk'
import {PrivacyPolicyEn} from '../components/privacy-policy/PrivacyPolicyEn'
import {PrivacyPolicyEs} from '../components/privacy-policy/PrivacyPolicyEs'
import {PrivacyPolicyFr} from '../components/privacy-policy/PrivacyPolicyFr'
import {PrivacyPolicyGr} from '../components/privacy-policy/PrivacyPolicyGr'
import {PrivacyPolicyHr} from '../components/privacy-policy/PrivacyPolicyHr'
import {PrivacyPolicyIt} from '../components/privacy-policy/PrivacyPolicyIt'
import {PrivacyPolicyNl} from '../components/privacy-policy/PrivacyPolicyNl'
import {PrivacyPolicyPl} from '../components/privacy-policy/PrivacyPolicyPl'
import {PrivacyPolicyPt} from '../components/privacy-policy/PrivacyPolicyPt'
import {PrivacyPolicyRo} from '../components/privacy-policy/PrivacyPolicyRo'
import {PrivacyPolicySe} from '../components/privacy-policy/PrivacyPolicySe'

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
        {process.env.NEXT_PUBLIC_LOCALE == 'dk' && <PrivacyPolicyDk />}
        {process.env.NEXT_PUBLIC_LOCALE == 'en' && <PrivacyPolicyEn />}
        {process.env.NEXT_PUBLIC_LOCALE == 'es' && <PrivacyPolicyEs />}
        {process.env.NEXT_PUBLIC_LOCALE == 'fr' && <PrivacyPolicyFr />}
        {process.env.NEXT_PUBLIC_LOCALE == 'gr' && <PrivacyPolicyGr />}
        {process.env.NEXT_PUBLIC_LOCALE == 'hr' && <PrivacyPolicyHr />}
        {process.env.NEXT_PUBLIC_LOCALE == 'it' && <PrivacyPolicyIt />}
        {process.env.NEXT_PUBLIC_LOCALE == 'nl' && <PrivacyPolicyNl />}
        {process.env.NEXT_PUBLIC_LOCALE == 'pl' && <PrivacyPolicyPl />}
        {process.env.NEXT_PUBLIC_LOCALE == 'pt' && <PrivacyPolicyPt />}
        {process.env.NEXT_PUBLIC_LOCALE == 'ro' && <PrivacyPolicyRo />}
        {process.env.NEXT_PUBLIC_LOCALE == 'se' && <PrivacyPolicySe />}
      </section>
    </Layout>
  )
}
