const translate = require('@vitalets/google-translate-api')
const fs = require('fs')

async function go() {
  const sleepTimer = 2000
  const langDir = './lang/'
  const abortFilePath = 'last-translations.json'
  const originalFile = 'de.json'
  const originalLang = 'de'
  const translations = [
    { file: 'en.json', lang: 'en' },
    { file: 'fr.json', lang: 'fr' },
    { file: 'es.json', lang: 'es' },
  ]

  const originalContent = JSON.parse(
    fs.readFileSync('./lang/' + originalFile, 'utf8')
  )

  let noAbort = true
  let abortedFile
  let isAborted = false
  const alreadyTranslated = []
  try {
    abortedFile = JSON.parse(fs.readFileSync(abortFilePath, 'utf8'))
    isAborted = true
  } catch (_) { }

  translation_loops: for (const translation of translations) {
    if (isAborted && abortedFile.translated.includes(translation.lang)) {
      continue
    }

    const file = JSON.parse(fs.readFileSync(langDir + translation.file, 'utf8'))
    let keyFound = false
    for (const prop in originalContent) {
      //Check already translated
      if (prop in file){
        console.log('already translated continue: ' + prop + ' ' + translation.lang)
        continue
      }
      //Check for aborted Keys
      if (
        keyFound == false &&
        isAborted &&
        translation.lang == abortedFile.lang &&
        prop != abortedFile.key
      ) {
        console.log('abort continue: ' + prop + ' ' + translation.lang)
        continue
      }
      keyFound = true
      try {
        const res = await translate(originalContent[prop], {
          from: originalLang,
          to: translation.lang,
        })
        console.log("translated prop: "+prop)
        console.log(res.text)
        file[prop] = res.text
      } catch (err) {
        console.log(originalContent[prop])
        console.log(originalLang)
        console.log(translation.lang)
        console.log("error catch")
        console.log(err)
        noAbort = false
        const aborted = {
          lang: translation.lang,
          key: prop,
          translated: alreadyTranslated,
        }
        fs.writeFileSync(
          langDir + translation.file,
          JSON.stringify(file, null, 2)
        )
        fs.writeFileSync(abortFilePath, JSON.stringify(aborted, null, 2))
        break translation_loops
      }
      await delay(sleepTimer)
      console.log('...')
    }
    fs.writeFileSync(langDir + translation.file, JSON.stringify(file, null, 2))
  }
  //Check if there is Abort File, but no Aborts in this Run, to delete the Abort File
  if (noAbort && isAborted) {
    fs.unlinkSync(abortFilePath)
  }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

go()
