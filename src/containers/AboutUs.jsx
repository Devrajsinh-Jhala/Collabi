import React from "react";
import AboutUsBigCards from "../components/AboutUsBigCards";
import AboutUsCard from "../components/AboutUsCard";
import BigCard from "../components/BigCard";
import Navbar from "../components/Navbar";
import Footer from "../containers/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[100vh] bg-[#f8f8f8] h-[100%] flex flex-col items-center justify-center ">
        <div className=" h-fit mt-40">
          <div className="flex flex-col items-center leading-[4rem] justify-center">
            <div className=" text-[40px] px-5 sm:text-[56px] w-fit overflow-hidden lg:w-[850px] font-inter tracking-normal sm:tracking-[-0.15625rem] font-bold leading-[3rem] sm:leading-[4rem] text-[#6b6f76]">
              <span className=" mr-3 text-[40px] sm:text-[56px]">
                Say goodbye to crypto investing bcz it's time to
              </span>
              <span className=" text-[40px] sm:text-[56px] font-inter text-transparent bg-clip-text bg-gradient-to-br from-[#6699FF] to-[#FF3366] tracking-normal sm:tracking-[-0.15625rem] font-bold ">
                earn crypto
              </span>
            </div>
            {/* text-[56px] font-inter text-transparent bg-clip-text bg-gradient-to-br from-[#6699FF] to-[#FF3366] tracking-[-0.15625rem] font-bold  */}
          </div>
          <div className="flex flex-col  md:w-[740px] mb-10">
            <div className="flex flex-col items-center justify-center">
              <p className=" mt-8 font-inter px-5 md:px-5 text-base sm:text-[15px] leading-6">
                MetaDev is the world’s first exclusive members only web3
                professional networking platform built for Developers with ideas
                never heard before aimed at transforming the experiences of
                Developers and making their dreams come true.
              </p>
            </div>
            <p className="mt-5 font-inter px-5 sm:px-5 text-base md:text-[15px] leading-6">
              MetaDev rewards Developers with crypto tokens for spending their
              time productively, pursuing their goals & interests and adding
              value to the community.
            </p>
            <p className="mt-5 font-inter px-5 sm:px-5 text-base md:text-[15px] leading-6">
              It's nice to meet you! 👋🏼
            </p>
          </div>

          <div className="flex items-center mx-5 md:mx-0 justify-center">
            <AboutUsBigCards
              primary={"bg-slate-400"}
              subHeading={""}
              heading={"Why MetaDev?"}
              description={
                "Mass adoption has been a long-standing goal for the blockchain and crypto industry. Almost every business in this space strives for mass adoption in one way or the other. But, with just over 300 million crypto users and 70 million blockchain wallet users, there’s clearly a long way to go. Lack of real time use cases can be credited as the biggest deterrent to mass adoption. "
              }
              description2="Social Media on the Blockchain (SocialFi) Could Be Key to Mass Adoption."
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="text-[36px] mt-10 font-inter text-left tracking-[-1px]  font-bold text-[#6b6f76]">
              The Problem
            </div>
          </div>

          <div className=" flex mx-5 md:mx-5 flex-col sm:flex-row sm:space-x-5 items-center justify-center mt-10 ">
            <div className="">
              <AboutUsCard
                description={
                  "LinkedIn is on a slippery slope, fuelled by a focus on advertising that is fast eroding its value as a platform for meaningful professional networking."
                }
              />
            </div>
            <div className="">
              <AboutUsCard
                description={
                  "Content that was once frowned upon on Facebook is now the new normal on LinkedIn. LinkedIn has become the new Facebook"
                }
              />
            </div>
          </div>

          <div className="flex mx-5 md:mx-5 items-center justify-center mb-10">
            <BigCard
              description={
                "As a software developer, it's been incredibly frustrating using networks where connections are meaningless, content is focused on self-promotion, messages become spam, and community is built top-down, instead of bottom-up. It deteriorates the user experience, and worse, it kills the value of the network"
              }
            />
          </div>
        </div>

        <div className="-mt-12 mx-5 md:mx-5">
          <AboutUsBigCards
            primary={"bg-slate-400"}
            heading={"Vision"}
            description={
              "What if there was a truly professional networking platform for Developers? What if there was a new way for developers to collaborate, connect, share knowledge and monetize their time spent? What if there was a crypto token with a true use case which you can spend without the need of converting it into fiat?"
            }
            description2={
              "With Metadev, we believe that this is not only possible but absolutely necessary."
            }
          />

          <AboutUsBigCards
            primary={"bg-slate-400"}
            heading={"Mission"}
            description={
              "Our mission is to create a truly professional networking platform for developers where every developer is rewarded for every moment that they spend on the platform to explore their passion and interests and make their dreams come true."
            }
            description2={""}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
