import React from 'react';
import '../Home/Home.css'

function Home() {
  return (
    <div >
    <h2>Reports</h2>
<p>General New Reports</p>

<div class="row">
  <div class="column">
    <div class="card">
      <h3>Grave Sites</h3>
      <button class="button button4">Select</button>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Payment History</h3>
      <button class="button button4">Select</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Payment Types</h3>
      <button class="button button4">Select</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Burial Types</h3>
      <button class="button button4">Select</button>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Funeral Homes</h3>
      <button class="button button4">Select</button>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Section Codes</h3>
      <button class="button button4">Select</button>
    </div>
  </div>
</div>

<h2>Recently Generated</h2>

<div class="row">
  <div class="columnss">
    <div class="card">
      <h3>Grave Site Report</h3>
      <p>Owner:Mrs:Jack kramer</p>
      <p>Date:All</p>
    </div>
  </div>

  <div class="columnss">
    <div class="card">
      <h3>Payment History Report</h3>
      <p>Posting Date: 13/01/2022-12/31/2022 </p>
      <p>Payment Type :All</p>
    </div>
  </div>
  
  <div class="columnss">
    <div class="card">
      <h3>Grave Site 01-1001-01.0</h3>
      <p>Buried Preson:All</p>
      <p>Date:12/31/2022 -02/07/2022</p>
    </div>
  </div>
  
  <div class="columnss">
    <div class="card">
      <h3>Burial Types</h3>
      <p>All Burial Types</p>
      <p>sss</p>
   
    </div>
  </div>
  
</div>
  </div>
  )
}

export default Home