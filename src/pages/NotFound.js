import React from 'react'

import Header from 'parts/Header'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

import PageErrorMessage from 'parts/PageErrorMessage'

export default function NotFound() {
  return (
    <div>
        <Header theme="black" position="relative"></Header>

        <PageErrorMessage />

        <Sitemap></Sitemap>
        <Footer></Footer>
    </div>
  )
}
