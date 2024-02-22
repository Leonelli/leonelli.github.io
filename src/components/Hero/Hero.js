import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";

const handleClickFiverr = () => {
  window.open(FiverUrl, "_blank");
};
const handleClickUpwork = () => {
  window.open(UpworkUrl, "_blank");
};
const handleClickResume = () => {
  window.open(ResumeUrl, "_blank");
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Matteo Leonelli
        </SectionTitle>
        <SectionText>
          An Italian Security Researcher 🇮🇹 specializing in System Security.
          Currently working as PhD student at CISPA Helmholtz Center for Information Security in Germany 🇩🇪.
        </SectionText>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" ,margin: "0 0 80px" }}>
          <Button alt="resume" onClick={handleClickResume}>
            Resume
          </Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
