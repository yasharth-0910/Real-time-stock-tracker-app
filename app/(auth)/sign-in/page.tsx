"use client"
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

// Define your form data type
interface SignInFormData {
    email: string;
    password: string;
}

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1 className="form-title">Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="Enter your Email"
                    register={register}
                    error={errors.email?.message}
                    validation={{
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                        },
                    }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    register={register}
                    error={errors.password?.message}
                    validation={{
                        required: "Password is required",
                        minLength: {
                            value: 3,
                            message: "Password must be at least 3 characters",
                        },
                    }}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="yellow-btn w-full mt-5"
                >
                    {isSubmitting ? "Submitting..." : "Start your money making journey"}
                </Button>

                <FooterLink
                    text="Don't have an account? "
                    linkText="Sign Up"
                    href="/sign-up"
                />
            </form>
        </>
    );
};

export default SignIn;
