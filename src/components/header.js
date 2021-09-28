import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import Logo from "../../static/logo.svg"
// Header component
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      toggleOpen: false,
    }
  }

  _shouldClose = false

  _toggleSearch = () => {
    const { toggleOpen } = this.state
    if (toggleOpen) {
      this.setState({
        toggleOpen: false,
        results: [],
        query: "",
      })
    } else {
      document.getElementById("search").focus()
      this.setState({
        toggleOpen: true,
      })
    }
  }

  bodyClickHandler = () => {
    if (this._shouldClose) {
      this.setState({
        toggleOpen: false,
        results: [],
        query: "",
      })
    }
  }

  componentDidMount() {
    document.body.addEventListener("click", this.bodyClickHandler)
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.bodyClickHandler)
  }

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <input type="checkbox" id="navcheck" />
          <div className="nav-btn">
            <label htmlFor="navcheck">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div class="logo-mobile">
            <Link to="/">
              <img src={Logo} width="117" />
            </Link>
          </div>
          <nav>
            <div className="logo">
              <Link to="/">
                <img src={Logo} width="117" />
              </Link>
            </div>

            <div className="nav-right">
              <ul class="nav-links">
                <li>
                  <a
                    href="https://mojoauth.com/hactoberfest"
                    className="hactoberfest"
                  >
                    Hactoberfest
                  </a>
                </li>
                <li>
                  <a href="https://mojoauth.com/blog">Blog</a>
                </li>
                <li>
                  <a href="https://mojoauth.com/pricing">Pricing</a>
                </li>

                <li>
                  <a href="https://mojoauthassist.freshdesk.com/support/tickets/new">
                    Support
                  </a>
                </li>
                <li>
                  <a href="https://mojoauth.com/signin">Login</a>
                </li>
              </ul>
              <ul class="nav-right-link">
                <li>
                  <a
                    href="https://mojoauth.com/signin"
                    target="_blank"
                    className="btn btn-primary btn-sm"
                  >
                    Sign up Free
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="backdrop"></div>
        </header>
      </React.Fragment>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      this.props.searchIndex
      ? Index.load(this.props.searchIndex)
      : 0

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        ? this.index
            .search(query, { expand: true })
            // Map over each ID and return the full document
            .map(({ ref }) => this.index.documentStore.getDoc(ref))
        : [],
    })
  }
}
