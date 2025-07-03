"use server"
import { createClient } from "@/auth/server"

export const SignUpAction = async (email: string, password: string) => {
    const { auth } = await createClient();
    try {
        const { data, error } = await auth.signUp({
            email, password
        });

        if (error) throw error;

        const userid = data.user?.id;

        if (!userid) throw new Error("UserId not found after SignUp");

        return {errorMessage: null};

    } catch (error) {

        console.log(error);
        return {errorMessage: error};
    }
}
