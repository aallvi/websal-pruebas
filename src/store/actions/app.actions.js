
export const LINK_PDF = 'LINK_PDF'
export const DATA_FILTRADA = 'DATA_FILTRADA'
export const ARR = 'ARR'
export const PHOTO_LINK = 'PHOTO_LINK'

export const linkPDF = (link) => ({
    type:LINK_PDF,
    payload:link
})

export const photoLink = (photo) => ({
    type:PHOTO_LINK,
    payload:photo
})

