export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative flex flex-1 flex-col">{children}</div>;
}
