import { useState } from "react";
import { IconContext } from "react-icons";
import { FiInstagram } from "react-icons/fi";
import { BiGlobe } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

const Socials = () => {
  const [currSocials, setCurrSocials] = useState([]);
  const socialsArr = [
    { id: 1, value: <BiGlobe /> },
    { id: 2, value: <FiInstagram /> },
    { id: 3, value: <IoLogoTwitter /> },
    { id: 4, value: <IoLogoTiktok /> },
  ];

  const handleClick = (social) => {
    console.log("social clicked");
    let flag = false;
    currSocials.forEach((el) => {
      if (el.id === social.id) flag = true;
    });

    if (!flag) setCurrSocials([...currSocials, social]);
  };

  return (
    <div className="flex flex-col font-inter justify-center">
      <div className="font-medium font-inter text-gray-70 text-sm">
        Social Accounts
      </div>
      <div className="mt-1.5 mb-2">
        {currSocials.map((social) => (
          <div className="flex h-[46px] mb-1">
            <IconContext.Provider
              value={{
                size: "1.25rem",
                className: "text-gray-70 hover:text-[#07a460] cursor-pointer",
              }}
            >
              <div className="border-y border-l border-gray-20 py-[10px] px-[14px] bg-primary-gray rounded-l-lg h-full flex items-center">
                {social.value}
              </div>
            </IconContext.Provider>
            <input
              type="text"
              className="border-y font-inter border-x border-gray-20 rounded-r-lg py-[10px] px-[14px] w-full hover:border-gray-50 text-[1rem] h-full"
              placeholder="URL or username"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <IconContext.Provider
          value={{
            size: "1.25rem",
            className: "text-gray-70 hover:text-[#07a460] cursor-pointer",
          }}
        >
          {socialsArr.map((social) => (
            <div
              className="my-[8px] mr-[20px] pr-[8px]"
              onClick={() => handleClick(social)}
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
