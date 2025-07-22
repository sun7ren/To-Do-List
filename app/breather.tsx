import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Footer from './footer';
import { styles } from './styles';

const backgroundImage = {
    uri: '/Users/arininurazizah/todo_list/assets/images/background.png'
};

const image = {
    uri: '/Users/arininurazizah/todo_list/assets/images/breathe.png'
}

const Breather = ({}) => {
  const [count, setCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    let timerId: number;
    if (timeRemaining > 0) {
      timerId = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [timeRemaining]);

  const handleCountDown = (startCount: number) => {
    setTimeRemaining(startCount * 60);
  };

  const handleResume = (startCount: number) => {
    if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining + startCount * 60);
    }
    };

    const handleStop = () => {
        setTimeRemaining(0);
    }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={[styles.playfair, {margin: 20 , color: 'rgba(99, 21, 83, 1)'}]}>Take a Breath!</Text>
        <Image source={image} style={[styles.image, {width: 240, marginLeft: 120, height: 205}]}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[styles.playfair, {marginBottom: 10, color: 'rgba(162, 91, 148, 1)'}]}> Count Down</Text>
            <Text style={[styles.playfair, {fontSize: 25}]}>{timeRemaining} seconds</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => count > 0 ? setCount(count - 1) : null} style={{ backgroundColor: 'rgba(238, 171, 225, 1)', padding: 10, borderRadius: 5, margin: 20 }}>
            <Text> - </Text>
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)} style={{ backgroundColor: 'rgba(238, 171, 225, 1)', padding: 10, borderRadius: 5, margin: 20 }}>
            <Text> + </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 80}}>
            <TouchableOpacity onPress={() => { setCount(0); handleCountDown(count); }} style={{margin: 5, padding: 15, backgroundColor: 'rgba(162, 91, 148, 1)', borderRadius: 5 }}>
                <Text style={{ color: 'white'}}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setCount(0); handleResume(count); }} style={{margin: 5, padding: 15, backgroundColor: 'rgba(162, 91, 148, 1)', borderRadius: 5 }}>
                <Text style={{ color: 'white'}}>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setCount(0); handleStop(); }} style={{margin: 5, padding: 15, backgroundColor: 'rgba(162, 91, 148, 1)', borderRadius: 5 }}>
                <Text style={{ color: 'white'}}>Stop</Text>
            </TouchableOpacity>
        </View>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }} />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Breather;

