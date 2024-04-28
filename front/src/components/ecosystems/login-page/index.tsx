"use client"
import Button from "@/components/atoms/button"
import { Formik } from "formik"
import React from "react"
import * as Yup from "yup"

const LoginPage: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  })
  return (
    <main className="flex items-center justify-center min-h-screen min-w-full">
      <div className="bg-white p-4 shadow-md rounded-md">
        <Formik
          onSubmit={({}) => {}}
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                required
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                required
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
              <Button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full"
                classNameHover="bg-blue-700"
                text="LOGIN"
              />
            </form>
          )}
        </Formik>
      </div>
    </main>
  )
}

export default LoginPage
