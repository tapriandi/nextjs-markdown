import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='w-[30%] m-[1%] border'>
      <div className="relative w-full overflow-hidden">
        <img className="relative max-w-[120%] w-[120%] -left-[10%]" src={post.frontmatter.cover_image} alt='' />

        <div className="p-2">
          <div className='text-[10px] pb-2'>Posted on {post.frontmatter.date}</div>
          <h3 className="text-sm font-bold pb-2">{post.frontmatter.title}</h3>
          <p className="text-xs pb-2">{post.frontmatter.excerpt}</p>
          <Link href={`/blog/${post.slug}`}>
            <a className='text-xs underline hover:no-underline hover:text-gray-400'>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
