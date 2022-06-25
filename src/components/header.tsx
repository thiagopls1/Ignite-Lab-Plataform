import { Logo } from "./logo"

export function Header(){
    return(
        <header className="w-full py-5 px-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
            <Logo />
        </header>
    )
}