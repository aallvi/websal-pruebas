
export const LIGHT_THEME = 'LIGHT_THEME'
export const DARK_THEME = 'DARK_THEME'

export const setLight = (a) => ({
    type: LIGHT_THEME,
    payload:a
    

})
export const setDark = (a) => ({
    type: DARK_THEME,
    payload:a

})