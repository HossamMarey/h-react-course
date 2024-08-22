# React Forms, Validations, and Formik - Multiple Choice Questions

1. What is the primary purpose of the Formik library in React?
   a) To create stylish form elements
   b) To simplify form management and validation
   c) To handle server-side form processing
   d) To replace HTML form elements

2. Which hook does Formik provide for managing form state and validation?
   a) useForm
   b) useFormik
   c) useValidation
   d) useReactForm

3. In Formik, what does the `touched` object represent?
   a) Fields that have been modified
   b) Fields that have been validated
   c) Fields that have been focused and blurred
   d) Fields with errors

4. How do you typically handle form submission using useFormik?
   a) By passing a submit function to useFormik and using formik.handleSubmit
   b) By using a separate submit handler
   c) Formik automatically handles submissions
   d) By directly manipulating the DOM

5. Which of the following is NOT a parameter that can be passed to useFormik?
   a) initialValues
   b) validationSchema
   c) onSubmit
   d) formStyle

6. What is Yup commonly used for in conjunction with Formik?
   a) Styling form elements
   b) Defining validation schemas
   c) Handling API requests
   d) Creating form layouts

7. How can you access form values in a component using useFormik?
   a) formik.values
   b) formik.getValues()
   c) useFormik.values
   d) formik.fieldValues

8. What method does Formik provide to manually set a field's value?
   a) formik.changeValue()
   b) formik.setFieldValue()
   c) formik.updateField()
   d) formik.setValue()

9. How do you typically display validation errors with Formik?
   a) Using the formik.errors object
   b) Errors are automatically displayed
   c) Using a separate ErrorDisplay component
   d) By manually checking each field

10. What is the purpose of the `validateOnBlur` option in useFormik?
    a) To validate the entire form on blur
    b) To validate a field when it loses focus
    c) To disable blur events
    d) To clear errors on blur

11. How can you perform custom validation with useFormik?
    a) By passing a validate function to useFormik
    b) Custom validation is not possible with useFormik
    c) By modifying the Yup schema at runtime
    d) By using the validateCustom() method

12. What does the `isSubmitting` property in Formik indicate?
    a) The form has been submitted successfully
    b) The form is currently being submitted
    c) The form has validation errors
    d) The form is ready to be submitted

13. How do you typically handle form reset with useFormik?
    a) By calling formik.reset()
    b) By calling formik.handleReset()
    c) By refreshing the page
    d) Formik automatically resets the form after submission

14. What is the purpose of the `enableReinitialize` option in useFormik?
    a) To reinitialize the form on every render
    b) To allow the form to be reinitialized with new initial values
    c) To reset validation on reinitialization
    d) To enable automatic form submission

15. How can you conditionally render form fields based on other field values using Formik?
    a) It's not possible with Formik
    b) By using the formik.values object in your JSX
    c) By using a special Formik component
    d) Only through custom hooks
