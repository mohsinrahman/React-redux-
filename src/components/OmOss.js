import React, { Component } from 'react';

class OmOss extends Component{
  render(){
    return(
        <div>

          <section>
              <div className="row" id="om-oss">
                  <div className="small-12 columns"><h3>Om oss</h3>
                      <p>
                          Vi vet att ett projekt aldrig är det andra likt. Därför har medarbetarna på K-mit en bred bakgrund med
                          tonvikt på digitalisering och strategi såväl som kunskap inom frontend- och backendutveckling,
                          projektledning samt design. Allt för att kunna åstadkomma ett så bra slutresultat som möjligt.<br/><br/>K-mit
                          AB grundades hösten 2014 av bröderna Anton och Pontus Kindblad samt Pontus fru Susanne. Alla tre var
                          sugna på att förverkliga en massa en massa digitala idéer samt att skapa en kreativ och harmonisk
                          arbetsplats där medarbetarna ständigt utvecklas, förverkligar sig själva, och mår bra. Kontoret ligger
                          på Surbrunnsgatan, en lugn bakgata i hjärtat av Vasastan i centrala Stockholm.
                        </p>
                      <div className="row">
                          <div className="column small-12 medium-3">
                            <img className="thumbnail" src="images/anton-5dd33d5978.jpg" alt="pic"rel=" "/>
                          </div>
                          <div className="column small-12 medium-9">
                            <h4>Anton</h4>
                              <p>
                                  Anton är en erfaren och mångsidig utvecklare med 17 år i branschen. Hans fokus ligger på
                                  utveckling av interaktionsgränssnitt och funktionell frontend-utveckling.
                              </p>
                              <p>
                                  Anton har drivit eget företag, jobbat som konsult, jobbat på diverse produktionsbolag och varit
                                  teknisk projektledare i många stora projekt. Bl.a. har Anton jobbat som Technical Director på
                                  produktionsbolaget Acne.
                              </p><
                          /div>
                      </div>
                      <div className="row">
                          <div className="column small-12 medium-3"><img className="thumbnail" src="images/pontus1-20725c9ef4.jpg" alt="pic"rel=" "/></div>
                          <div className="column small-12 medium-9">
                            <h4>Pontus</h4>
                              <p>
                                Pontus har programmerat sedan barnsben och är en mycket skicklig systemarkitekt och backend-programmerare.
                              </p>
                              <p>
                                Han är belönad med Grand Prix i Cannes Cyber Lions, samt ett flertal guld, silver och diplom på
                                olika Guldäggsgalor. Han har stått som vinnare av London International Advertising Awards och
                                fått en guldstjärna för bästa tekniska innovation på Webbspelen.
                              </p>
                              <p>
                                Pontus har tidigare jobbat som Technical Director på reklambyrån DDB i Stockholm, IT-utvecklare
                                och grundare av reklambyrån Farfar, men han har även arbetat som samtalsterapeut och som
                                föreläsare inom ämnen som rör beroenden och hjärnans belöningssystem.
                              </p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="column small-12 medium-3"><img className="thumbnail" src="images/susanne-5499d3530f.jpg" alt="pic"rel=" "/></div>
                          <div className="column small-12 medium-9">
                            <h3>Susanne</h3>
                              <p>
                                  Susanne är en erfaren IT-projektledare och varumärkesstrateg med intresse för kreativ
                                  problemlösning och innovationer. Hon har tidigare arbetat bl.a. som projektledare på Stockholms
                                  universitet och på reklambyrå men också som samtalsterapeut och föreläsare. Susanne har bred
                                  erfarenhet av projektledning, marknadskommunikation, och ledarskap. Hon gillar att sy ihop
                                  projekt och att leda arbetsgrupper med olika viljor och kompetenser mot de bästa resultaten.
                              </p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="column small-12 medium-3"><img className="thumbnail" src="images/johan-7472549321.jpg" alt="pic"rel=" "/></div>
                          <div className="column small-12 medium-9">
                            <h3>Johan</h3>
                              <p>
                                  Sedan januari 2017 är Johan en del av K-mit. Hans kreativitet och problemlösningförmåga är en
                                  stor tillgång i teamet. Johan är en bred webbutvecklare med fokus på frontend och
                                  interaktionsgränssnitt.
                              </p>
                              <p>
                                  Johan har länge frilansat som webbutvecklare, fotograf och filmskapare. Han har tidigare jobbat
                                  som produktexpert på Microsoft och som mentor på Apple med uppdrag att utveckla personalen i
                                  Sveriges första Applebutik.
                              </p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="column small-12 medium-3"><img className="thumbnail" src="images/anna-5c179ac19b.jpg" alt="pic"rel=" "/></div>
                          <div className="column small-12 medium-9">
                            <h3>Anna</h3>
                              <p>
                                  Anna är civilingenjör med specialisering inom medicinsk teknik. Hon har också lång erfarenhet av
                                  digital konstruktion, syntes, digital layout och fysisk verifiering av hårdvara. Anna kodar PHP,
                                  C, C++, C#, HTML och CSS och är en stor tillgång i teamet. Anna har tidigare jobbat på Ericsson,
                                  både som konsult och som Digital designer på Ericsson Microelectronics.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <hr/>
        </div>
    );
  }
}
export default OmOss;
