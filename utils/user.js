import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';

// * User register
const firebaseRegister = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    return { status: 'SUCCESS', data: user };
  } catch (error) {
    return {
      status: 'ERROR',
      code: error.code,
      message: error.message,
    };
  }
};

const test = '123';
export { firebaseRegister, test };
