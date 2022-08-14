import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledText } from './styledReactNative'

export default function Home() {
  return (
    <View>
      <StyledText className="text-red-500">Home</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({})