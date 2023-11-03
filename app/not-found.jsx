import Link from 'next/link';
export default function NotFound() {
  return (
    <main className='text-center sm:text-xl md:text-4xl'>
      <h1>Not found - 404!</h1>
      <Link href="/">Click Here = Go back to Home</Link>
    </main>
  )
}