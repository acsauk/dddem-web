import theme from '../theme/theme';

const Header = props => (
  <section>
    <div className="background"></div>

    <div className="logo">
      <img
        className="image"
        src="/static/ddd_avatar_300.jpg"
        alt="DDD East Midlands Logo"
      />
    </div>

    <div className="logo">
      <h1 tabIndex="0">{props.title}</h1>
    </div>

    <style jsx>
      {`
        h1 {
          font-size: ${theme.font.sizes.mobile.headline1};
          color: ${theme.palette.primary};
        }
        .background {
          width: 100vw;
          background-image: url(${props.banner});
          background-color: ${theme.palette.primary};
          height: 300px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .logo {
          text-align: center;
        }
        .image {
          margin-top: -80px;
          padding: 20px 30px;
          background-color: #1a7d87;
          width: 250px;
          border-radius: ${theme.sizes.borderRadiusMobile};
          background-color: ${theme.palette.primary};
        }
        @media (min-width: 600px) {
          h1 {
            font-size: ${theme.font.sizes.desktop.headline1};
            color: ${theme.palette.primary};
          }
          .background {
            height: 350px;
          }
          .logo {
          }
          .image {
            margin-top: -80px;
            padding: 20px 30px;
            background-color: #1a7d87;
            width: 250px;
          }
        }
      `}
    </style>
  </section>
);

export default Header;
