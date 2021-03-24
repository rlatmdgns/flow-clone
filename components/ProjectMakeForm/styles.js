import styled, { css } from 'styled-components';

export const ProjectFormPopup = styled.div`
  max-width: 600px;
  padding: 20px 30px 15px;
  background: #fff;
  border: 1px solid #777;
  box-sizing: border-box;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PopupTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const CloseButton = styled.button``;
export const Content = styled.div`
  margin: 30px 0;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  font-weight: bold;
  font-size: 20px;
  ::placeholder {
    color: #999;
  }
`;
export const DescriptionTextArea = styled.textarea`
  overflow: auto;
  display: block;
  width: 540px;
  height: 80px;
  margin-top: 20px;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 13px;
  resize: none;
  ::placeholder {
    color: #999;
  }
`;
export const SetArea = styled.div`
  margin-top: 32px;
`;
export const SetItem = styled.div`
  display: flex;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  & + & {
    margin-top: 10px;
  }
`;
export const SetTitle = styled.p`
  margin: 0 0 12px 0;
  font-weight: bold;
  font-size: 13px;
  color: #555;
`;
export const SetText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;
export const Circle = styled.i`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #eee;
`;
export const ToggleButton = styled.div`
  width: 50px;
  height: 22px;
  padding: 2px;
  border-radius: 200px;
  background: #ccc;
  box-sizing: border-box;
  transition: background-color 0.25s;

  &:hover {
    background: #999;
    ${Circle} {
      background: #eee;
    }
  }
  ${(props) => {
    if (props.active) {
      return css`
        background: #6449fc;
        ${Circle} {
          background: #fff;
          transition: all 0.25s;
          transform: translateX(28px);
        }
      `;
    }
  }}
`;

export const SubmitButton = styled.button`
  display:block;
  width: 182px;
  height: 36px;
  margin:0 auto;
  border-radius: 4px;
  background: #6449fc;
  font-size: 13px;
  color: #fff;
`;
