import React from 'react';
import './navbar.css'


function NavBar() {
  return (
    <div class="navbar">
  <a class="active"  href="#"><i class="fa fa-fw fa-home"></i> Grave site management</a>
  <a href="#"><i class="fa fa-fw fa-search"></i> Maintain</a>
  <a href="#"><i class="fa fa-fw fa-envelope"></i> Payment</a>
  <a href="#"><i class="fa fa-fw fa-user"></i>Report</a>
</div>

  )
}

export default NavBar