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

        <style jsx>{`
          .header-container{
            background: #12c2e9;
            background: -webkit-linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
            background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
            color: white;
          }

          .header-container-logo{
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
            margin: 1em 0;
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