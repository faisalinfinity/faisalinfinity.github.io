import { Center, Heading ,Icon} from "@chakra-ui/react";
import React from "react";
import { SiGithub } from "react-icons/si";

const Githubstat = () => {
  return (
    <div>
        <br />
        <Center>  <Heading ><Icon as={SiGithub}></Icon> Github Stats</Heading></Center>
        <br />
        <br />
   
      <p align="left">
        {" "}
      {" "}
      </p>

      <div align="center" style={{ display: "flex", gap: "20px" }}>
        <img
          alt="streak"
          src="https://github-readme-stats.vercel.app/api?username=faisalinfinity&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true"
         style={{width:"50%"}}
        />

        <div align="center" style={{ display: "flex" }}>
          <img
            alt="streak"
            src="https://streak-stats.demolab.com?user=faisalinfinity&_border=true&theme=dark&hide_border=true&theme=react"
            style={{width:"50%"}}
          />
        </div>

        <img
          alt="streak"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=faisalinfinity&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true"
          style={{width:"50%"}}
        />
      </div>

      <h2 align="left">⚡Activity Graph:</h2>
   
        <img
          alt="Faisal Activity Graph"
          src="https://github-readme-activity-graph.cyclic.app/graph?username=faisalinfinity&theme=react-dark&hide_border=true"
        />
     
    </div>
  );
};

export default Githubstat;
