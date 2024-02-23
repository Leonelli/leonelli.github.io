import React, { useEffect, useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import axios from "axios";

const defaultData = [
  { number: 2, text: "Papers" },
  { number: 5, text: "CVEs" },
  { number: 45, text: "Github Followers" },
];

const Acomplishments = () => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    (async () => {
      const { data: userData } = await getFollowers();
      // console.log(userData);
      if (userData) {
        const newFollowers = data.map((obj) => {
          if (obj.text === "Github Followers") {
            return { ...obj, number: userData.followers };
          }
          return obj;
        });
        setData(newFollowers);
      }
    })();
  }, []);

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`+${card.number}`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;

const getFollowers = () => {
  return axios.get(
    "https://api.github.com/users/leonelli"
    // "https://api.github.com/users/tanv33/followers?per_page=100"
  );
};
