import Header from './Header'
import Link from 'next/link'
export default function Layout({ children, menu }) {
  return (
    <>
      <Header />
      <div className='fixed top-16 w-full h-full flex bg-base-100'>
        <div className="sticky top-0 px-3 py-5 left-0 w-[300px] h-screen border-r overflow-y-auto">
          <div className="flex flex-col">
            {menu.map((menu, index) => (
              <Link key={index} href={`/doc/${menu.slug}`} >
                <a className="text-xs py-2 hover:underline">{menu.slug}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className='p-5 w-full h-full overflow-y-scroll'>
          { children }
        </div>
      </div>
    </>
  )
}