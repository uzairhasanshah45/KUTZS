import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  Image,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet } from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import AnimateLoadingButton from 'react-native-animate-loading-button';

const screenHeight = Dimensions.get('window').height - 200;
const screenWidth = Dimensions.get('window').width - 30;


class StartScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      startValue : new Animated.Value(0),
    };
  }

  _onPressHandler() {
    this.loadingButton.showLoading(true);

    setTimeout(() => {
      this.loadingButton.showLoading(false);
      this.setState({ isLoading: true })
      this.waiting()
    }, 1500);

    setTimeout(() => {
      this.setState({ isLoading: false })
      this.props.navigation.navigate('Verify')
    }, 5700);
  }

  waiting() {

    Animated.timing(this.state.startValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { isLoading, startValue } = this.state
    return (
      <ImageBackground
        style={styles.container}
        source={require('../assets/bck.png')}>
        <LinearGradient
          colors={['rgba(180,46,70,0.5)', 'rgba(208,144,57,0.5)']} style={styles.view}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.heading}>Sign In</Text>
          <Text style={styles.subHeading}>Mobile Number</Text>
          <View style={styles.numberView}>
            <Text style={styles.countryCellCode}>+92</Text>
            <TextInput style={styles.number} />
          </View>
          <View style={{ position: 'absolute', bottom: 120 }}>
            {isLoading == false ?
              (
                <AnimateLoadingButton
                  ref={c => (this.loadingButton = c)}
                  width={250}
                  height={40}
                  title="Login"
                  titleFontSize={16}
                  titleColor="black"
                  backgroundColor="white"
                  borderRadius={20}
                  activityIndicatorColor="black"
                  onPress={this._onPressHandler.bind(this)}
                />
              ) : (
                <Animated.View
                  style={
                    {
                      opacity: startValue
                    }
                  }
                >
                  <LottieView
                    source={require('../assets/unlocked.json')}
                    autoPlay
                    loop
                    style={styles.animation}
                  />
                </Animated.View>
              )}
          </View>
          <TouchableOpacity style={styles.skipBtn}>
            <Text style={styles.skiptxt}>Skip</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground >
    );
  }
};

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: '15@ms',
    marginBottom: 50
  },
  countryCellCode: {
    backgroundColor: 'white',
    width: '45@ms',
    borderRadius: '20@ms',
    height: '35@ms',
    textAlign: 'center',
    paddingVertical: '7@ms'
  },
  number: {
    backgroundColor: 'white',
    width: '190@ms',
    borderRadius: '20@ms',
    height: '35@ms',
    left: '5@ms',
    textAlign: 'center',
    paddingVertical: '7@ms'
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
  animation: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    height: 80
  },

});

export default StartScreen;
