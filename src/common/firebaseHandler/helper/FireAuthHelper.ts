import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { fireAuth } from 'src/common/config/firebase'

export class FireAuthHelper {
    private static checkIfValidEmail = (email: string) => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        return emailPattern.test(email)
    }

    static async signUp(email: string, password: string) {
        try {
            const isValidEmail = this.checkIfValidEmail(email)

            if (!isValidEmail) {
                throw {
                    code: 'NOT_VALID_EMAIL',
                    message: 'This email is not valid',
                    status: 400
                }
            }

            const userCredential = await createUserWithEmailAndPassword(
                fireAuth,
                email,
                password
            )
            const user = userCredential.user
            return user
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    static async signIn(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(
                fireAuth,
                email,
                password
            )
            const user = userCredential.user
            return user
        } catch (error) {
            throw error
        }
    }

    static async signOut() {
        try {
            await signOut(fireAuth)
        } catch (error) {
            throw error
        }
    }

    static getCurrentUser = () => {
        return fireAuth.currentUser
    }
}
