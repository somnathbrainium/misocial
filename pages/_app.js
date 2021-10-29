import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../styles/globals.css';
import '../styles/media.css';
import '../styles/customcheckbox.css';
import '../styles/dashboard.css';
import Loader from '../Components/Loader';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const [Loading, Setisloading] = useState(false)

  const DashboardLaout = Component.Layout || EmptyLayout;
  const router = useRouter();

  useEffect(() => {

    const handleRouteStart = () => {
      Setisloading(true)
    }
    const handleRouteEnd = () => {
      Setisloading(false)
    }

    router.events.on('routeChangeStart', handleRouteStart)

    router.events.on('routeChangeComplete', handleRouteEnd)

  }, [router])
  return (
    <>
      {Loading && <Loader />}

      <DashboardLaout>
        <Component {...pageProps} />
      </DashboardLaout>
    </>
  )
}
const EmptyLayout = ({ children }) => <> {children}</>
export default MyApp


