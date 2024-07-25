import React from 'react'

const Fotter = () => {
  return (
    <div>
      <footer style={{marginLeft:'-2%' ,backgroundColor:'black' , marginRight:'-2%' , marginBottom:'-2.2%' , marginTop:"-1.3%"}} >
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 30px' }}>
                    <div style={{color:'white'}}>
                        <h5>Contact Details</h5>
                        <p>
                            <b>
                                Tel No: +91234567890<br />
                                Email: kvrestaurents143@gmail.com<br />
                            </b>
                        </p>
                    </div>
                    <div>
                        <h5 style={{color:'white'}}>Our Addresses</h5>
                        <p>
                            <b style={{color:'white'}}>
                                1/2/22/82/49/A, Park View Enclave, Near Andhra Prabha Office, <br/>Jubilee Hills, Hyderabad, Telangana 500033
                            </b>
                        </p>
                    </div>
                    <div>
                        <h5 style={{color:'white'}}>Business Hours</h5>
                        <p>
                            <b style={{color:'white'}}>
                                Mon: 11:00 AM – 11:00 PM<br/>
                                Tue: 11:00 AM – 11:00 PM<br/>
                                Wed: 11:00 AM – 11:00 PM<br/>
                                Thu: 11:00 AM – 11:00 PM<br/>
                                Fri: 11:00 AM – 11:00 PM<br/>
                                Sat: 11:00 AM – 11:00 PM<br/>
                                Sun: 11:00 AM – 11:00 PM
                            </b>
                        </p>
                    </div>
                    
                </div>
               
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <p style={{color:'white'}}><b>&reg; All Rights are reserved</b></p>
                </div>
            </footer>
    </div>
  )
}

export default Fotter
