import React from "react";
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

const Author = styled.p<{ isDark: boolean }>`
  font-weight: 500;
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
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
type Props = {
  comment: string;
};
export const CommentItem = ({ comment }: Props) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const itemOfComment = useGetComment(comment);

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

  return (
    <Comment>
      <Avatar
        src="https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-07/The-Boys-Season-1-Episode-2-Homelander.jpg"
        size={iconSize.l}
      />
      <Content isDark={isDark}>
        <div style={{ display: "flex", marginBottom: space.xs }}>
          <Author isDark={isDark}>Fline</Author>
          <Since>{PublishDate}</Since>
        </div>
        <Text isDark={isDark}>{itemOfComment && itemOfComment.content}</Text>
      </Content>
    </Comment>
  );
};
