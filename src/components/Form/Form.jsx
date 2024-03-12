import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    fullname: Yup.string()
        .required("Fullname is required"),
});

function App() {
 return (
   <div className="App">
     <center>
       <h1>Register a new account</h1>
       <Formik>
        {/* initialValues={{ email: '', fullname: '' }}
        validationSchema={LoginSchema} */}
        onSubmit={(values, actions) => {
        // Handle form submission here
        console.log(values);
        actions.setSubmitting(false);
      }}

         {({ isSubmitting }) => (
           <Form >
             <Field
               type="text"
               name="fullname"
               placeholder="Enter your fullname"
             />
             <ErrorMessage name="fullname" component="div" />

             <Field
               type="email"
               name="email"
               placeholder="Enter email address"
             />
             <ErrorMessage name="email" component="div" />

             <Field type="password" name="password" />
             <ErrorMessage name="password" component="div" />

             <button type="submit" disabled={isSubmitting}>
               Submit
             </button>
           </Form>
         )}
       </Formik>
     </center>
   </div>
 );
}
export default App;