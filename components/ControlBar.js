import React from 'react'
import { func, bool, number, string } from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { ToggleIcon, Time, Scrubber } from './'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor : 'rgba(0,0,0,0.4)'
  }
})

const ControlBar = (props) => {
  const {
    onSeek,
    onSeekRelease,
    progress,
    currentTime,
    duration,
    muted,
    fullscreen,
    theme,
    inlineOnly
  } = props

  return (
    <View style={styles.container}>
      <Time time={currentTime} theme={theme} />
      <Scrubber
        onSeek={pos => onSeek(pos)}
        onSeekRelease={pos => onSeekRelease(pos)}
        progress={progress}
        theme={theme}
      />
      <ToggleIcon
        paddingLeft
        theme={theme}
        onPress={() => props.toggleMute()}
        isOn={muted}
        iconOff="volume-up"
        iconOn="volume-mute"
        size={20}
      />
      <Time time={duration} theme={theme} />
      { !inlineOnly &&
      <ToggleIcon
        paddingRight
        onPress={() => props.toggleFS()}
        iconOff="fullscreen"
        iconOn="fullscreen-exit"
        isOn={fullscreen}
        theme={theme}
      />}
    </View>
  )
}

ControlBar.propTypes = {
  toggleFS: func,
  toggleMute: func,
  onSeek: func,
  onSeekRelease: func,
  fullscreen: bool,
  muted: bool,
  inlineOnly: bool,
  progress: number,
  currentTime: number,
  duration: number,
  theme: string
}

ControlBar.defaultProps = {
  toggleFS: undefined,
  toggleMute: undefined,
  onSeek: undefined,
  onSeekRelease: undefined,
  inlineOnly: false,
  fullscreen: false,
  muted: false,
  progress: 0,
  currentTime: 0,
  duration: 0,
  theme: null
}

export { ControlBar }
