const escapeStringRegexp = require("escape-string-regexp")
const pagePath = `content`
const indexName = `mojoauth_docs`
const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title,
          tags
        }
        headings {
          value
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesForFaceting: [`headings`] },
  },
]
module.exports = queries