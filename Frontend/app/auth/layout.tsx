export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="relative flex flex-col min-h-screen h-screen bg-background">
        <main className="relative">
        {children}
        </main>
      </div>
    );
  }