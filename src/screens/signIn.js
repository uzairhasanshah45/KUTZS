import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet } from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import animatedLoader from '../assets/loader.json';


const screenHeight = Dimensions.get('window').height - 200;
const screenWidth = Dimensions.get('window').width - 30;

const StartScreen = (props) => {

  const [otp, setOtp] = useState(['', '', '', '',]);
  const [signinSuccessfull, setSigninSuccessfull] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState('');
  const [loader, setLoader] = useState(false);


  const signIn = () => {

    return (
      <>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subHeading}>Mobile Number</Text>
        <View style={styles.numberView}>
          <Text style={styles.countryCellCode}>+92</Text>
          <TextInput style={styles.number} />
        </View>
        <TouchableOpacity style={styles.signinButton} onPress={() => { setLoader(true),setSigninSuccessfull(true) }}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipBtn}>
          <Text style={styles.skiptxt}>Skip</Text>
        </TouchableOpacity>
      </>
    )
  }

  const verify = () => {

    setTimeout(() => {
      setLoader(false)
    }, 2000);

    return (
      <>
        {loader ?
          (
            <LottieView
              source={animatedLoader}
              autoPlay
              loop
              style={styles.loader}
            />
          ) : (
            <>
              <Text style={styles.heading1}>Verify & Proceed</Text>
              <Text style={styles.subHeading1}>Enter the 4-Digit Code to Complete the Verification Process.</Text>
              <TextInput
                keyboardType="numeric"
                //   autoFocus={true}
                onChangeText={value => { setVerifyPassword(value); setOtp(value); }}
                style={{ height: 50, top: 60, width: 250 }}
              />
              <View style={styles.otpBoxesContainer}>
                {[0, 1, 2, 3].map((item, index) => (
                  <Text style={styles.otpBox} key={index}>
                    {otp[item]}
                  </Text>
                ))}
              </View>
              <TouchableOpacity style={styles.verify}>
                <Text style={styles.verifyTxt}>Verify</Text>
              </TouchableOpacity>
            </>
          )}
      </>
    )
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/bck.png')}>
      <LinearGradient
        colors={['rgba(180,46,70,0.5)', 'rgba(208,144,57,0.5)']}
        style={styles.view}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        {signinSuccessfull ==false ? signIn() : verify()}
      </LinearGradient>
    </ImageBackground>
  );
};

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center'
  },
  view: {
    height: screenHeight,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80
  },
  logo: {
    position: 'absolute',
    top: '-45@ms'
  },
  heading: {
    fontSize: '35@ms',
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '65@ms'
  },
  subHeading: {
    color: 'white',
    fontSize: '22@ms',
  },
  numberView: {
    flexDirection: 'row',
    paddingVertical: '15@ms'
  },
  countryCellCode: {
    backgroundColor: 'white',
    width: '45@ms',
    borderRadius: '20@ms',
    height: '30@ms',
    textAlign: 'center',
    paddingVertical: '5@ms'
  },
  number: {
    backgroundColor: 'white',
    width: '170@ms',
    borderRadius: '20@ms',
    height: '30@ms',
    left: '5@ms',
    textAlign: 'center',
    paddingVertical: '5@ms'
  },
  signinButton: {
    backgroundColor: 'white',
    width: '100@ms',
    height: '42@ms',
    borderRadius: '20@ms',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15@ms',
  },
  skipBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '15@ms'
  },
  skiptxt: {
    color: 'white'
  },
  heading1: {
    fontSize: '35@ms',
    color: 'white',
    fontWeight: 'bold'
  },
  subHeading1: {
    color: 'white',
    fontSize: '10@ms',
  },
  otpBoxesContainer: {
    justifyContent: "center",
    flexDirection: 'row',
    marginLeft: '12@ms'
  },
  otpBox: {
    padding: '0@ms',
    marginRight: '12@ms',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    height: '55@ms',
    borderRadius: '20@ms',
    padding: '13@ms',
    width: '55@ms',
    textAlign: 'center',
    fontSize: '22@ms'
  },
  verify: {
    backgroundColor: 'white',
    width: '100@ms',
    height: '42@ms',
    borderRadius: '20@ms',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15@ms',
    top: '70@ms'
  },
  verifyTxt: {
    fontSize: '20@ms',
    color: 'black'
  },
  loader: {
    width: '150@ms',
    height: '150@ms'
  }
});

export default StartScreen;
