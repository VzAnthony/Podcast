import Layout from '../components/Layout'
import Link from 'next/link'

function Error({ statusCode }) {
  return (
    <>
      <Layout title='Oops :c'>
        <p>
          {statusCode === 404
            ? <div className="message">
              <h1>Esta pagina no Existe</h1>
              <Link href='/'>
                <button className='btn'>Volver al Home</button>
              </Link>
            </div>
            :
            <div className="message">
              <h1>Hubo un Problema</h1>
              <p>Intenta Nuevamente en unos Segundos</p>
              <Link href='/'>
                <button className='btn'>Volver al Home</button>
              </Link>
            </div>
          }
        </p>
      </Layout>

      <style jsx>{`
        .message {
          padding: 100px 30px;
          text-align: center;
        }
        h1 {
          margin-bottom: 1em;
        }
        .btn{
          width:200px;
          height:50px;
          margin: 10px;
          font-size:15px;
          border:1px solid #e4e3e3;
          border-radius: 20px;
          background-color: #3b6978;
          color:#fff;
          cursor:pointer;
        }
        .btn:hover{
          text-decoration:underline;
        }
        `}</style>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error