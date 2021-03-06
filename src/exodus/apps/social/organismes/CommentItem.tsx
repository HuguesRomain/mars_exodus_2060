import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  color,
  space,
  iconSize,
  transitionTime,
  breakPoint,
} from "styles/const";
import { Avatar } from "../atoms/Avatar";
import { AppContext } from "exodus/context";
import { useGetComment } from "exodus/services/social/social.hook";
import { formatDistanceToNow } from "date-fns";
import { GetUser } from "exodus/services/social/social.hook";

type Props = {
  comment: string;
};
export const CommentItem = ({ comment }: Props) => {
  const [infoUser, setInfoUser] = useState<UserType>();
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const itemOfComment = useGetComment(comment);

  useEffect(() => {
    if (itemOfComment) {
      GetUser(itemOfComment.author)
        .then((data) => {
          setInfoUser(data);
        })
        .catch(() => {});
    }
  }, [itemOfComment]);

  const avatarPicture = (() => {
    return infoUser && infoUser.profilePicture
      ? `https://symfony-xmt3.frb.io${infoUser.profilePicture}`
      : "https://bit.ly/3fbe0m5";
  })();

  const PublishDate = (() => {
    if (itemOfComment) {
      return formatDistanceToNow(
        // @ts-ignore
        itemOfComment && new Date(itemOfComment.published),
        {
          addSuffix: true,
          includeSeconds: true,
        },
      );
    }
  })();

  console.log(infoUser);

  return (
    <Comment>
      <Avatar src={avatarPicture} size={iconSize.l} />
      <Content isDark={isDark}>
        <ContentHeader>
          <Author isDark={isDark}>
            {infoUser?.firstName} {infoUser?.name}
          </Author>
          <Since>{PublishDate}</Since>
        </ContentHeader>
        <Text isDark={isDark}>{itemOfComment && itemOfComment.content}</Text>
      </Content>
    </Comment>
  );
};

const Comment = styled.li`
  list-style-type: none;
  display: flex;
  margin: ${space.xs} auto 0;
`;

const Content = styled.div<{ isDark: boolean }>`
  background-color: transparent;
  border-radius: 20px;
  padding: ${space.s};
  width: 100%;
  transition: ${transitionTime};

  @media (max-width: ${breakPoint.mobileOnly}) {
    background-color: ${(props) =>
      !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
    margin-left: ${space.s};
    line-height: 30px;
    padding: ${space.xs} ${space.s};
  }
`;

const ContentHeader = styled.div`
  display: flex;
  margin-bottom: ${space.xs};
  justify-content: space-between;
`;

const Author = styled.p<{ isDark: boolean }>`
  font-weight: 500;
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
  white-space: nowrap;
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Since = styled.p`
  display: inline;
  margin-left: ${space.xs};
  color: ${color.medium.Manatee};
`;

const Text = styled.p<{ isDark: boolean }>`
  margin-top: ${space.xs};
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  transition: ${transitionTime};
`;
