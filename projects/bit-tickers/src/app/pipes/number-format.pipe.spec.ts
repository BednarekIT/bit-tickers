import { NumberFormatPipe } from './number-format.pipe';

describe('NumberFormatPipe', () => {
    const pipe = new NumberFormatPipe();
    it('should convert number to formatted string', () => {
        expect(pipe.transform(30538.078793975994)).toBe('30 538.08')
    })
    it('should convert number to formatted string with currency prefix', () => {
        expect(pipe.transform(30538.078793975994, '$')).toBe('$30 538.08')
    })
})
