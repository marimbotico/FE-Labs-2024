/** Note: Feel free to copy/paste this into your Appointments.js for easier visibility.
 *
 * Goal: Create a table that renders allCustomers
 *
 * Step 1: Create a table with a thead/tbody. The thead should have a row with
 *         3 th elements: First Name, Last Name, and Appointment Time.
 * Step 2: Inside of your tbody, create a <tr> element that will .map()
 *         over this.customersArray and return
 *         3 <td> elements, one for firstName, lastName, and appointmentTime.
 *
 *         Check the README for a .map() hint.
 * Step 3: Style it with css using the App.css file!
 *
 */

import React, { Component } from 'react';

function Appointments({customers}) {
        return (
            <div>
                <table className='appointmentTable'>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Appointment Time</th>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.appointmentTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }


export default Appointments;
