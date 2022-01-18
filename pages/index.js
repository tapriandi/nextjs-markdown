import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'
import Post from 'components/Post'
import { sortByDate } from '../utils'
import Header from 'components/Layout/Header'
import Layout from 'components/Layout'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <Layout menu={posts}>
        <div className='flex flex-wrap justify-center'>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
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
      posts: posts.sort(sortByDate),
    },
  }
}
