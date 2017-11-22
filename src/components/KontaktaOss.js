import React, { Component } from 'react';

class KontaktaOss extends Component{
  render(){
    return(
        <div>
        <section>
            <div className="row" id="footer">
                <div className="medium-6 columns medium-push-6"><h4 id="kontakta-oss">Kontakta oss</h4>
                    <p><a href="/cdn-cgi/l/email-protection#30595e565f705b1d5d59441e4355"><span className="__cf_email__" data-cfemail="e881868e87a883c585819cc69b8d">[email&#160;protected]</span></a><br/>Surbrunnsgatan 32<br/>113 48 Stockholm<br/></p></div>
                <div className="medium-6 columns medium-pull-6">
                    <div className="flex-video widescreen" id="gmap_canvas"></div>
                </div>
            </div>
        </section>
        </div>
    );
  }
}
export default KontaktaOss;
