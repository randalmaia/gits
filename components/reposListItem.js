import React from 'react'


function ReposListItem(props){
  return (
    <li className="repos-list-item">
      <div className="repos-list-item-image-wrap">
        <img className="repos-list-item-image" src={props.repository.owner.avatar_url} />
      </div>
      <a className="repos-list-item-name" target="_blank" href="{html_url}">{props.repository.name}</a>
      <span className="repos-list-item-description">{props.repository.description}</span>
      <a href={props.repository.stargazers_count} className="repos-list-item-action">see good issues</a>

      <style jsx>{`
        .repos-list-item{
          margin: 1vw 0;
          background-color: white;
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
          color: black;
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
          font-size: 0.9em;
          font-weight: 500;
          color: #adadad;
          justify-self: start;
          align-self: center;
        }

        .repos-list-item-action{
          color: #12c2e9;
          grid-area: action;
          font-weight: 500;
          padding: 2px;
          justify-self: end;
          align-self: center;
          margin-right: 1.1vw;
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