function Menu() {

    const items = [
        { title: 'Главная страница', href: '#home' },
        { title: 'О компании', href: '#about' },
        { title: 'Контакты', href: '#contact' }
    ];

    const opened = true;
    
    return (
        <div className="menu menu-open">
            <div className="menu-toggle"><span></span></div>
            <nav>
            <ul>{items.map(obj => <li><a href={obj.href} key={obj.title}>{obj.title}</a></li>)}</ul>
            </nav>
        </div>        
    );
}

// export default Menu;
