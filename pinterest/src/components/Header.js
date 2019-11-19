/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Header = ({ children }) => {
  return (
    <nav className="navbar-expand{-sm|-md|-lg|-xl} light bg-light">
      <a className="navbar-brand" href="#">
        <img src="" width="30" height="30" alt="logo" />
      </a>
      {
        children
      }
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
    </nav>
  )
}