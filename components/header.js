import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className="container-fluid header-container">
        <div className="row">
          <div className="col-xs-12">
            <a href="#" className="header-container-logo">
              GITS
              <span className="header-container-logo-lead">good issues to start</span>
            </a>
          </div>
        </div>

        <div className="row center-xs">
            <div className="col-xs-6">
                <div className="box header-container-slogan">
                    Good issues to you start with
                    <span className="header-container-slogan-select">Javascript</span>
                </div>
            </div>
        </div>

        <style global jsx>{`
          * {
            font-family: 'Montserrat', Helveltica, sans-serif;
            font-weight: 600;
            margin: 0;
            padding: 0;
          }

          body, a{
            background-color: #ffffff;
            color: #585858;
          }
        `}

        </style>

        <style jsx>{`
          .header-container{
            background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }

          .header-container-logo{
            background: transparent;
            color: white;
            text-decoration: none;
            font-size: 2.5vw;
            padding: 2vw 0 0;
            display: block;
          }

          .header-container-logo-lead{
            font-size: 1vw;
            margin-left: 5px;
          }

          .header-container-slogan{
            font-size: 3.5vw;
            margin: 0.6em 0 1.6em;
          }

          .header-container-slogan-select{
            text-decoration: underline;
            margin-left: 0.3em;
          }
      `}</style>
      </div>
    )
  }
}
