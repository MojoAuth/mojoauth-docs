const escapeStringRegexp = require("escape-string-regexp")
const pagePath = `content`
const indexName = process.env.GATSBY_ALGOLIA_INDEX
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

function pageToAlgoliaRecord({ node: { id, frontmatter, headings, fields, ...rest } }) {
  const _headings = headings.map(h => h.value);
  return {
    objectID: id,
    ...frontmatter,
    headings: _headings,
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