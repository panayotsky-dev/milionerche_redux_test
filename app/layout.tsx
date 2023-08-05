/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import CategoryDrop from './components/CategoryDrop/CategoryDrop'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body style={{
    backgroundImage: "url('./background01.webp')",
  }}>       
           {props.children}
  
    
           
        </body>
      </html>
    </Providers>
  )
}
