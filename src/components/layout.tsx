import * as React from "react"
import { Link } from "gatsby"

interface LayoutProps {
  location: Location
  title: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({title, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={true}>
      <header className="global-header">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
