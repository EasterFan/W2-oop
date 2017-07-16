/**
 * Created by easter on 17-7-14.
 */

class Person {

    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }


    basicIntroduce()
    {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }

}


class Student extends Person{

    constructor(name,age,klass,introduce)
    {
        super(name,age);
        this.klass = klass;
        this.introduce = introduce;
    }


    introduces () {
        return `${this.basicIntroduce()} I am a Student. I am at Class ${this.klass}.`;
    }


}


class Worker extends Person {

    constructor(name, age,) {
        super(name, age);
    }


    introduces() {
        return `${this.basicIntroduce()} I am a Worker. I have a job.`;
    }
}
