function Menu(props) {
    const items = [
        { title: 'Главная страница', href: '#home' },
        { title: 'О компании', href: '#about' },
        { title: 'Контакты', href: '#contact' }
    ];        

    if (props.opened) {
        return (
            <div className="menu menu-open">
                <div className="menu-toggle"><span></span></div>
                <nav>
                <ul>{items.map(obj => <li><a href={obj.href} key={obj.title}>{obj.title}</a></li>)}</ul>
                </nav>
            </div>
        );
    }

    return (
        <div className="menu">
            <div className="menu-toggle"><span></span></div>                
        </div> 
    )        
}
