export {} // ensures this file is a module

declare global {
  interface Window {
    gtag?: (..._args: unknown[]) => void
    dataLayer?: unknown[]
  }
}
