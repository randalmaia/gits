import React from 'react'
import { GoLinkExternal } from 'react-icons/go';


function ReposListItem(props){
  const fullIssueLink = (url) => {
     url ;
  }

  return (
    <li className="repos-list-item">
      <div className="repos-list-item-image-wrap">
        <img
          className="repos-list-item-image"
          src={props.repository.owner.avatar_url}
          alt={'Avatar for' + props.repository.full_name}
        />
      </div>
      <a
        className="repos-list-item-name"
        rel="noopener"
        target="_blank"
        href={props.repository.html_url + '/issues?q=is%3Aissue+is%3Aopen+label%3A"good+first+issue"'}
      >
        {props.repository.full_name}
      </a>
      <span className="repos-list-item-description">{props.repository.description}</span>
      <a
        href={props.repository.html_url + '/issues?q=is%3Aissue+is%3Aopen+label%3A"good+first+issue"'}
        rel="noopener"
        target="blank"
        className="repos-list-item-action">

        see issues

        <span className="repos-list-item-action-icon">
          <GoLinkExternal/>
        </span>
      </a>

      <style jsx>{`
        .repos-list-item{
          margin: 1.3vw 0;
          display: grid;
          grid-template-columns: 5% minmax(auto, max-content) minmax(auto, max-content) auto;
          grid-column-gap: 1.1vw;
          grid-auto-columns: min-content;
          grid-auto-flow: row;
          align-content: start;
          grid-template-areas:
            "image name description action";
        }

        .repos-list-item-image-wrap{
          grid-area: image;
        }

        .repos-list-item-image{
          max-heigth: 100%;
          max-width: 100%;
        }

        .repos-list-item-name{
          display: inline-block;
          grid-area: name;
          font-size: 1.2em;
          align-self: center;
        }

        .repos-list-item-description{
          display: inline-block;
          max-width:100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          grid-area: description;
          font-size: 0.8em;
          font-weight: 500;
          justify-self: start;
          align-self: center;
        }

        .repos-list-item-action{
          color: #0064FF;
          grid-area: action;
          font-weight: 500;
          padding: 2px 2px 0;
          justify-self: end;
          align-self: center;
          margin-right: 1.1vw;
          border-bottom: 1px dotted #0064FF;
          text-decoration: none;
        }

        .repos-list-item-action-icon{
          display: inline-block;
          vertical-align: middle;
          line-height: normal;
          font-size:0.8em;
          margin-left: 3px;
        }

        .repos-list-item-action:hover{
          background-color: #12c2e9;
          color: white;
        }


    `}</style>
    </li>

  )
}

export default ReposListItem;
