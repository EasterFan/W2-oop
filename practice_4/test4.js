/**
 * Created by easter on 17-7-16.
 */

describe('practise', () => {

    it('practise4', () => {
        let result = new Worker('Tom', 21).introduces();
        let expectResult = "My name is Tom. I am 21 years old. I am a Worker. I have a job.";
        expect(result).toEqual(expectResult);
    });


});