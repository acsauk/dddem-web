import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import SponsorButton from '../../components/sponsorship/SponsorButton';

export default () => (
  <Layout>
    <Head>
      <title>Sponsor 2020</title>
    </Head>
    <Header
      title={'Sponsor 2020'}
      banner="/static/banners/sponsor.jpg"
    />

    <section id="when-and-where">
      <h1 tabIndex="0">When and Where?</h1>
      <a name="when" />
      <h2 tabIndex="0">When</h2>
      <p tabIndex="0">October 3rd 2020</p>
      <a name="where" />
      <h2 tabIndex="0">When</h2>
      <p tabIndex="0">
        The Nottingham Conference Center (same as this year)
      </p>
    </section>

    <section id="indicating-interest">
      <h1 tabIndex="0">Indicating Interest to Sponsor</h1>
      <a name="submitting-interest" />
      <h2 tabIndex="0">Get in touch with Rachel</h2>
      <p tabIndex="0">
        Rachel is the newest member of our team and will be the point
        of contact for all sponsors and partners. Get in touch with
        her and she will work with you to ensure you get what you need
        while supporting the conference. There are a number of tiers,
        with different benefits and price tags, so there should be
        something that is right for you.
      </p>
      {/* Rachel pic and links */}
      <div className="row">
        <div className="columnleft">
          <img
            src="/static/organisers/rachel.jpg"
            alt=""
            className="picture"
          />
        </div>
        <div className="columnright">
          <ul tabIndex="0">
            <li tabIndex="0">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:rachel@dddeastmidlands.com"
                target="_blank"
              >
                Rachel At DDD East Midlands
              </a>
            </li>
            <li tabIndex="0">
              <strong>Twitter:</strong>{' '}
              <a
                href="https://twitter.com/missracheybaby"
                target="_blank"
              >
                @missracheybaby
              </a>
            </li>
            <li tabIndex="0">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/rachelwatsondistinct/"
                target="_blank"
              >
                Rachel Watson
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* is there a pack? */}
      <a name="sponsorship-pack" />
      <h2 tabIndex="0">Is there a sponsorship pack?</h2>
      <p tabIndex="0">
        The sponsorship pack is being put together at the moment and
        will be available by email and online by the end of January.
      </p>

      {/* when sponsorship available */}
      <a name="when-sponsorship-is-available" />
      <h2 tabIndex="0">
        What happens when sponsorship becomes available?
      </h2>
      <p tabIndex="0">
        Rachel is the newest member of our team and will be the point
        of contact for all sponsors and partners. Get in touch with
        her and she will work with you to ensure you get what you need
        while supporting the conference. There are a number of tiers,
        with different benefits and price tags, so there should be
        something that is right for you.
      </p>
      <br />
    </section>

    <section id="sponsorship-agreed">
      <h1 tabIndex="0">
        Once your support level has been confirmed.
      </h1>
      <a name="contract" />
      <h2 tabIndex="0">
        The process of becoming a sponsor or partner.
      </h2>
      <p tabIndex="0">
        <strong>
          Once your company and Rachel have agreed on the sponsorship
          opportunity and terms:
        </strong>
      </p>
      <p tabIndex="0">
        <ol>
          <li> Send Rachel your Companies House details/link.</li>
          <li> We will send you a contract to sign.</li>
          <li>
            {' '}
            Send back the signed contract and the payment method you
            want to use.
          </li>
          <li> We will send you back a co-signed contract.</li>
          <li> An invoice for the agreed amount will be sent.</li>
          <li>
            {' '}
            There may be assets we have asked for such as logos or
            company description. Please send these over early so that
            we can make any website and social media changes.
          </li>
          <li>
            {' '}
            Once the amount has been paid - you will recieve the
            benefits outlined by the agreement.
          </li>
          <li>
            {' '}
            Your support will be announced on our social media
            channels.
          </li>
        </ol>
      </p>
      <br />
      {/* <SponsorButton /> */}
    </section>

    <style jsx>
      {`
        section {
          max-width: ${theme.sizes.maxContentWidth};
          padding: ${theme.sizes.contentPadding};
          margin: auto;
        }
        section div {
          padding-bottom: 10px;
        }

        .picture {
          width: 150px;
          border-radius: 50%;
        }

        @media only screen and (max-width: 810px) {
          .picture {
            display: none;
          }
        }
      `}
    </style>
  </Layout>
);
