import React from 'react';

function StudioCalendarPage() {
  return (
    <div>
      <ClientSearchBar />
      <table>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Sign In</th> //reroute to CLientDisplayPage
          <th>Class</th>
          <th>Teacher</th>
          <th>Location</th>
        </tr>
      </table>
    </div>
  )
}

export default StudioCalendarPage;