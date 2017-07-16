/**
 * Created by easter on 17-7-16.
 */

describe('practise10', () => {
    it('if tom is not in this class', () => {
        let klass1 = new Class(1);
        let klass2 = new Class(2);
        let student1 = new Student('1234','Tom1', 21,klass1);
        let student2 = new Student('2234','Tom2', 21,klass2);
        klass1.appendMember(student1);
        let result = student1.klass.assignLeader(student2);
        let expectResult = "It is not one of us.";
        expect(result).toEqual(expectResult);
    });


});