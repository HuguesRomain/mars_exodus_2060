import React, { useState } from "react";
import { CommentItem } from "./organismes/CommentItem";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { rem } from "polished";
import { color } from "styles/const";

const CommentList = styled.ul`
  padding: 0 ${rem(10)};
`;

const BackSection = styled.div`
  width: 100vw;
  padding: ${rem(10)} 0 0 ${rem(10)};
  background-color: ${color.light.PureWhite};
`;

const MobileCommentStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

type Comments = {
  author: string;
  avatar: string;
  date: Date;
  text: string;
};
const comment = [
  {
    author: "Sezer Celik",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C5603AQHhfdZN6P5jBA/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=A6ymlRiTyS0ieUQ3Dvbzi5oOf4l-0Jiw3CBeqqPoo_w",
    date: new Date("2020-06-23T00:00:00"),
    text: "ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    author: "Sezer Celik",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C5603AQHhfdZN6P5jBA/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=A6ymlRiTyS0ieUQ3Dvbzi5oOf4l-0Jiw3CBeqqPoo_w",
    date: new Date("2020-06-23T00:00:00"),
    text: "ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const MobileComments = () => {
  const [comments /* setComments */] = useState<Comments[]>(comment);

  return (
    <MobileCommentStyle>
      <BackSection
        onClick={() => {
          window.history.back();
        }}
      >
        <Icon name={"backarrow"} />
      </BackSection>
      <CommentList>
        {comments &&
          comments.map((value) => {
            return <CommentItem key={value.author} comments={value} />;
          })}
      </CommentList>
    </MobileCommentStyle>
  );
};

export default MobileComments;
