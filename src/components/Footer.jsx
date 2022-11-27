function Footer(){
    const time = new Date();
    const year = time.getFullYear()

    return <div>
                <p>Copyright © {year}</p>
            </div>
}

export default Footer;