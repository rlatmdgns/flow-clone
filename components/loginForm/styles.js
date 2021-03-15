import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  margin: 0 auto;
`
export const Fieldset = styled.fieldset`
  margin:0;
  padding:0;
  border:0;
  text-align:center;
`
export const Blind = styled.legend`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
export const LoginTitle = styled.h3`
  margin: 20px 0;
  font-weight: bold;
  font-size: 36px;
  color: #333;
  text-align:center;
`
export const LoginInputBox = styled.div`
 & + & {
   margin-top: 12px;
 }
 text-align:left;
`
export const LoginMessage = styled.p`
margin:10px 0 30px 0;
font-size: 13px;
color: #FF6B6B;
text-align:left;
`
export const LoginButton = styled.button`
  width: 400px;
  height: 45px;
  border-radius: 4px;
  background: #6449FC;
  color:#fff;
`
export const LoginInput = styled.input`
  width: 400px;
  height: 45px;
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid #999;
  background: #fff;
  box-sizing: border-box;
  font-size:14px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
`
