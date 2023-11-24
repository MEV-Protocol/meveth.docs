import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        mevETH Protocol Documentation
      </h1>
      <p>
        Explore protocol {' '}
        <Link
          href="/docs"
          style={{
            fontWeight: '600',
            textDecoration: 'underline',
          }}
        >
          /docs
        </Link>{' '}
      </p>
    </main>
  );
}
