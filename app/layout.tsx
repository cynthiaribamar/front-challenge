import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/_globals.scss";

import { MainLayout } from "@/components/common/mainLayout";
import { QueryClientComponent } from "@/components/queryClient";
import { ShoppingProvider } from "@/context/ShoppingContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Frontend Challenge",
  description: "Developed by Cynthia Ribamar\nFind me on Github: https://github.com/cynthiaribamar\nAnd Linkedin: https://www.linkedin.com/in/cynthia-ribamar-40b9211b7/ :)",
  icons: "app/images.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <QueryClientComponent>
        <ShoppingProvider>
          <html lang="pt-br">
            <body className={montserrat.className}>
              <MainLayout>
                {children}
              </MainLayout>
            </body>
          </html>
        </ShoppingProvider>
      </QueryClientComponent>
    </>
  );
}
