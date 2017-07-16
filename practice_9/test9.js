/**
 * Created by easter on 17-7-16.
 */
describe('practise9', () => {
    it('if tom is a leader', () => {
        let klass = new Class(2);
        let student = new Student('1234','Tom', 21,klass);
        student.klass.assignLeader();
        let result = student.introduces();
        let expectResult = "My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.";
        expect(result).toEqual(expectResult);
    });


});