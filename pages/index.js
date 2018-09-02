import "../node_modules/flexboxgrid/css/flexboxgrid.css"
import "../css/style.css"
import Head from 'next/head'
import Header from "../components/header"
import fetch from 'isomorphic-unfetch'


const Index = ({agent}) =>
        <div>
            <Head>
              <title>GITS - Good issues to start on open source</title>
            </Head>
            <Header agent={agent}></Header>
        </div>

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { agent: json.stargazers_count }
}



export default Index