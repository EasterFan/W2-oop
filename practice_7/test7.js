/**
 * Created by easter on 17-7-16.
 */

describe('practise', () => {
it('practise7', () => {
    let result = new Teacher('Tom', 21, 2).introduces();
let expectResult = "My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.";
expect(result).toEqual(expectResult);
});
it('practise7', () => {
    let teacher = new Teacher('Tom', 21);
let result = teacher.introduces();
let expectResult = "My name is Tom. I am 21 years old. I am a Teacher. I teach no Class.";
expect(result).toEqual(expectResult);
});

});