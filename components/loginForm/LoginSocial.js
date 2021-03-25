import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { firebaseInstance, authService } from '../../pages/firebase';
import { LoginButton } from './styles';

const LoginSocial = () => {
    //소셜 로그인 > 구글
    // Router.push('./main')
    const router = useRouter();
    const socialLogin = async (e) => {
        e.preventDefault();
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        authService.signInWithPopup(provider).then((result) => {
            const user = result.user;
            if(user==null)return;
            
            alert('Google Login!'); ////Login Success Msg
            // Router.push("/main"); //메인으로 이동.
            router.push('./main');
        }).catch((error) => {
            alert(error);
        });
    }

    return (
        <LoginButton type="button" onClick={socialLogin}>Google</LoginButton>
    );
}

export default LoginSocial;