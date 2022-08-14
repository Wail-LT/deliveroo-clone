import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledText } from '../../styledReactNative'
import Header from './Header'
import CategoryScrollView from '../../components/CategoryScrollView'

export default function Home() {
  return (
    <View>
      <Header/>
      <ScrollView>
        <CategoryScrollView/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})