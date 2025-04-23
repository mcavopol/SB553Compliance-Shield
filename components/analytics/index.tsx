import { Suspense } from "react"
import GoogleAnalytics from "./google-analytics"
import Hotjar from "./hotjar"

export default function Analytics() {
  return (
    <>
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
      <Hotjar />
    </>
  )
}
