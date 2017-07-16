/**
 * Created by easter on 17-7-14.
 */

describe('practise8', () => {
    it('if class same,it should be tom teach jelly', () => {
        let jelly = new Student('jelly',21,2)
        let teacher = new Teacher('Tom', 21,2);
        let result = teacher.introduceWith(jelly,teacher);
        let expectResult = "My name is Tom. I am 21 years old.I am a Teacher.I teach jelly.";
        expect(result).toEqual(expectResult);
    });
    it('if class is not same,it should be tom do not teach jelly', () => {
        let jelly = new Student('jelly',21,2);
        let teacher = new Teacher('Tom', 21,3);
        let result = teacher.introduceWith(jelly,teacher);
        let expectResult = "My name is Tom. I am 21 years old. I am a Teacher. I don't teach jelly.";
        expect(result).toEqual(expectResult);
    });

});