/* 
    接口在面向对象中的作用：上层抽象的作用。
    不关心接口是如何实现的，只关心得到的是什么
*/

class User {
    constructor(public id: number, public name: string) {}
}

interface Repository<T> {
    findById(id: number): T | undefined;
    save(user: T): void;
    delete(user: T): boolean;
}

class UserRepository implements Repository<User> {
    private users = new Map<number, User>();

    findById(id: number): User | undefined {
        return this.users.get(id);
    }

    save(user: User): void {
        this.users.set(user.id, user);
    }

    delete(user: User): boolean {
        return this.users.delete(user.id);
    }
}

const userRepository = new UserRepository();
userRepository.save(new User(1, "张三"));
userRepository.save(new User(2, "李四"));
userRepository.findById(1);

/* 
    具体实现不一致也是正常的，只有按照接口的规范来就可以了
*/