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
      <header>
        <div>
          <div className="logo">
            <Link to="/">
              <img src={Logo} width="228" />
            </Link>
          </div>

          <div className="navigation">
            <nav>
              <ul>
                {/* <li>
                  <a href="#">Pricing</a>
                </li> */}
                <li>
                  <a href="https://mojoauthassist.freshdesk.com/support/tickets/new" target="_blank">Support</a>
                </li>
              </ul>
            </nav>
            <div className="nav-button">
              <a href="https://mojoauth.com/signin" target="_blank" className="btn btn-primary">Signup for free</a>
            </div>
          </div>
        </div>
      </header>
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
