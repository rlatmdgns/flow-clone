import styled, { css } from 'styled-components';

export const ProjectWrap = styled.div`
  padding: 0 30px;
`;
export const ProjectList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: -9px;
  list-style: none;
  li {
    margin: 9px;
  }
`;
export const ProjectItem = styled.div`
  position: relative;
  width: 248px;
  height: 178px;
  background: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

export const ProjectColor = styled.div`
  float: left;
  width: 10px;
  height: 178px;
  border-radius: 6px 0 0 6px;
  background: red;
`;
export const ProjectTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
export const ProjectItemContent = styled.div`
  float: left;
  padding: 16px 20px;
  ${ProjectTitle} {
    margin: 28px 0 34px 0;
    display: -webkit-box;
    overflow: hidden;
    max-width: 198px;
    line-height: 24px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
export const TypeButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => (props.buttonType === 'card' ? '/images/icons/icon_card.png' : '/images/icons/icon_list.png')});

  & + & {
    margin-left: 10px;
  }
  ${(props) => (props.active
    ? css`
          background-image: url(${(props) => (props.buttonType === 'card' ? '/images/icons/icon_card_hover.png' : '/images/icons/icon_list_hover.png')});
        `
    : css`
          &:hover {
            background-image: url(${(props) => (props.buttonType === 'card' ? '/images/icons/icon_card_hover.png' : '/images/icons/icon_list_hover.png')});
          }
        `)}
  vertical-align: middle;
`;

export const FilterButton = styled.button`
  width: 18px;
  height: 18px;
  background-image: url('/images/icons/icon_filter.png');
  &:hover {
    background-image: url('/images/icons/icon_filter_hover.png');
  }
  vertical-align: middle;
  ${(props) => props.active
    && css`
      background-image: url('/images/icons/icon_filter_hover.png');
    `}
`;
export const ProjectButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  ${FilterButton} {
    margin-left: 30px;
  }
`;

export const ProjectSetButton = styled.button`
  width: 51px;
  height: 25px;
  background-image: url('/images/icons/icon_projectSet.png');
  &:hover {
    background-image: url('/images/icons/icon_projectSet_hover.png');
  }
  background-repeat: no-repeat;
  vertical-align:middle;
  margin-left:40px;
`;
export const ProjectStatus = styled.div``;
export const ProJectStarButton = styled.button`
  width: 20px;
  height: 24px;
  background-image: url('/images/icons/icon_star.png');

  ${(props) => (props.active
    ? css`
          background-image: url('/images/icons/icon_star_active.png');
        `
    : css`
          &:hover {
            background-image: url('/images/icons/icon_star_hover.png');
          }
        `)}
  background-repeat:no-repeat;
`;
export const People = styled.span`
  font-size: 14px;
  color: #999;
  &:before {
    display: inline-block;
    content: '';
    width: 10px;
    height: 10px;
    margin: 3px 3px 0 0;
    background-image: url('/images/icons/icon_people.png');
    vertical-align: top;
  }
`;

export const StatusArea = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StatusItem = styled.i`
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: top;
  background: url(${(props) => props.status && `/images/icons/icon_${props.status}.png`});
  & + & {
    margin-left: 6px;
  }
`;

export const ProjectAlarmCount = styled.span`
  position:absolute;
  top:-14px;
  right:-14px;
  padding: 6px 8px;
  background: #ff3532;
  border-radius: 200px;
  font-size: 14px;
  color: #fff;
`;
