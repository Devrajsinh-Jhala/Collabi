import React from "react";
import CompanyLogo from "../components/CompanyLogo";
import Adobe from "../assets/adobe-01.png";
import Amazon from "../assets/amazon-01.png";
import Apple from "../assets/apple-01.png";
import Baidu from "../assets/baidu-01.png";
import Careem from "../assets/careem-01.png";
import Coupang from "../assets/coupang-01.png";
import Gojek from "../assets/gojek-01.png";
import Google from "../assets/google-01.png";
import Kakao from "../assets/kakao-01.png";
import Lazada from "../assets/lazada-01.png";
import Meta from "../assets/meta-01.png";
import Microsoft from "../assets/mircrosoft-01.png";
import Noon from "../assets/noon-01.png";
import logo1 from "../assets/companyLogos/1.png";

import logo5 from "../assets/companyLogos/5.png";

import logo16 from "../assets/companyLogos/16.png";

import logo18 from "../assets/companyLogos/18.png";
import logo19 from "../assets/companyLogos/19.png";

import logo21 from "../assets/companyLogos/21.png";

import logo23 from "../assets/companyLogos/23.png";
import logo24 from "../assets/companyLogos/24.png";

function Companies() {
  return (
    <div className="min-h-[50vh] font-inter py-12 px-4 bg-slate-100">
      <div className="w-[90%] lg:w-[60%] xl:w-[45%] mx-auto text-center big-text mt-24 mb-12">
        We are just as picky as you are
      </div>
      <div className="w-[90%] lg:w-[60%] xl:w-[45%] mx-auto text-center mt-12 mb-12">
        Join the community of developers from the most exciting, innovative and
        fast-moving companies.
      </div>
      <div className="w-[90%] lg:w-[70%]  text-center overflow-hidden mt-0 mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <CompanyLogo company={"Adobe"} image={Adobe} />
          <CompanyLogo company={"Amazon"} image={Amazon} />
          <CompanyLogo company={"Apple"} image={Apple} />
          <CompanyLogo company={"Airbnb"} image={logo1} />
          <CompanyLogo company={"Baidu"} image={Baidu} />
          <CompanyLogo company={"Careem"} image={Careem} />
          <CompanyLogo company={"Coupang"} image={Coupang} />
          <CompanyLogo company={"Deliveroo"} image={logo5} />
          <CompanyLogo company={"Gojek"} image={Gojek} />
          <CompanyLogo company={"Google"} image={Google} />
          <CompanyLogo company={"Kakao"} image={Kakao} />
          <CompanyLogo company={"Klarna"} image={logo16} />
          <CompanyLogo company={"Lazada"} image={Lazada} />
          <CompanyLogo company={"Meta"} image={Meta} />
          <CompanyLogo company={"Microsoft"} image={Microsoft} />
          <CompanyLogo company={"Monzo"} image={logo18} />
          <CompanyLogo company={"Netflix"} image={logo19} />
          <CompanyLogo company={"Noon"} image={Noon} />
          <CompanyLogo company={"Spotify"} image={logo23} />
          <CompanyLogo company={"Revolut"} image={logo21} />
          <CompanyLogo company={"Starling Bank"} image={logo24} />
        </div>
      </div>
    </div>
  );
}

export default Companies;
