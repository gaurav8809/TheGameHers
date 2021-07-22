import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GOOGLE_CONFIG} from '../../Helper/Configs';
import {SET_APP_USER} from '../Reducers/contants';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

export const LoginWithGoogle = () => {
  return async (dispatch) => {
    try {
      GoogleSignin.configure(GOOGLE_CONFIG);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      let userData = userInfo.user;
      delete userInfo.user;

      let dataObj = {
        ...userInfo,
        ...userData,
      };
      return Promise.resolve(dataObj);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      return Promise.reject();
    }
  };
};

export const LoginWithFB = () => {
  return async (dispatch) => {
    return LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      (result) => {
        const getInfoFromToken = (token) => {
          const PROFILE_REQUEST_PARAMS = {
            fields: {
              string: 'id, name, first_name, last_name, email',
            },
          };
          const profileRequest = new GraphRequest(
            '/me',
            {token, parameters: PROFILE_REQUEST_PARAMS},
            (error, user) => {
              if (error) {
                console.log('login info has error: ' + error);
              } else {
                console.log('result:', user);
                return Promise.resolve(user);
              }
            },
          );
          return new GraphRequestManager().addRequest(profileRequest).start();
        };

        if (result.isCancelled) {
          console.log('FB login failed');
        } else {
          return AccessToken.getCurrentAccessToken().then((data) => {
            const accessToken = data.accessToken.toString();
            return getInfoFromToken(accessToken);
          });
        }
      },
      (error) => {
        console.log('Login fail with error: ' + error);
      },
    );
  };
};
