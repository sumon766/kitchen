import "../stylesheets/Header.css";

const Header = () => (
  <div id="header">
    <div className="container-fluid header-top">
      <div className="container">
        <div className="row">
          <div className="col-md social-icons">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </div>
          <div className="col-md header-links">
            <a href='/submi-recipe'>
              <i class="fa fa-file-text-o" aria-hidden="true"></i>
              Submit Recipe
            </a>
            <a href="/saved-recipes">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
              Saved Recipes
            </a>
            <a href="/login">
              <i class="fa fa-lock" aria-hidden="true"></i>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="logo text-center">
          <img src="/images/logo.png" />
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="container">
        <nav class="navbar navbar-expand-sm justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
        {/* The following search icon part is incomplete */}
        {/* <div className="search-icon">
            <i class="fa fa-search" aria-hidden="true"></i>
        </div> */}
      </div>
    </div>
  </div>
);

export default Header;
