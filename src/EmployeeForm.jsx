import React from 'react';

const EmployeeForm = () => {
    return(
        <div class="container" >
        <div class="d-flex justify-content-center">
            <div class="card" style="margin-top: 10px; width:50%;">
                <div class="card-header" style="background-color: lightblue; text-align: center;"  >
                    <h1>Employee Form</h1>
                </div>
                <div class="card-body">
                    <form class="needs-validation" novalidate>
                        <div class="form-group mb-3">
                          <label for="validationCustom01">First Name</label>
                          <input type="text" class="form-control" id="validationCustom01" required/>
                          <div class="invalid-feedback">
                            Please enter your firstname.
                          </div>
                         {/* <!-- <p></p> --> */}
                        </div>
                          
                        <div class="form-group mb-3">
                          <label for="validationCustom02">Last Name</label>
                          <input type="text" class="form-control" id="validationCustom02" required/>
                          <div class="invalid-feedback">
                            Please enter your lastname.
                          </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="validationCustom03">Gender</label>
                            
                            <div class="form-label">
                            <label for="male" class="radio-inline col-sm-2"><input type="radio" name="gender" id="male"/>Male</label>
                            <label for="female" class="radio-inline col-sm-2"><input type="radio" name="gender" id="female"/>Female</label>
                            <label for="others" class="radio-inline "><input type="radio" name="gender" id="others"/> Others</label>
                        </div>
                        
                          </div>
                        <div class="form-group mb-3">
                            <label for="validationCustom04">Email Address</label>
                            <input type="email" class="form-control" id="validationCustom04" required/>
                            <div class="invalid-feedback">
                              Please enter an email address.
                            </div>
                          </div>
                          <div class="form-group mb-3">
                            <label for="validationCustom05">Password</label>
                            <input type="password" class="form-control" id="validationCustom05" required/>
                            <div class="invalid-feedback">
                              Please enter a password.
                            </div>
                          </div>
                          <div class="form-group mb-3">
                            <label for="validationCustom06">Phone Number</label>
                            <input type="number" class="form-control" id="validationCustom06" required/>
                            <div class="invalid-feedback">
                              Please enter your number.
                            </div>
                          </div>
                          <div class="form-group mb-3">
                            <label for="validationCustom07" class="form-label" >Country</label>
                            <select id="validationCustom07" class="form-select" required>
                              <div class="invalid-feedback">
                                Please choose a country.
                              </div>
                              
                              <option></option>
                              <option>Nepal</option>
                              <option>India</option>
                              <option>USA</option>
                            </select>
                            
                          </div>
                          <div class="form-group mb-3">
                            <label for="validationCustom08">Designation</label>
                            <input type="text" class="form-control" id="validationCustom08" required/>
                            <div class="invalid-feedback">
                              Please enter a designation.
                            </div>
                          </div>

                          <div class="form-group mb-3">
                          <label for="validationCustom09">Start Date:</label>
                       <input type="date" id="validationCustom09" name="trip-start"
                        value="2018-07-22"
                         min="2001-01-01" max="2021-10-26"/>
                         <div class="invalid-feedback">
                          Please choose a start date.
                        </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>


                      
                 
                      </form>
                      <script>
                      {/* // Example starter JavaScript for disabling form submissions if there are invalid fields */}
                      
                      (function () {
                        'use strict'
                      
                        // Fetch all the forms we want to apply custom Bootstrap validation styles to
                        var forms = document.querySelectorAll('.needs-validation')
                      
                        // Loop over them and prevent submission
                        Array.prototype.slice.call(forms)
                          .forEach(function (form) {
                            form.addEventListener('submit', function (event) {
                              if (!form.checkValidity()) {
                                event.preventDefault()
                                event.stopPropagation()
                              }
                      
                              form.classList.add('was-validated')
                            }, false)
                          })
                      })()
                    </script>
                </div>
                <div class="card-footer" style="text-align: right;">
                   <small> &copy Binod Neupane</small>
                </div>

            </div>
        </div>
    </div>

    )
}


export default EmployeeForm;