import Link from "next/link"

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-screen h-16 flex px-[3%] items-center bg-white border-b">
      <Link href="/" passHref>
        <a className="text-lg font-bold">Project Documentation</a>
      </Link>
    </div>
  )
}