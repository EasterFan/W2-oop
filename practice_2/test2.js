/**
 * Created by easter on 17-7-16.
 */
describe('practise2', () => {

    it('it should introduce student', () => {
        let result = new Student('Tom', 21).introduces();
        let expectResult = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        expect(result).toEqual(expectResult);
    });


});