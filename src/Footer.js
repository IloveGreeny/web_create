import "./Footer.css"


export default function Footer() {
    return(
        <div className="footer">
            <a href="https://www.facebook.com/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png" alt="facebook" width="35px" />
            </a>
            <a href="https://www.instagram.com/">
                <img
                    src="https://www.pngkey.com/png/full/285-2850733_instagram-logo-instagram-icon-small-png.png" alt="instagram" width="35px" />
            </a>
            <a href="https://www.linkedin.com/in/manvel-yeghiazaryan-102472232/">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" width="35px" />
            </a>
            <a href="https://twitter.com/">
                <img
                    src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="twitter" width="35px" />
            </a>
            <a href="https://github.com/IloveGreeny">
                <img
                    src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-7.png" alt="github" width="35px" />
            </a>
            <div className="footer-right">
                <br/>
                @Designed By One and Only Manvel Yeghiazaryan
            </div>
        </div>
    )
}