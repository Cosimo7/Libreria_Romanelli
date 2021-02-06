import React from 'react'
import "./Footer.css";

function Footer() {
    return (
    
   <div className = "footer"> 
        /
      <img className = "footer__uniLogo"
           src = "/logo.png"
           alt =  " "
      />

      <div className = "footer__description">
         <h1 className = "footer__myName">ROMANO COSIMO</h1>
         <p>Ingegneria dei sistemi informativi</p>
         <small>Matricola 284867</small>
         <p className = "footer__year">LaRomanelli ©2021</p>
      </div>
      
      <div className = "footer__outlook">
         <strong className = "footer__outlookMail">Contatto: </strong>
         <a href="mailto:cosimo.romano@studenti.unipr.it">
            <img className = "footer__outlookImg"
                 src = "outlook_logo.png"
                 alt = " " />
         </a>
      </div>
   
   </div>
        )
}

export default Footer
