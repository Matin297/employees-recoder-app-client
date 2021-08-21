type AppBarPropTypes = {
    title?: string
}

function AppBar({ title }: AppBarPropTypes) {
    return (
        <nav>
            <h1> {title} </h1>
        </nav>
    )
}

export default AppBar;