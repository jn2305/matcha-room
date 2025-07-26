import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import './OrderForm.css';
import axios from "axios"
import * as Yup from 'yup';

function OrderForm() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const dayOfMonth = now.getDay();
    const month = now.getMonth(); // Months are zero-based in Java Script

    
    const dayNames =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

    const initialValues = {
        task:"",
        dueDate: "",
    };

    const onSubmit=(data) => {
        axios.post("http://localhost:8080/tasks", data)
          .then((response) => {
            console.log("good");
            // setListOfTasks(response.data);
          })
    }
    
    const validationSchema = Yup.object().shape({
        taskText: Yup.string().required("Task is required"),
        dueDate: Yup.date().required("Due date is required").typeError("Due date must be a valid date"),
    })
    return <div className="createTaskPage">
        <div className="dateContainer">
            <p id="dayOfWeek" className="date">{dayNames[dayOfWeek]}</p>
            <p id="day" className="date">{dayOfMonth}</p>
            <p id="month" className="date">{monthNames[month]}</p>
        </div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <label>Add a task:</label>
                <ErrorMessage name="taskText" component="span" className="errorMessage"/>
                <Field className="formInput" id="taskTextInput" name="taskText" placeholder="Task: "/>
                <label>Due date:</label>
                <ErrorMessage name="dueDate" component="span" className="errorMessage"/>
                <Field className="formInput" id="dueDateInput" name="dueDate" placeholder="Due date: "/>

                <button type="submit">Add task</button>
            </Form>
        </Formik>
    </div>
}

export default OrderForm; 