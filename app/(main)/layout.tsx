import Link from "next/link";

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex justify-center items-center py-2 gap-10">
        <Link href="/">Home</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/cards">Cards</Link>
        <Link href="/login">Login</Link>
      </header>
      {children}
    </>
  );
}
