import fs from 'fs'
import path from 'path'
import marked from 'marked'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from 'components/Layout'

export default function DocSlug({
  frontmatter: { title, date, cover_image },
  slug,
  posts,
  content
}) {
  return (
    <>
      <Link href="/">
        <a className='text-sm underline hover:no-underline hover:text-gray-400'>Go Back</a>
      </Link>

      <Layout menu={posts}>
        <div>
          <h1 className='text-xl sont-bold pb-2'>{title}</h1>
          <p className='text-xs pb-3'>Post on date: {date}</p>
          <img 
            className="h-[50vh] w-full object-cover" 
            src={cover_image} 
            alt="" 
          />
          <div className="pt-3 pb-24 text-xs leading-5">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>

        </div>
      </Layout>
    </>
  )
}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    return { slug }
  })

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      posts,
      frontmatter,
      slug,
      content,
    },
  }
}