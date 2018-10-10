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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);;
        }

        .footer-message a{
          font-size: 0.8em;
          text-decoration: none;
          background: transparent;
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
