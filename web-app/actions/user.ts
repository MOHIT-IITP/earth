"use server"
import { createClient } from "@/auth/server"

export const SignUpAction = async (email: string, password: string) => {
    try {
        const { auth } = await createClient();
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

export const LoginAction = async (email: string, password: string) => {
    try {
        const {auth} = await createClient();
        const {data, error} = await auth.signInWithPassword({
            email, password
        })

        if(error) throw error;

        const userid = data.user?.id;

        if(!userid) throw new Error("UserId not found after login");
    } catch (error) {
        
    }

}
