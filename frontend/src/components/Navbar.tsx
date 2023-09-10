import React, { FunctionComponent, useState, useEffect } from 'react';  
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'


export const Navbar: FunctionComponent = () => {


    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">Navbar</Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
}

