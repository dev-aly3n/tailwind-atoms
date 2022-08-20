interface props {
    children: React.ReactNode;
}
const Layout:React.FC<props> = ({children}) => {

    return(
        <>
        <header></header>
        <main>{children}</main>
        <footer></footer>
        </>
    )
}

export default Layout;