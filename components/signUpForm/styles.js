import styled from 'styled-components';

export const SignUpContent = styled.div`
  width:500px;
  margin: 0 auto;
  text-align:center;
`
export const SignUpTitle = styled.p`
  font-weight: bold;
  font-size: 36px;
`
export const SignUpText = styled.p`
  font-size: 15px;
  em{
    font-style: normal;
    font-weight: bold;
  }
`
export const Form = styled.form`
  margin-top:54px;
  color: #333;
  text-align:left;
  fieldset{
    padding:0;
    border:0;
  }
`
export const FormTitle = styled.div`
  margin-bottom:26px;
  font-weight: bold;
  font-size: 20px;
`
export const Label = styled.label`
  display:block;
  margin-bottom:10px;
`
export const InputBox = styled.div`
 & + & {
   margin-top:20px;
 }
`
export const Input = styled.input`
  width:442px;
  height:36px;
  padding-left:14px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size:14px;
  box-sizing: border-box;
`
export const Blind = styled.legend`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
export const  Termcheck = styled.label`
  font-size: 13px;
  em{
    font-style:normal;
    color: #6449FC;
  }
`

export const SignUpButton = styled.button`
  display:block;
  width: 442px;
  height: 70px;
  margin-top:22px;
  background: #6449FC;
  border-radius: 6px;
  font-size: 14px;
  color:#fff;
`