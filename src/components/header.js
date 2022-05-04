import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import Logo from "../../static/logo.svg"
import Search from "./search"
const searchIndices = [
  {
    name: process.env.GATSBY_ALGOLIA_INDEX,
    title: process.env.GATSBY_ALGOLIA_INDEX,
  },
]
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

  bodyClickHandler = e => {
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
    window.addEventListener("click", function (e) {
      if (!document.getElementById("products-dropdown").contains(e.target)) {
        document.getElementById("products").checked = document.getElementById(
          "products"
        ).checked
          ? false
          : document.getElementById("products").checked
      }
    })
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.bodyClickHandler)
    window.removeEventListener("click", function (e) {
      if (!document.getElementById("products-dropdown").contains(e.target)) {
        document.getElementById("products").checked = document.getElementById(
          "products"
        ).checked
          ? false
          : document.getElementById("products").checked
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <input type="checkbox" id="navcheck" />
<div class="nav-btn">
  <label htmlFor="navcheck">
    <span></span>
    <span></span>
    <span></span>
  </label>
</div>
<header>

  <nav>
    <div class="w-100">
      <div class="logo">
        <a href="/">
          <svg width="117" height="40" viewBox="0 0 117 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill-rule="evenodd" clip-Rule="evenodd"
                d="M16.6422 14.9746C17.2011 15.0989 17.7599 15.223 18.2567 15.3472C20.4922 15.9061 21.61 16.7134 21.61 17.7069C21.61 18.4521 20.9269 19.1352 19.4987 19.694V34.908H16.5801V21.557L10.7429 29.6297L5.15409 21.557V34.908H2.35969V19.8183C0.807248 19.2593 -2.28882e-05 18.5142 -2.28882e-05 17.7069C-2.28882e-05 16.7754 1.11773 15.9682 3.35325 15.3472C3.85004 15.223 4.34682 15.0989 4.9057 15.0367L4.9678 14.9125L8.4453 5.34948C9.31461 3.05186 10.5566 1.6857 12.4195 1.12682C14.034 0.630044 15.9591 0.754239 18.0083 0.940528H18.0704C18.3809 1.00263 18.5051 1.25102 18.5051 1.43731C18.5051 1.56151 18.443 1.872 18.0704 1.9341C18.0083 1.99619 17.9462 1.99619 17.822 1.99619L17.7992 2C17.0383 2.12671 15.1443 2.44211 14.4067 3.54863C14.0962 4.04542 14.034 4.6043 14.1583 5.28738C14.6702 7.74476 15.2666 9.86449 15.7386 11.5421L15.7389 11.5433C15.8393 11.9002 15.934 12.237 16.0212 12.5528C16.3938 13.7327 16.5801 14.4158 16.6422 14.8504V14.9746ZM7.7001 20.8118L10.8671 25.4691L14.1583 20.8118C13.1026 20.8739 11.9228 20.936 10.805 20.936C9.7493 20.936 8.69363 20.8739 7.7001 20.8118ZM9.74938 13.3601H10.805C10.927 13.3601 11.049 13.3668 11.1731 13.3735C11.4282 13.3874 11.6925 13.4019 11.9849 13.3601C12.1091 13.3601 12.1091 13.3601 12.1091 13.2359C12.1091 13.0496 12.0469 12.8012 11.9849 12.6149L11.7985 11.8697C11.6744 11.5593 11.6122 11.2487 11.5502 10.9383C11.5502 10.8762 11.5502 10.814 11.6122 10.752C12.2332 10.3173 12.2953 9.51004 11.9228 9.01322C11.7365 8.76481 11.4881 8.57853 11.1776 8.51649C10.8671 8.45437 10.6187 8.45437 10.3703 8.57853C10.0598 8.76481 9.81143 9.01322 9.68726 9.32375C9.62514 9.57208 9.62514 9.88261 9.68726 10.131C9.74938 10.3794 9.93567 10.5657 10.184 10.752C10.2461 10.814 10.2461 10.814 10.2461 10.8762C10.2461 10.9383 10.2306 10.9848 10.2151 11.0314C10.1996 11.078 10.184 11.1246 10.184 11.1867C10.122 11.373 10.0598 11.6213 9.99771 11.8697C9.93567 12.056 9.87355 12.3044 9.81143 12.5528C9.78041 12.677 9.74938 12.7856 9.71828 12.8943C9.68726 13.0029 9.65616 13.1117 9.62514 13.2359C9.62514 13.298 9.62514 13.3291 9.64065 13.3446C9.65616 13.3601 9.68726 13.3601 9.74938 13.3601ZM24.4044 33.4798C25.4601 34.6596 27.0746 35.2806 29.186 35.2806C31.2352 35.2806 32.7876 34.6596 33.9054 33.4798C34.9611 32.2999 35.5199 30.5611 35.5199 28.3256C35.5199 26.8353 35.2715 25.5933 34.8368 24.5377C34.4021 23.482 33.657 22.7368 32.7256 22.178C31.794 21.6191 30.5521 21.3707 29.1238 21.3707C27.0746 21.3707 25.5222 21.9295 24.4665 23.0473C23.4109 24.1651 22.852 25.966 22.852 28.3256C22.852 30.5611 23.3487 32.2999 24.4044 33.4798ZM31.2973 32.2999C30.8005 32.7346 30.0553 32.9209 29.186 32.9209C27.8819 32.9209 26.9504 32.5482 26.3915 31.6789C25.8327 30.8717 25.5842 29.6918 25.5842 28.2635C25.5842 27.27 25.6464 26.4627 25.8948 25.7796C26.0811 25.0966 26.5158 24.5998 27.0125 24.2272C27.5714 23.8546 28.2544 23.6683 29.1238 23.6683C29.9932 23.6683 30.7384 23.7925 31.2352 24.1651C31.794 24.5377 32.1666 25.0344 32.415 25.7175C32.6634 26.4006 32.7876 27.27 32.7876 28.2635C32.7876 29.195 32.6634 30.0023 32.415 30.6854C32.2287 31.3684 31.794 31.9273 31.2973 32.2999ZM39.4321 35.3427C39.4321 35.8394 39.37 36.2741 39.2458 36.6468C39.1216 37.0193 38.8732 37.2677 38.5006 37.3919C38.128 37.5782 37.6313 37.6403 37.0103 37.6403V40C38.0659 40 38.9974 39.8758 39.8047 39.5653C40.6119 39.2549 41.1708 38.758 41.6055 38.075C42.0402 37.3919 42.2265 36.5225 42.2265 35.4048V21.7433H39.4942V35.3427H39.4321ZM47.0701 33.4798C48.1258 34.6596 49.7403 35.2806 51.8516 35.2806C53.9008 35.2806 55.4533 34.6596 56.571 33.4798C57.6267 32.2999 58.1856 30.5611 58.1856 28.3256C58.1856 26.8353 57.9372 25.5933 57.5025 24.5377C57.0678 23.482 56.3227 22.7368 55.3912 22.178C54.4598 21.6191 53.2178 21.3707 51.7896 21.3707C49.7403 21.3707 48.1878 21.9295 47.1322 23.0473C46.0766 24.1651 45.5176 25.966 45.5176 28.3256C45.5176 30.5611 46.0145 32.2999 47.0701 33.4798ZM53.9008 32.2999C53.4041 32.7346 52.6589 32.9209 51.7896 32.9209C50.5476 32.9209 49.6161 32.5482 48.9951 31.6789C48.4362 30.8717 48.1878 29.6918 48.1878 28.2635C48.1878 27.27 48.25 26.4627 48.4984 25.7796C48.6847 25.0966 49.1194 24.5998 49.6161 24.2272C50.175 23.8546 50.858 23.6683 51.7274 23.6683C52.5968 23.6683 53.342 23.7925 53.8388 24.1651C54.3976 24.5377 54.7702 25.0344 55.0186 25.7175C55.267 26.4006 55.3912 27.27 55.3912 28.2635C55.3912 29.195 55.267 30.0023 55.0186 30.6854C54.8323 31.3684 54.3976 31.9273 53.9008 32.2999ZM69.7979 17.3344H66.693L59.8622 34.8459H62.7808L64.5196 30.0644H71.6608L73.3995 34.8459H76.4424L69.7979 17.3344ZM65.3889 27.7668L68.1212 20.2529L70.8536 27.7668H65.3889ZM81.5965 34.6596C82.4661 35.0943 83.5217 35.2806 84.7012 35.2806C86.5021 35.2806 87.9306 34.8459 88.9241 33.9766C89.9176 33.1072 90.4147 31.741 90.4147 30.0023V21.6811H87.7445V29.5676C87.7445 30.6854 87.4955 31.4927 86.9992 32.0515C86.5021 32.6104 85.7568 32.8588 84.7012 32.8588C83.7078 32.8588 82.9004 32.6104 82.4041 32.0515C81.907 31.4927 81.6588 30.6854 81.6588 29.5676V21.6811H78.9263V29.9402C78.9263 31.058 79.1126 32.0515 79.6093 32.8588C80.044 33.666 80.7271 34.287 81.5965 34.6596ZM99.0457 35.2184C97.8661 35.2184 96.9347 34.908 96.1894 34.287C95.5061 33.666 95.1339 32.7346 95.1339 31.4927V23.9788H93.0221V21.6811H95.1339V18.0174H97.9902V21.6811H101.22V23.9788H97.9902V30.9337C97.9902 31.5547 98.1143 31.9894 98.3004 32.2999C98.5494 32.6104 98.9217 32.7346 99.5429 32.7346C99.8531 32.7346 100.163 32.6725 100.412 32.6104C100.722 32.5482 100.971 32.4241 101.158 32.2999V34.7217C100.847 34.8459 100.474 34.9701 100.101 35.0322C99.791 35.2184 99.4188 35.2184 99.0457 35.2184ZM116.122 34.908V26.7111C116.122 25.4691 115.874 24.4135 115.626 23.6062C115.191 22.7989 114.633 22.2401 113.887 21.8674C113.142 21.557 112.273 21.3707 111.217 21.3707C110.41 21.3707 109.602 21.4949 108.795 21.8054C108.237 21.9917 107.74 22.2401 107.305 22.4884V16.0924H104.572V34.908H107.305V24.6619C107.664 24.4568 108.107 24.2941 108.531 24.1389C108.62 24.106 108.709 24.0734 108.795 24.0409C109.354 23.8546 109.913 23.7925 110.41 23.7925C111.403 23.7925 112.149 24.0409 112.646 24.5998C113.142 25.2207 113.39 26.028 113.39 27.0837V34.908H116.122ZM42.4128 17.9553C42.4128 18.7784 41.7456 19.4456 40.9225 19.4456C40.0993 19.4456 39.4321 18.7784 39.4321 17.9553C39.4321 17.1322 40.0993 16.465 40.9225 16.465C41.7456 16.465 42.4128 17.1322 42.4128 17.9553Z"
                fill="#202124" />
            </g>
          </svg>
        </a>
      </div>
      <div class="navigation">
        <ul>
          <li id="products-dropdown">
            <label class="dropdown">
              <div class="dd-button">Products</div>
              <input type="checkbox" class="dd-input" id="products" />
              <ul class="dd-menu">
                <li>
                  <a href="/products/email-magic-link/">Magic Link</a>
                </li>
                <li>
                  <a href="/products/email-otp/">Email OTP</a>
                </li>
                <li>
                  <a href="/products/social-login/">Social Login</a>
                </li>
                <li>
                  <a href="/products/multi-factor-authentication/">Multi-Factor Authentication</a>
                </li>
                <li>
                  <a href="/products/webauthn/">WebAuthn</a>
                </li>
                <li>
                  <a href="/products/sms-authentication/">SMS Authentication</a>
                </li>
                <li>
                  <a href="javascript: void(0)">Web3 Login<span>Coming Soon</span></a>
                </li>
                <li>
                  <a href="javascript: void(0)">TOTP Authenticator<span>Coming Soon</span></a>
                </li>
                <li>
                  <a href="javascript: void(0)">Single Sign-On<span>Coming Soon</span></a>
                </li>
                <li>
                  <a href="mailto:connect@mojoauth.com">Private Cloud<span class="primary">Contact Sales <svg width="14" height="14" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.08203 17.6113L17.082 7.61133" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.08203 7.61133H17.082V17.6113" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span></a>
                </li>
              </ul>
            </label>
          </li>
          <li>
            <a href="/docs/">Docs</a>
          </li>
          <li>
            <a href="/blog/">Blog</a>
          </li>
          <li>
            <a class="" href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="https://calendly.com/mojoauth-passwordless/30min" target="_blank">
              Book a Demo
            </a>
          </li>
          <li>
            <a href="/dashboard/signin">Login</a>
          </li>
          <li>
            <a class="btn btn-primary" href="/dashboard/signin">
              Sign up Free
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

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
