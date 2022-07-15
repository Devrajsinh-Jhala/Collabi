import React from "react";
import SocialCards from "../components/SocialCards";

import blockchain from "../assets/blockchain.png";
import brainstorm from "../assets/brainstorm.png";

import apps from "../assets/apps.png";

import crowdfunding from "../assets/crowdfunding.png";
import blogging from "../assets/blogging.png";
import mentoring from "../assets/mentoring.png";
import mentor from "../assets/mentor.png";
import feedback from "../assets/feedback.png";
import promote from "../assets/promote.png";
import content from "../assets/content-creator.png";
import launch from "../assets/launch.png";

const Goals = () => {
  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left fixed top-0 left-0 bottom-0 ">
        <div className=" min-h-[100%] hidden sm:flex lg:w-[400px] bg-[#f1f5f9] xl:w-[500px] 2xl:w-[800px] object-cover" />
      </div>
      <div className="flex flex-col relative sm:right-0 lg:-right-[400px] xl:-right-[500px]  2xl:-right-[900px] items-center mb-10 mt-10 ">
        <div className="pl-[2rem] mt-10 h-[100%]  ">
          <div className=" flex items-center mb-10 justify-center">
            <div className="grid align-middle mb-10 grid-cols-2 gap-x-5 gap-y-5">
              <div className="col-span-1">
                <SocialCards
                  heading={"Web3 Builder"}
                  description={"Building innovative Web3 solutions"}
                  icon={blockchain}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Open Source Contributions"}
                  description={"Contributing to open source projects"}
                  icon={brainstorm}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Full Time Roles"}
                  description={"Starting a new role in a full time capacity"}
                  icon={promote}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Writing"}
                  description={
                    "Contributing articles or blogs on certain topics"
                  }
                  icon={blogging}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Beta testing new products"}
                  description={
                    " Checking out the newest consumer or business products "
                  }
                  icon={apps}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Brainstorming"}
                  description={
                    "Joining video calls to brainstorm with like minded people on certain problems & ideas"
                  }
                  icon={brainstorm}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Co-founding a company"}
                  description={
                    "Building up a business from vision to reality with a co-founder"
                  }
                  icon={launch}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Content Creation"}
                  description={
                    "Creating appealing and awe-inspiring content for the developers"
                  }
                  icon={content}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Giving resume feedback"}
                  description={"Reviewing and critiquing the resumes of people"}
                  icon={feedback}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Mentoring"}
                  description={
                    "Becoming a mentor & playing a pivotal role in the success of a developer’s career"
                  }
                  icon={mentor}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Participating in User Research"}
                  description={
                    "Sharing your thoughts on early products or services"
                  }
                  icon={blockchain}
                />
              </div>

              <div className="col-span-1">
                <SocialCards
                  heading={"Internships"}
                  description={
                    "Joining companies or organizations as an intern"
                  }
                  icon={brainstorm}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Investing"}
                  description={
                    "Investing in startups through crowdfunding and direct investments"
                  }
                  icon={crowdfunding}
                />
              </div>
              <div className="col-span-1">
                <SocialCards
                  heading={"Technical and career talks"}
                  description={
                    "Attending and giving developer talks with topics like new tools and frameworks, technical concepts, etc"
                  }
                  icon={mentoring}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
