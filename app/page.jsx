import Image from "next/image";
import "./_home.scss";
import HeroSection from "./components/hero_section/hero_section";
import houses from "./houses/houses_data";
import TopConsultants from "./components/top_consultants/top_consultants";
import { BsLinkedin, BsTelegram, BsWhatsapp, BsEnvelope} from "react-icons/bs";
import ContactUsForm from "./components/contact_us/contact_us_form/contact_us_form";

const Home = () => {

  const recent_transactions = houses.slice(0, 3);

  return (
    <main className="home">
    <HeroSection />
    
      {/* section 1 */}
      <section className="section_1 container-sm">
        <h1 className="title_1 text-center container-sm">Buying and selling property with the advice of a real estate consultant</h1>
        <p>
          Buying and selling property is one of the most important transactions in anyone life, principles must be followed.
          The first thing that comes to anyone mind when they hear real estate agent is the commission and the fee that has to be paid. Some people think that they can save money and expenses instead of using the commission, which of course they are right However, due to the sensitivity of the property purchase and sale transactions through a real estate agent, it has advantages:
        </p>
        <ul>
          <li>Buying or selling property takes a lot of time and effort. In addition to talking, talk to different people so that you can find the house you want. A real estate agent will make your work easier and, according to your conditions, sell your property faster or find the property you are looking for.</li>
          <li>Estate agents has various means such as network, website and market knowledge and most importantly experience that can help you find potential buyers.</li>
          <li>After buying and selling or during the transaction, if a problem occurs, you always have a responsible company from which you can demand a warranty.</li>
          <li>The real estate consultants provide you with transparent evaluations of a property.</li>
          <li>As you know, negotiation is very important in the deal and real estate consultants help you to have the best negotiations.</li>
          <li>When closing a sales transaction, some issues may arise that are detrimental to the acquisition of the property. Issues such as title deed, pending home owner loans and family disputes are related to the property. Since real estate agents are familiar with such issues, they advise buyers on whether or not to buy a property.</li>
        </ul>
      </section>

      {/* section 2 */}
      <section className="section_2 row">
          <div className="col-12">
            <h1 className="title_2 text-center">we are with you to make the best choice</h1>
          </div>          
          <div className="section_left col-12 col-md-6 justify-content-center align-items-center px-5 ">
            <h2 className="col-12 mb-5 fs-4">if you have question about this topic, please Contact Us</h2>
            <ContactUsForm />
          </div>

          {/* image */}
          <div className="col-md-6 d-none d-md-flex justify-content-end align-items-center p-0 image_border position-relative"></div>
      </section>

      {/* section 3 */}
      <section className="section_3">
        <TopConsultants />
      </section>

      <section className="section_4 mx-auto p-3 row row-cols-1 row-cols-sm-2 row-gap-3">
          <p className="col text-white m-0 text-center fs-5">Communication with experts</p>
          <div className="col social_container">
            <div><BsLinkedin /></div>
            <div><BsEnvelope /></div>
            <div><BsTelegram /></div>
            <div><BsWhatsapp /></div>
          </div>
      </section>

      <section className="section_5">
          <h2 className="text-center fs-1">Recent Transactions</h2>
          <div className="row row-cols-1 row-cols-sm-3 row-gap-4">
            {
              recent_transactions.map((house) => {
                return (
                  <div key={house.id} className="col">
                    <div className="overflow-hidden">
                      <Image src={house.image} alt={house.city} width={1366} height={766} className="w-100 h-100 object-fit-contain"/>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </section>
    </main>
  );
};

export default Home;