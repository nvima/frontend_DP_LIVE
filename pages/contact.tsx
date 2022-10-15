import {FormEvent, ChangeEvent, useState} from 'react'
import {FormattedMessage, useIntl} from 'react-intl'

import Layout from '../components/Layout'
import {SvgContact} from '../components/SvgContact'

export default function Home() {
  const intl = useIntl()
  const [nameInput, setNameInput] = useState<string>('')
  const [emailInput, setEmailInput] = useState<string>('')
  const [messageInput, setMessageInput] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(false)
  const [messagError, setMessageError] = useState<boolean>(false)
  const [messagSent, setMessageSent] = useState<boolean>(false)
  const [apiError, setApiError] = useState<boolean>(false)

  const validateEmail = (emailAdress: string) => {
    return String(emailAdress)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateEmail(emailInput)) {
      setEmailError(true)
      return
    }
    setEmailError(false)
    if (messageInput.length == 0) {
      setMessageError(true)
      return
    }
    setMessageError(false)

    const data = {
      name: nameInput,
      email: emailInput,
      message: messageInput,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint =
      'https://btnyr0xuyk.execute-api.eu-central-1.amazonaws.com/DP_LIVE/messages/create'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    try {
      const response = await fetch(endpoint, options)
      const result = await response.text()
      if (response.status == 200) {
        setMessageSent(true)
      } else {
        console.error(result)
        console.error(response)
        setApiError(true)
      }
    } catch (err) {
      console.error(err)
      setApiError(true)
    }
  }

  function getUrl() {
    return process.env.NEXT_PUBLIC_LOCALE == 'en'
      ? 'https://www.delivery.plus/'
      : `https://${process.env.NEXT_PUBLIC_LOCALE}.delivery.plus`
  }

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: 'Delivery+ | Kontakt',
      })}
      description={intl.formatMessage({
        defaultMessage:
          'Hast du noch Fragen zu Delivery Plus? Oder bieten wir noch nicht die Lösung an die Du benötigst. Nimm gerne Kontakt mit uns auf.',
      })}
      noindex={false}
      nofollow={false}
      openGraph={{
        url: getUrl() + 'contact',
        type: 'website',
        locale: process.env.NEXT_PUBLIC_LOCALE,
        site_name: intl.formatMessage({
          defaultMessage: 'Delivery+ | Kontakt',
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
      <section className='max-w-7xl mx-auto px-4 pb-20'>
        <div className='md:mt-20 mt-8 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-50 rounded-xl border border-grey-200'>
          <div className='flex flex-col justify-between'>
            <div>
              <h1 className='font-mono text-4xl lg:text-5xl font-extrabold leading-tight'>
                <FormattedMessage defaultMessage='Kontakt' />
              </h1>
              <div className='text-gray-700 mt-8'>
                <FormattedMessage defaultMessage='Email:' />
                <span className='underline pl-1'>
                  <FormattedMessage defaultMessage='info@delivery.plus' />
                </span>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <SvgContact />
            </div>
          </div>
          <div className={messagSent ? '' : 'hidden'}>
            <p>
              <FormattedMessage defaultMessage='Wir werden uns schnellstmöglich bei dir melden.' />
            </p>
          </div>
          <div className={apiError ? '' : 'hidden'}>
            <p>
              <FormattedMessage defaultMessage='Etwas lief schief. Bitte melde dich unter info@delivery.plus' />
            </p>
          </div>
          <form
            className={messagSent || apiError ? 'hidden' : ''}
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor='name'
                className='uppercase text-sm text-gray-600 font-bold'
              >
                <FormattedMessage defaultMessage='Name' />
              </label>
              <input
                className='w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                name='name'
                id='name'
                type='text'
                value={nameInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNameInput(e.target.value)
                }
              />
            </div>
            <div className='mt-8'>
              <label
                htmlFor='email'
                className='uppercase text-sm text-gray-600 font-bold'
              >
                <FormattedMessage defaultMessage='Email' />
              </label>
              <input
                className='w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                type='text'
                name='email'
                id='email'
                value={emailInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmailInput(e.target.value)
                }
              />
            </div>
            <div className='mt-8'>
              <label 
                htmlFor='message'
                className='uppercase text-sm text-gray-600 font-bold'>
                <FormattedMessage defaultMessage='Nachricht' />
              </label>
              <textarea
                name='message'
                id='message'
                className='w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                value={messageInput}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setMessageInput(e.target.value)
                }
              ></textarea>
            </div>
            <div
              className={
                'text-red-500 mt-2' +
                (emailError || messagError ? '' : ' hidden')
              }
            >
              &#8226;{' '}
              {emailError
                ? intl.formatMessage({
                    defaultMessage: 'E-Mail Adresse ist nicht korrekt',
                  })
                : messagError
                ? intl.formatMessage({
                    defaultMessage: 'Bitte gebe eine Nachricht ein',
                  })
                : ''}
            </div>
            <div className='mt-8'>
              <button className='uppercase text-sm font-bold tracking-wide bg-delivery text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline'>
                <FormattedMessage defaultMessage='Senden' />
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
