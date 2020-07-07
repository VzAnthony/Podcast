import Link from 'next/link';
import Head from 'next/head';

const Layout = (props) => {
  const { title } = props
  return <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>

    <header><Link href='/'><a>Podcast</a></Link></header>

    {props.children}

    <style jsx>{`
    header {
        color: #fff;
        background: #393e46;
        font-weight:bold;
        padding: 15px;
        text-align: center;
      }
    header a {
      color: #fff;
      text-decoration:none
    }
      `}</style>

    <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background-color: #eeeeee ;
        }
              `}</style>


  </div>
}

export default Layout