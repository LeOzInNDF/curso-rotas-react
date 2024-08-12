import "./globals.css";
import Topo from "@/components/Topo";




export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        </body>
    </html>
  );
}
