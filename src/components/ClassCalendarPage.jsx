import React from 'react';
import { Link } from 'react-router-dom';
import './ClassCalendarPage.css';

const ClassCalendarPage = () => (
  <div>
    <h1>BrainFrame Class Schedule</h1>
    <table className="ui celled padded table">
      <thead className="tableHead">
        <tr className="tableHeader">
          <th className="boo">Date</th>
          <th className="">Time</th>
          <th className="">Sign In</th>
          <th className="">Class</th>
          <th className="">Instructor</th>
          <th className="">Location</th>
        </tr>
      </thead>

      <tbody className="">
        <tr className="">
          <td className="">December 16</td>
          <td className="single line">9:00am-10:00am</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Deep Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>

        <tr className="">
          <td className="">December 16</td>
          <td className="single line">10:00am-11:00am</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Deep Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>

        <tr className="">
          <td className="">December 16</td>
          <td className="single line">11:00am-12:00pm</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Deep Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>

        <tr className="">
          <td className="">December 16</td>
          <td className="single line">12:00pm-1:00pm</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Lunch Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>

        <tr className="">
          <td className="">December 16</td>
          <td className="single line">2:00pm-3:00pm</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Deep Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>
        <tr className="">
          <td className="">December 17</td>
          <td className="single line">9:00am-10:00am</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Deep Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>
        <tr className="">
          <td className="">December 17</td>
          <td className="single line">10:00am-11:00am</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Deep Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>

        <tr className="">
          <td className="">December 17</td>
          <td className="single line">11:00am-12:00pm</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Deep Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>

        <tr className="">
          <td className="">December 17</td>
          <td className="single line">12:00pm-1:00pm</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Lunch Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>

        <tr className="">
          <td className="">December 17</td>
          <td className="single line">2:00pm-3:00pm</td>
          <td className="single line">
            <Link to="/clientdisplay">Sign In</Link>
          </td>
          <td className="single line">
            <div
              className="ui button"
              data-tooltip="Brief class description"
              data-position="top center"
              data-variation="wide"
            >
              Deep Flow
            </div>
          </td>
          <td className="single line">Emma Stern</td>
          <td className="single line">Mod at 45th</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ClassCalendarPage;

// https://react.semantic-ui.com/collections/table/ html version for easier styling
