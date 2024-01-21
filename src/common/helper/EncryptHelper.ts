import bcrypt from 'bcryptjs';

export class HashHelper {
    static async hash(password: string, salt: number = 10) {
        return await bcrypt.hash(password, salt);
    }

    static async compare(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }
}