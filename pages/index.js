import "../node_modules/flexboxgrid/css/flexboxgrid.css"
import "../css/style.css"
import Head from 'next/head'
import Header from "../components/header"
import ReposList from "../components/reposList"
import Footer from "../components/footer/footer"
import fetch from 'isomorphic-unfetch'


const Index = ({repositories}) =>
        <div>
            <Head>
              <title>GITS - Good issues to start on open source</title>
            </Head>
            <Header></Header>
            <ReposList repos={repositories}></ReposList>
            <Footer></Footer>
        </div>

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/search/repositories?q=+language:javascript&sort=stars&order=desc')
  const json = await res.json()
  return { repositories: json.items }
}

export default Index