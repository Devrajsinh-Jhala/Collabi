import React from "react";
import CompanyLogo from "../components/CompanyLogo";
import logo1 from "../assets/companyLogos/1.png";
import logo2 from "../assets/companyLogos/2.png";
import logo3 from "../assets/companyLogos/3.png";
import logo4 from "../assets/companyLogos/4.png";
import logo5 from "../assets/companyLogos/5.png";
import logo6 from "../assets/companyLogos/6.png";
import logo7 from "../assets/companyLogos/7.png";
import logo8 from "../assets/companyLogos/8.png";
import logo9 from "../assets/companyLogos/9.png";
import logo10 from "../assets/companyLogos/10.png";
import logo11 from "../assets/companyLogos/11.png";
import logo12 from "../assets/companyLogos/12.png";
import logo13 from "../assets/companyLogos/13.png";
import logo14 from "../assets/companyLogos/14.png";
import logo15 from "../assets/companyLogos/15.png";
import logo16 from "../assets/companyLogos/16.png";
import logo17 from "../assets/companyLogos/17.png";
import logo18 from "../assets/companyLogos/18.png";
import logo19 from "../assets/companyLogos/19.png";
import logo20 from "../assets/companyLogos/20.png";
import logo21 from "../assets/companyLogos/21.png";
import logo22 from "../assets/companyLogos/22.png";
import logo23 from "../assets/companyLogos/23.png";
import logo24 from "../assets/companyLogos/24.png";

function Companies() {
  return (
    <div className="min-h-[50vh] font-inter py-12 px-4 bg-slate-100">
      <div className="w-[90%] lg:w-[60%] xl:w-[45%] mx-auto text-center big-text mt-36 mb-12">
        We are just as picky as you are
      </div>
      <div className="w-[90%] lg:w-[60%] xl:w-[45%] mx-auto text-center mt-12 mb-12">
        Only the most exciting, innovative and fast-moving companies. From
        startups to tech giants, you{"'"}ll find over 3,500 top companies and
        70,000+ live jobs on Otta
      </div>
      <div className="w-[90%] lg:w-[80%]  text-center overflow-hidden mt-0 mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <CompanyLogo company={"Airbnb"} image={logo1} />
          <CompanyLogo company={"Cazon"} image={logo2} />
          <CompanyLogo company={"Citymapper"} image={logo3} />
          <CompanyLogo company={"Curve"} image={logo4} />
          <CompanyLogo company={"Deliveroo"} image={logo5} />
          <CompanyLogo company={"Depop"} image={logo6} />
          <CompanyLogo company={"Dropbox"} image={logo7} />
          <CompanyLogo company={"Farewill"} image={logo8} />
          <CompanyLogo company={"Flo"} image={logo9} />
          <CompanyLogo company={"Freetrade"} image={logo10} />
          <CompanyLogo company={"Github"} image={logo11} />
          <CompanyLogo company={"Gousto"} image={logo12} />
          <CompanyLogo company={"Habito"} image={logo13} />
          <CompanyLogo company={"HelloFresh"} image={logo14} />
          <CompanyLogo company={"Hopin"} image={logo15} />
          <CompanyLogo company={"Klarna"} image={logo16} />
          <CompanyLogo company={"Lick"} image={logo17} />
          <CompanyLogo company={"Monzo"} image={logo18} />
          <CompanyLogo company={"Netflix"} image={logo19} />
          <CompanyLogo company={"Peloton"} image={logo20} />
          <CompanyLogo company={"Revolut"} image={logo21} />
          <CompanyLogo company={"Spill"} image={logo22} />
          <CompanyLogo company={"Spotify"} image={logo23} />
          <CompanyLogo company={"Starling Bank"} image={logo24} />
        </div>
      </div>
    </div>
  );
}

export default Companies;
