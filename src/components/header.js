import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import Logo from "../../static/logo.svg"
import Search from "./search"
const searchIndices = [{ name: process.env.GATSBY_ALGOLIA_INDEX, title: process.env.GATSBY_ALGOLIA_INDEX }]
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

  bodyClickHandler = (e) => {
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
    window.addEventListener('click', function (e) {
      if (!document.getElementById('products-dropdown').contains(e.target)) {

        document.getElementById("products").checked = document.getElementById("products").checked ? false : document.getElementById("products").checked;
      }
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.bodyClickHandler)
    window.removeEventListener('click', function (e) {
      if (!document.getElementById('products-dropdown').contains(e.target)) {
        document.getElementById("products").checked = document.getElementById("products").checked ? false : document.getElementById("products").checked;
      }
    });

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
            <Link to="https://mojoauth.com/">
              <img alt="" src={Logo} width="117" />
            </Link>
          </div>
          <nav>
            <div className="logo">
              <Link to="https://mojoauth.com/">
                <img alt="" src={Logo} width="117" />
              </Link>
            </div>
            <Search indices={searchIndices} />

            <div className="nav-right">
              <ul class="nav-links">
                <li id="products-dropdown">
                  <label class="dropdown">
                    <div class="dd-button">Products</div>
                    <input type="checkbox" class="dd-input" id="products" />
                    <ul class="dd-menu">
                      <li>
                        <a href="https://mojoauth.com/products/email-magic-link/">
                          Email Magic Link
                        </a>
                      </li>
                      <li>
                        <a href="https://mojoauth.com/products/email-otp/">
                          Email OTP
                        </a>
                      </li>
                      <li>
                        <a href="javascript: void(0)">Social Login<span>Coming
                          Soon</span></a>
                      </li>
                      <li>
                        <a href="javascript: void(0)">Phone OTP<span>Coming Soon</span></a>
                      </li>
                    </ul>
                  </label>
                </li>
                <li>
                  <a href="https://mojoauth.com/docs" className="active">
                    Docs
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
                    rel="noreferrer"
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
