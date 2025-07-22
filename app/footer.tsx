import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Footer = () => {
  return (
    <View style={[downStyle.foot, {flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}]}>
      <Link href="/quotes" style={downStyle.links}>Quotes</Link>
      <Link href="/" style={downStyle.links}>Home</Link>
      <Link href="/breather" style={downStyle.links}>Breather</Link>
    </View>
  )
}

export default Footer

const downStyle = StyleSheet.create({
    foot: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        backgroundColor: 'rgba(162, 91, 148, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    links: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Playfair_700Bold',
    }
})
