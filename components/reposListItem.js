import React from 'react'


function ReposListItem(props){
  return (
    <li className="repos-list-item">
      <div className="repos-list-item-image-wrap">
        <img className="repos-list-item-image" src={props.repository.owner.avatar_url} />
      </div>
      <a className="repos-list-item-name" target="_blank" href="{html_url}">{props.repository.full_name}</a>
      <p className="repos-list-item-description">{props.repository.description}</p>
      <span className="repos-list-item-stars">⭐ {props.repository.stargazers_count}</span>

      <style jsx>{`
        .repos-list-item{
          padding: 1vw;
          margin: 1vw 0;
          background-color: white;
          display: grid;
          grid-template-columns: 5% auto auto auto;
          grid-template-areas:
            "image name . star"
            "image description . star";

        }

        .repos-list-item-image-wrap{
          display: inline-block;
          grid-area: image;
          align-self: center;
        }

        .repos-list-item-image{
          max-heigth: 100%;
          max-width: 100%;
        }

        .repos-list-item-name{
          display: inline-block;
          grid-area: name;
          margin-left: 1.1vw;
          color: black;
          font-size: 1.2em;
        }

        .repos-list-item-description{
          display: inline-block;
          max-width:auto;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          grid-area: description;
          margin-left: 1.1vw;
          font-size: 0.9em;
          color: #adadad;
        }

        .repos-list-item-stars{
          display: inline-block;
          grid-area: star;
          align-self: center;
          justify-self: end;
        }


    `}</style>
    </li>

  )
}

export default ReposListItem;