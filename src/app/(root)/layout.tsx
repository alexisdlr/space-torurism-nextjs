import PageTransition from "@/components/shared/page-transition";
import { PageBackgroundSwitcher } from "@/components/shared/page-background-switcher";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
      <PageBackgroundSwitcher />
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
