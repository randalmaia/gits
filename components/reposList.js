import React from 'react'
import ReposListItem from "../components/reposListItem"
import Link from 'next/link'


function ReposList(props){
  const reposListComps = props.repos.map((repository) =>
    <ReposListItem key={repository.full_name} repository={repository}></ReposListItem>
  );
  return (
    <div className="container-fluid repos-list-container">
      <div className="row center-xs">
          <div className="col-xs-6">
            <div className="repos-list-container-links">
              <Link href="/">
                <a href="#" className="repos-list-container-link">Popular Javascript repos from Github</a>
              </Link>
            </div>
          </div>
        </div>

      <div className="row center-xs">
        <div className="col-xs-6">
          <ul className="repo-list">
            { reposListComps }
          </ul>
        </div>
      </div>

      <style jsx>{`
        .repos-list-container{
          margin-top: 6vw;
        }

        .repos-list-container-link{
          font-size: 1.2em;
          padding-bottom:10px;
          border-bottom: 3px solid black;
          display: inline-block;
          margin-right: 1.5vw;
          margin-bottom: 1.5vw;
          text-decoration: none;
        }

        .repo-list{
          list-style: none;
        }
    `}</style>
    </div>
  )
}

export default ReposList;
