import '../stylesheets/Header.css';

const Header = () => (
    <div id="header">
        <div className="container-fluid header-top">
            <div className='container'>
                <div className="row">
                    <div className="col-md social-icons">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                    <div className="col-md header-links">
                        <p>
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                            Submit Recipe
                        </p>
                        <p>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            Saved Recipes
                        </p>
                        <p>
                            <i class="fa fa-lock" aria-hidden="true"></i>
                            Signup/Login
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;