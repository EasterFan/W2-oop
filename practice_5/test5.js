/**
 * Created by easter on 17-7-16.
 */


describe('practise', () => {

    it('practise5', () => {
        let result = new Student('Tom', 21, 2).introduces();
        let expectResult = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        expect(result).toEqual(expectResult);
    });

});