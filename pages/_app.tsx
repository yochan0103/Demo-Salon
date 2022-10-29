import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import React from 'react'

import 'styles/globals.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <AnimatePresence exitBeforeEnter>
    <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
)

export default MyApp