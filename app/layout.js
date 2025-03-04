
import { AuthProvider, } from "@/context/AuthContext";
import "./globals.css";
import { Abril_Fatface, Inter, Poppins } from "next/font/google";
import Link from "next/link";
import Head from "./head"
import Logout from "@/components/Logout";

const poppins = Poppins({ subsets: ["latin"], weight: ['400']})
const abrilfatface = Abril_Fatface({ subsets: ["latin"], weight: ['400']});
const inter = Inter({ subsets: ["latin"], weight: ['400']});


//--------------------meta data for page ------------------------
export const metadata = {
  title: "Life Tracker",
  description: "Track your life and well being each and every day!",
};



export default function RootLayout({ children }) {

  //have created the header and footer here to make it more readible but 
  // but could also make a new component if i wanted.
const header = (

  //---practice getting right font for it 
  //--------------header-------------------

  //link from next to render before make it faster
  <header className={"p-4 sm:p=8 flex items-center justify-between " + abrilfatface.className}>
    <Link href={'/'}> 
    <h1 className={'textGradient text-xl sm:text-3xl hover:scale-115 '}>Lifetracker</h1>
    </Link>
    <Link href={"/prompts"}>
      <h1 className={'textGradient text-xl sm:text-3xl  ' }>DailyQ</h1>  
    </Link>
    <Link href={'/dashboard'}>
    <h1 className={'textGradient text-xl sm:text-3xl '}>Mood</h1>  
    </Link>
    <Logout/>
   
   
  </header>
)
//p4 regular and padding 8 for when small screen

//add my social links etc etc
//-------------------footer----------------
const footer = (
    <footer className=""> 
      <h1 className={"text-center text-xl mb-2 sm:text-3xl ms:text-6xl " + abrilfatface.className}>My Links</h1>
      <div className="p-4 sm:p-8 flex flex-cols pt-3">
      <Link className=' mx-auto' href={'https://nz.linkedin.com/in/lachlan-sim'}>
      <i className="fa-brands fa-linkedin text-4xl sm:text-6xl ms:text-9xl hover:text-indigo-300" ></i>
      </Link>
      <Link className=' mx-auto' href={'https://github.com/lachlanloch'}><i className="fa-brands fa-github text-4xl sm:text-6xl ms:text-9xl hover:text-indigo-300"/></Link>
      <Link className=' mx-auto' href={'mailto:lachlanloch@gmail.com'}><i className="fa-solid fa-envelope text-4xl sm:text-6xl ms:text-9xl hover:text-indigo-300"></i></Link>
      </div>
        </footer>
      )
        return (
          <html lang="en">
            <Head/>
            <AuthProvider>
            <body className={'max-w-[750px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700 ' + poppins.className}>
              {header}
              {children}
              {footer}
              </body>
              </AuthProvider>
          </html>
        );
      }