import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ItemsList from "./../../components/items-list/ItemsList";
import Map from "./../../components/map/Map";
import Facilities from "./../../components/facilities/Facilities";
import PaymentIcon from "@mui/icons-material/Payment";
import "./account.css";

const AccountPage = () => {
  const user = { role: "user" };

  return (
    <div className='account-main'>
      <div className='account-left'>
        <div className='sidebar'>
          <ul>
            <li className='sidebar__active'>
              <PaymentIcon /> Review
            </li>
            <li>
              <PaymentIcon /> Billing
            </li>
            <li>
              <PaymentIcon /> Wishlist
            </li>
            {user.role === "admin" && (
              <>
                <li>Manage Users</li>
                <li>Billing</li>
              </>
            )}
          </ul>
        </div>
        <section className='account-list-main'>
          <p className='title'>Update Account</p>
          <div className='separator'></div>
          <p className='welcome-message'>Enter name or email to update</p>

          <form className='login-form'>
            <div className='form-control'>
              <input type='text' value='Ankit Tripathi' />
              <i className='fas fa-user'></i>
            </div>
            <div className='form-control'>
              <input type='email' value='ankittripathi1456@gmail.com' />
              <i class='fas fa-envelope'></i>
            </div>

            <div className='form-control'>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <img
                  style={{
                    width: "8rem",
                    height: "8rem",
                    objectFit: "cover",
                    borderRadius: "10rem",
                  }}
                  src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'
                  alt=''
                />
                <button className='profile__picBtn'>Choose Photo</button>
              </div>
            </div>

            {/* {error && (
                <p
                  style={{
                    fontSize: "5",
                    color: "red",
                    textAlign: "left",
                    // marginTop: 5,
                    marginLeft: 30,
                  }}
                >
                  {error}
                </p>
              )} */}

            <button className='submit'>Update Account</button>
          </form>
        </section>
      </div>

      <div>
        <section className='item-list-main'>
          <div style={{ width: "75%", margin: "0 auto" }}>
            <p className='title'>Change Password</p>
            <div className='separator'></div>
            <p className='welcome-message'>
              Please, provide login credential to proceed and have access to all
              our services
            </p>

            <form className='login-form'>
              <div className='form-control'>
                <input type='password' placeholder='Current Password' />
                <i className='fas fa-lock'></i>
              </div>
              <div className='form-control'>
                <input type='password' placeholder='New Password' />
                <i className='fas fa-lock'></i>
              </div>
              <div className='form-control'>
                <input type='password' placeholder='Confirm Password' />
                <i className='fas fa-lock'></i>
              </div>
              {/* {error && (
                <p
                  style={{
                    fontSize: "5",
                    color: "red",
                    textAlign: "left",
                    // marginTop: 5,
                    marginLeft: 30,
                  }}
                >
                  {error}
                </p>
              )} */}

              <button className='submit'>Change Password</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountPage;
