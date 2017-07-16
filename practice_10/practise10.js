/**
 * Created by easter on 17-7-16.
 */

/**
 * Created by easter on 17-7-14.
 */

class Person {

    constructor(id,name,age)
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }


    basicIntroduce()
    {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }

}



class Student extends Person{

    constructor(id,name,age,klass)
    {
        super(id,name,age);
        this.klass = klass;

    }


    introduces () {
        if(this.klass.leader === 1)
        {
            return `${this.basicIntroduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }else{
            return `${this.basicIntroduce()} I am a Student. I am at Class ${this.klass.number}.`;
        }

    }


}


class Class
{
    constructor(number)
    {
        this.number = number;
    }

    assignLeader(student)
    {
       // this.leader = 1;
        if (student.klass.number === this.number)
        {
            this.leader = 1;
            return '';
        }else{
            this.leader = 0;
            return 'It is not one of us.';
        }
    }

    appendMember(student)
    {
        student.klass.number = this.number;

    }
}