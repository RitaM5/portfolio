import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-12 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-3">
          I'm a passionate web designer & developer. I have pretty solid experience in frontend web development.
          I'm expert in HTML, CSS, SASS, Bootstrap 5, Tailwind, JavaScript ES6 and React JS, Node Js, MongoDb (Always love to learn something new).
          I really love to code & my happiness is to solve these problems with joy, in modular and reusable way so the project always remains scalable and maintainable.
        </p>

        <br />

        <p className="text-xl mb-4">
          Motivated to learn, grow and excel in Industry.     
        </p>
        <p className="text-xl">
        𝐇𝐨𝐰 𝐈'𝐦 𝐡𝐞𝐥𝐩𝐢𝐧𝐠 𝐲𝐨𝐮:<br/>
          * I can build websites with amazing UI UX<br/>
          * I will make your website dynamic<br/>
          * I will analyze your requirements properly
        </p>
      </div>
    </div>
  );
};

export default About;
