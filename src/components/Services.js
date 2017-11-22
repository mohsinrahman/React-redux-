import React, { Component } from 'react';
import digital from './../images/digital-ff4b4aa182.svg';
class Services extends Component{
  render(){
    return(
        <div>

        <section>
            <div className="services--overview row">
                <div className="medium-4 columns medium-push-8 services--overview__img--div"><img className="services--overview__digital--img" alt="pic"rel=" " src={digital}/></div>
                <div className="medium-8 columns medium-pull-4"><h2>Teknisk innovation, produktion och rådgivning</h2>
                    <p>Alla kunders behov varierar. En prototyp för en ny tjänst, en helt ny teknisk innovation, en MVP för att
                        bevisa affärsnytta eller produktion av mobila applikationer eller webbplatser.</p>
                    <p>Med K-Mits mångåriga erfarenhet inom teknik, projektledning och utveckling kan vi med hjälp av vårt
                        extensiva nätverk ta oss an nästan alla utmaningar som våra kunder ställs inför.</p>
                    <p>Vi har glädjen att jobba med stora och små kunder i projekt som berör digitala strategier,
                        webbproduktion, applikationer för mobil, dator och surfplatta samt teknisk innovation.</p></div>
            </div>
        </section>
        <hr/>
        <section>
            <div className="row">
                <div className="medium-4 columns"><h3>Utveckling</h3>
                    <p>K-mit har mångårig erfarenhet av intelligenta webblösningar där den senaste tekniken möter hållbara och
                        väl beprövade metoder. Vi skapar moderna webbplatser som ser lika bra ut i mobilen som på datorskärmen
                        eller surfplattan.</p></div>
                <div className="medium-4 columns"><h3>Teknik</h3>
                    <p>Tekniskt kunnande och extrem teknisk nyfikenhet utmärker K-mit. Främst kretsar intresset kring olika
                        typer av möjlig och omöjlig digitalisering men ämnen som bilmotorer, solceller och Internet of Things
                        faller också inom vårt intresseområde.</p></div>
                <div className="medium-4 columns"><h3>Rådgivning</h3>
                    <p>Kanske har du en idé om digitalisering som du vill ha verifierad? Du kanske vill ha en prisuppgift på ett
                        digitalt projekt? Ha tekniskt stöd i utformandet av en upphandling eller förslag på tekniska
                        lösningar?<br/>Berätta! Vi bjuder på kaffe.</p></div>
            </div>
        </section>
        <hr/>
        </div>
    );
  }
}
export default Services;
