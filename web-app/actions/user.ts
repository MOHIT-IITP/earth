"use server"
import { createClient } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export const SignUpAction = async (email: string, password: string) => {
    try {
        const { auth } = await createClient();

        // Check if user already exists before attempting signup
        const tableUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (tableUser) {
            return { errorMessage: "User Already exists, Please Login" };
        }

        const { data, error } = await auth.signUp({
            email,
            password,
        });

        if (error) {
            return { errorMessage: error.message || "Sign up failed" };
        }

        const userid = data.user?.id;

        if (!userid) {
            return { errorMessage: "UserId not found after SignUp" };
        }

        await prisma.user.create({
            data: {
                id: userid,
                email
            }
        });

        return { errorMessage: null };
    } catch (error) {
        console.error(error);
        return handleError(error);
    }
};

export const LoginAction = async (email: string, password: string) => {
    try {
        const { auth } = await createClient();
        const { data, error } = await auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return { errorMessage: error.message || "Login failed" };
        }

        const user = data.user;
        const userid = user?.id;

        if (!userid) {
            return { errorMessage: "UserId not found after login" };
        }

        // If user is not found (shouldn't happen if userid exists, but just in case)
        if (!user) {
            return { errorMessage: "User not found, please signup" };
        }

         // Successfull Login
        return { errorMessage: null };

    } catch (error) {
        console.error(error);
        return handleError(error);
    }
};

export const LogOutAction = async () => {
    try {
        const { auth } = await createClient();
        const { error } = await auth.signOut();

        if (error) {
            return handleError(error);
        }

        return { errorMessage: null };
    } catch (error) {
        console.error(error);
        return handleError(error);
    }
};
