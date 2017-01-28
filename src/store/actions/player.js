const setPlaytime = playtime => ({
  type: 'SET_PLAYTIME',
  payload: playtime
})

const updatePlaytime = playtime => ({
  type: 'UPDATE_PLAYTIME',
  payload: playtime
})

const setBuffer = buffer => ({
  type: 'SET_BUFFER',
  payload: buffer
})

const setDuration = duration => ({
  type: 'SET_DURATION',
  payload: duration
})

const play = () => ({
  type: 'UI_PLAY'
})

const pause = () => ({
  type: 'UI_PAUSE'
})

const restart = () => ({
  type: 'UI_RESTART'
})

const idle = () => ({
  type: 'IDLE'
})

const playEvent = () => ({
  type: 'PLAY'
})

const pauseEvent = () => ({
  type: 'PAUSE'
})

const stopEvent = () => ({
  type: 'STOP'
})

const toggleTimerMode = () => ({
  type: 'TOGGLE_TIMERMODE'
})

export {
  setPlaytime,
  updatePlaytime,
  setDuration,
  setBuffer,
  play,
  playEvent,
  pause,
  pauseEvent,
  stopEvent,
  restart,
  idle,
  toggleTimerMode
}
