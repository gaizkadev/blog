import Link from 'next/link'
import Container from './container'

export default function Header() {
  return (
    <Container>
      <section className="flex items-center justify-between my-10">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
          <Link href="/">
            <a className="link-underline link-underline-black">home.</a>
          </Link>
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
          <Link href="/about">
            <a className="link-underline link-underline-black">about.</a>
          </Link>
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
          <Link href="/skills">
            <a className="link-underline link-underline-black">skills.</a>
          </Link>
        </h2>
      </section>
    </Container>
  )
}
