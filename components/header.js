import Link from 'next/link'

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-6 mb-16 md:mb-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 text-gray-800">
      <Link href="/">
        <a className="hover:underline">home.</a>
      </Link>      
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 text-gray-800">
        <Link href="/about">
          <a className="hover:underline">about.</a>
        </Link>
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 text-gray-800">
        <Link href="/blog">
          <a className="hover:underline">blog.</a>
        </Link>
      </h2>
    </section>
  )
}
