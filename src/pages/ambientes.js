import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerNotification from "../components/notification/bannerNotification"
import Ambientes from "../components/ambientes/ambientes"

const AmbientesPage = () => (
  <Layout>
    <SEO title="Ambientes" />
    <BannerNotification />
    <Ambientes />
  </Layout>
)

export default AmbientesPage
