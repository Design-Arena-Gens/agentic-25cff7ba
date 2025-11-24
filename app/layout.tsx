export const metadata = {
  title: "Logic Gates AND/OR ? Proteus 8 Guide",
  description: "Interactive AND/OR gate simulator and Proteus 8 tutorial.",
};

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/">Logic Gates Lab</a>
            <nav className="nav">
              <a href="/">Simulator</a>
              <a href="/proteus">Proteus 8 Guide</a>
              <a href="https://vercel.com" target="_blank" rel="noreferrer">Deployed on Vercel</a>
            </nav>
          </div>
        </header>
        <main className="container main-content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <span>? {new Date().getFullYear()} Logic Gates Lab</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
