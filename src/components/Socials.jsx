import { useState } from "react";
import { IconContext } from "react-icons";
import { FiInstagram } from "react-icons/fi";
import { BiGlobe } from "react-icons/bi";
import { IoLogoTwitter, IoIosCloseCircle } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

const Socials = () => {
  const [currSocials, setCurrSocials] = useState([]);
  const socialsArr = [
    { id: 1, value: <BiGlobe /> },
    { id: 2, value: <FiInstagram /> },
    { id: 3, value: <IoLogoTwitter /> },
    { id: 4, value: <IoLogoTiktok /> },
  ];

  const handleSocialClick = (social) => {
    let flag = false;
    currSocials.forEach((item) => {
      if (item.id === social.id) flag = true;
    });

    if (!flag) setCurrSocials([...currSocials, social]);
  };

  const handleCloseClick = (index) => {
    setCurrSocials(currSocials.filter((item) => item.id !== index));
  };

  return (
    <div className="flex flex-col font-inter justify-center">
      <div className="font-medium text-gray-70 text-sm">Social Accounts</div>
      <div className="mt-1.5 mb-2">
        {currSocials.map((social) => (
          <div className="flex h-[46px] mb-1 items-center">
            <IconContext.Provider
              value={{
                size: "1.25rem",
                className: "text-black hover:text-green-50 cursor-pointer",
              }}
            >
              <div className="border-y border-l border-gray-20 py-[10px] px-[14px] bg-primary-gray rounded-l-lg h-full flex items-center">
                {social.value}
              </div>
            </IconContext.Provider>
            <input
              type="text"
              className="border-y border-x font-inter border-gray-400 rounded-r-lg py-[10px] px-[14px] w-[350px] hover:border-gray-500  h-full text-sm leading-[1.3rem] tracking-[-0.015em] font-normal text-black"
              placeholder="URL or username"
            />
            <IconContext.Provider value={{ color: "#737577", size: "1.25rem" }}>
              <div
                className="cursor-pointer ml-2"
                onClick={() => handleCloseClick(social.id)}
              >
                <IoIosCloseCircle />
              </div>
            </IconContext.Provider>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <IconContext.Provider
          value={{
            size: "1.25rem",
            className: "text-gray-70 hover:text-green-500 cursor-pointer",
          }}
        >
          {socialsArr.map((social) => (
            <div
              className="my-[8px] mx-[12px] pr-[8px]"
              onClick={() => handleSocialClick(social)}
            >
              {social.value}
            </div>
          ))}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Socials;
