"use client"; // Ensures this is a client component

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // New way to handle navigation in App Router
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useAuth } from "@/context/AuthContext";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    const endpoint = isLogin
      ? '/api/auth/login'
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/signup`;

    try {
      const result = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!result.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      if (result.ok) {
        const responseData = await result.json();
        login(responseData.userData); // Set user in context (from response)
        router.refresh();
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "22rem" }} className="p-4 shadow">
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <Alert variant="danger" className="mt-2 p-1">
                  Name is required
                </Alert>
              )}
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <Alert variant="danger" className="mt-2 p-1">
                Email is required
              </Alert>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <Alert variant="danger" className="mt-2 p-1">
                Password must be at least 6 characters
              </Alert>
            )}
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Form>
        <div className="text-center mt-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </Button>
        </div>
      </Card>
    </Container>
  );
}
