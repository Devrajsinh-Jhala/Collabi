import React from "react";
import GoalsBox from "../components/GoalsBox";

const Goals = () => {
  return (
    <div className="flex h-[100%] items-center justify-center ">
      <div className="flex flex-col items-center mt-24 ">
        <div className="right flex flex-col items-center justify-center  ml-4 mr-4 mb-10 ">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <GoalsBox
                text={"Web3 Builder"}
                subText={"Building innovative Web3 solutions"}
              />
            </div>
            <div>
              <GoalsBox
                text={"Open Source Contributions"}
                subText={"Contributing to open source projects"}
              />
            </div>
            <div>
              <GoalsBox
                text={"Full time roles"}
                subText={"Starting a new role in a full time capacity"}
              />
            </div>
            <div>
              <GoalsBox
                text={"Beta testing new products"}
                subText={
                  "Checking out the newest consumer or business products"
                }
              />
            </div>
            <div>
              <GoalsBox
                text={"Brainstorming"}
                subText={
                  "Joining video calls to brainstorm with like minded people on certain problems & ideas"
                }
              />
            </div>
            <div>
              <GoalsBox
                text={"Co-founding a company"}
                subText={
                  "Building up a business from vision to reality with a co-founder"
                }
              />
            </div>
            <div>
              <GoalsBox
                text={"Content Creation"}
                subText={
                  "Creating appealing and awe-inspiring content for the developers"
                }
              />
            </div>

            <div>
              <GoalsBox
                text={"Giving resume feedback"}
                subText={"Reviewing and critiquing the resumes of people"}
              />
            </div>
            <div>
              <GoalsBox
                text={"Mentoring"}
                subText={
                  "Becoming a mentor & playing a pivotal role in the success of a developer’s career"
                }
              />
            </div>

            <div>
              <GoalsBox
                text={"Participating in User Research"}
                subText={"Sharing your thoughts on early products or services"}
              />
            </div>
            <div>
              <GoalsBox
                text={"Writing"}
                subText={"Contributing articles or blogs on certain topics"}
              />
            </div>
            <div>
              <GoalsBox
                text={"Internships"}
                subText={"Joining companies or organizations as an intern"}
              />
            </div>
            <div>
              <GoalsBox
                text={"Investing"}
                subText={
                  "Investing in startups through crowdfunding and direct investments"
                }
              />
            </div>
            <div>
              <GoalsBox
                text={"Technical and career talks"}
                subText={
                  "Attending and giving developer talks with topics like new tools and frameworks, technical concepts, etc"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
