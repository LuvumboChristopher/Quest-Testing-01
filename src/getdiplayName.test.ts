import getDisplayName from './getDisplayName';

describe('GetDisplayName', () => {
    describe('When specified city ' , () => {
        it('Returns the name of the city and full name' , () => {
            expect(getDisplayName('Christopher', 'Luvumbo','Lyon')).toBe('[Lyon] Christopher Luvumbo')  
        })
    })
    
    describe('When not specified city' , () => {
        it('Returns a question mark and full name', () => {
            expect(getDisplayName('Christopher', 'Luvumbo',)).toBe('[?] Christopher Luvumbo')
        })
    })

    describe('If student course is specified', ()=>{
        it('Display course type , full name and city', () => {
            expect(getDisplayName('Christopher', 'Luvumbo', 'Lyon','workstudy')).toBe('[Lyon] Christopher Luvumbo - WnS')
        })

    })

    describe('If student course type is not specified', ()=>{
        it('Don\'t diplay course type but full name and city',()=>{
            expect(getDisplayName('Christopher', 'Luvumbo','Lyon','sample')).toBe('[Lyon] Christopher Luvumbo')
        })

    })
})

