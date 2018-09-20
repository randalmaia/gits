import React from 'react'
import ReposListItem from "../components/reposListItem"
import Link from 'next/link'


function ReposList(props){
  const reposListComps = props.repos.map((repository) =>
    <ReposListItem key={repository.full_name} repository={repository}></ReposListItem>
  );
  return (
    <div className="container-fluid repos-list-container">
      <div className="row">
          <div className="col-xs-12 ">
            <div className="repos-list-container-links">
              <Link href="/">
                <a href="#" className="repos-list-container-link">Popular Javascript repos</a>
              </Link>
              <Link href="featured-repos">
                <a href="#" className="repos-list-container-link repos-list-container-title--disabled">Featured repos to contribute</a>
              </Link>
            </div>
          </div>
        </div>

      <div className="row">
        <div className="col-xs-12">
          <ul className="repo-list">
            { reposListComps }
          </ul>
        </div>
      </div>

      <style jsx>{`
        .repos-list-container{
          margin-top: 6vw;
        }

        .repos-list-container-links{
          border-bottom: 1px solid #adadad;
        }

        .repos-list-container-link{
          font-size: 1.2em;
          padding-bottom:10px;
          border-bottom: 3px solid black;
          display: inline-block;
          color: #2B303A;
          margin-right: 1.5vw;
          text-decoration: none;
        }

        .repos-list-container-link:hover{
          color: #12c2e9;
          border-bottom: 3px solid #12c2e9;
        }

        .repos-list-container-title--disabled{
          color: #adadad;
          text-decoration: none;
          border-bottom: none;
        }

        .repo-list{
          list-style: none;
        }
    `}</style>
    </div>
  )
}

export default ReposList;