import './CarDetailsCard.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const CarDetailCard = ({ rate = 200 }) => {
  const [pickTime, setPickTime] = useState('')
  const [dropTime, setDropTime] = useState('')
  const [dateRange, setDateRange] = useState('')
  const [inquiry, setInquiry] = useState(false)
  const [book, setBook] = useState(true)
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.number(),
    note: Yup.string(),
  })

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here
    resetForm()
  }

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    note: '',
  }
  useEffect(() => {
    const calculateDateRange = () => {
      if (pickTime && dropTime) {
        const pickDate = new Date(pickTime)
        const dropDate = new Date(dropTime)
        console.log(pickDate, dropDate)
        const timeDifference = dropDate - pickDate
        const dayDifference = timeDifference / (1000 * 60 * 60 * 24)
        setDateRange(dayDifference)

        console.log(dayDifference)
      } else {
        setDateRange('')
      }
    }
    calculateDateRange()
  }, [pickTime, dropTime])
  const handlePickTime = e => {
    setPickTime(e.target.value)
    console.log(pickTime)
  }

  const handleDropTime = e => {
    setDropTime(e.target.value)
    console.log(dropTime)
  }

  const Locations = ['United Arab Emirates', 'Dubai,United Arab Emirates']
  return (
    <>
      <div className="CardContainer">
        <div className="header">
          <div className="Price Container">{rate} AED/Day</div>
          <div className="reviewContainer">
            <span>
              <FontAwesomeIcon icon={faStar} color="#ffb21d" />
            </span>
            <span>4.9</span>
            {/* <span>(10 Review)</span> */}
          </div>
        </div>
        <div className="ButtonContainer">
          <div>
            <button
              onClick={() => {
                setBook(true)
                setInquiry(false)
              }}
              id={`${book ? 'btn-1' : ''}`}
            >
              Book
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setInquiry(true)
                setBook(false)
              }}
              id={`${inquiry ? 'btn-1' : ''}`}
            >
              Inquiry
            </button>
          </div>
        </div>
        {book && (
          <div>
            <div className="bodyComponent">
              <div className="border">
                <label htmlFor="" className="text">
                  Location
                </label>
                <div className="selectLocations">
                  <select>
                    {Locations.map((ele, index) => (
                      <option key={index} value={ele}>
                        {ele}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="border">
                <label htmlFor="picktime" className="text">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp; Pick-up <b>*</b>
                </label>
                <div className="dateInput">
                  <input id="picktime" value={pickTime} onChange={handlePickTime} type="date"></input>
                </div>
              </div>
              <div className="box-form__car-time">
                <label htmlFor="droptime" className="text">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp; Drop-of <b>*</b>
                </label>
                <div className="dateInput">
                  <input id="droptime" value={dropTime} onChange={handleDropTime} type="date"></input>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="totalPriceContainer">
                <div>Total</div>
                <div>{dateRange * rate} AED</div>
              </div>
              <button>Book now</button>
            </div>
          </div>
        )}{' '}
        {inquiry && (
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ touched, errors }) => (
              <Form>
                <div className="inquiryComponent">
                  <div className="inputFields">
                    <Field type="text" name="name" placeholder="Name*" required />
                    <ErrorMessage name="name" component="div" className="error" />
                  </div>
                  <div className="inputFields">
                    <Field type="email" name="email" placeholder="Email*" required />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                  <div className="inputFields">
                    <Field type="number" name="phone" placeholder="Phone" />
                    <ErrorMessage name="phone" component="div" className="error" />
                  </div>
                  <div className="inputFields">
                    <Field type="text" name="note" placeholder="Note" />
                  </div>
                  <div className="inputFields">
                    <button type="submit">Send</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </>
  )
}

export default CarDetailCard
