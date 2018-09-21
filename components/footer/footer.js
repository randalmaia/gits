import React from 'react'


function Footer(props){
  return (
    <footer className="footer">
      <div className="row center-xs">
        <div className="col-xs-2">
            <div className="box footer-message">
                <a rel="noopener" href="https://twitter.com/randalmaia" target="_blank">made by randalmaia</a> ❤️
            </div>
        </div>
      </div>
      <style jsx>{`
        .footer{
          padding: 2vw;
          margin-top: 3vw;
          background: #12c2e9;
          background: -webkit-linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
          background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
        }

        .footer-message a{
          font-size: 0.8em;
          text-decoration: none;
          color: white;
          font-weight: 400;
        }

        .footer-message a:hover{
          text-decoration: underline;
        }
    `}</style>
    </footer>

  )
}

export default Footer;