declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export {} // required so this file is a module
