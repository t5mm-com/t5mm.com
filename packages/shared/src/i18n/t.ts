import enUS from './en-US'

type TranslationKey = keyof typeof enUS

const t = (key: TranslationKey) => enUS[key] ?? key

export default t