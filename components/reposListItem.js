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
        }

        .repos-list-item-image-wrap{
          width: 5%;
          display: inline-block;
        }

        .repos-list-item-image{
          max-heigth: 100%;
          max-width: 100%;
        }

        .repos-list-item-name{

        }

        .repos-list-item-description{
          display: inline-block;
          max-width:50%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .repos-list-item-stars{
          display: inline-block;
        }


    `}</style>
    </li>

  )
}

export default ReposListItem;