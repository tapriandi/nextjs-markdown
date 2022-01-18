import 'styles/globals.css'
import 'styles/tailwind.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Post from 'components/Post'
import { sortByDate } from '../utils'
import Header from 'components/Layout/Header'
import Layout from 'components/Layout'

export default function MyApp({ Component, pageProps, posts }) {
  return (
    <>
      {/* <Layout menu={posts}> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}