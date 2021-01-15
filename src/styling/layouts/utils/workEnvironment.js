import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const WorkEnvironment = ({ children, setWorkEnvironment }) => {
  const data = useStaticQuery(graphql`
    query LocalEnvironment {
      site {
        siteMetadata {
          localEnv
        }
      }
    }
  `)

  React.useEffect(() => {
    setWorkEnvironment(data)
    return () => {
      setWorkEnvironment(null)
    }
  }, [])

  return <>{children}</>
}

export default WorkEnvironment
