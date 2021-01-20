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


const screenHeight = Dimensions.get('window').height - 200;
const screenWidth = Dimensions.get('window').width - 30;

const StartScreen = (props) => {

  const [otp, setOtp] = useState(['', '', '', '',]);
  const [verifyPassword, setVerifyPassword] = useState('');


  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/verify.png')}>
      <LinearGradient
        colors={['rgba(180,46,70,0.5)', 'rgba(208,144,57,0.5)']}
        style={styles.view}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.heading}>Verify & Proceed</Text>
        <Text style={styles.subHeading}>Enter the 4-Digit Code to Complete the Verification Process.</Text>
        <TextInput
          keyboardType="numeric"
        //   autoFocus={true}
          onChangeText={value => { setVerifyPassword(value); setOtp(value); }}
          style={{ height: 0 }}
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
  heading:{
    fontSize: '35@ms', 
    color: 'white', 
    fontWeight: 'bold'
  },
  subHeading: {
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
  }
});

export default StartScreen;
