const getDisplayName = (firstName: string, lastName: string, city: string = '', curriculum: string = '') => {
    const mayBeCity = city || '?'
    const mayBeWns = curriculum === 'workstudy' ? ' - WnS' : ''
    return `[${mayBeCity}] ${firstName} ${lastName}${mayBeWns}`
}

export default getDisplayName
