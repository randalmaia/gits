import "../node_modules/flexboxgrid/css/flexboxgrid.css"
import "../css/style.css"
import Head from 'next/head'
import Header from "../components/header"
import ReposList from "../components/reposList"
import Footer from "../components/footer/footer"
import fetch from 'isomorphic-unfetch'


const featuredRepos = ({repositories}) =>
        <div>
            <Head>
              <title>GITS - Good issues to start on open source</title>
            </Head>
            <Header></Header>
            <ReposList repos={repositories}></ReposList>
            <Footer></Footer>
        </div>

featuredRepos.getInitialProps = async ({ req }) => {
  try{
    const repoList = [];
    return { repositories: repoList }
  }catch(err){
    return { repositories: [] };
  }
}

function hasIssues(repo){
  return repo.has_issues;
}

export default featuredRepos
