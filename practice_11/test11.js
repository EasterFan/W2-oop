/**
 * Created by easter on 17-7-16.
 */

describe('practise11', () => {
    it('if tom does not teach any class,return teach no class', () => {
        let teacher = new Teacher('1234','Tom', 21);
        let result =  teacher.introduce();
        let expectResult = "My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.";
        expect(result).toEqual(expectResult);
    });


});