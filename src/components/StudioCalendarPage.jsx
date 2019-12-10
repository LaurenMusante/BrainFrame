import React from 'react';

function StudioCalendarPage() {
  return (
    <div>
      <ClientSearchBar />
      <table>
        <tr>
          <th>Date</th>
          <th>Class</th>
          <th>Teacher</th>
          <th>Location</th>
        </tr>
      </table>
    </div>
  )
}

export default StudioCalendarPage;