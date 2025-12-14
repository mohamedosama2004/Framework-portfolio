function Header() {
  return (
    <header className=" text-white text-center hero-section">
      <div className="container">
        <img
          src="imgi_1_avataaars.svg"
          alt="Profile"
          className="rounded-circle mb-4 profile-image"
        />
        <h1 className="hero-title">Start Framework</h1>
        <div className="divider-star text-white">
          <div className="divider-line bg-white"></div>
          <i className="bi bi-star-fill divider-icon"></i>
          <div className="divider-line bg-white"></div>
        </div>
        <p className="lead fs-4 mb-0 text-white">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
}

export default Header;
