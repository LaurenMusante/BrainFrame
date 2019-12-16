import React from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ClassCalendarPage.css";

const ClassCalendarPage = () => (
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
        <td className="single line">9am</td>
        <td className="single line">
          <Link to="/clientdisplay">Sign In</Link>
        </td>
        <td className="single line">
          <div
            className="ui button"
            data-tooltip="Deep Flow Yoga: Lateral Sequence is a sensational yoga practice that will bring the immediate and profound unwinding of mental and physical tension."
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
        <td className="single line">9am</td>
        <td className="single line">
          <Link to="/clientdisplay">Sign In</Link>
        </td>
        <td className="single line">
          <div
            className="ui button"
            data-tooltip="Deep Flow Yoga: Lateral Sequence is a sensational yoga practice that will bring the immediate and profound unwinding of mental and physical tension."
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
        <td className="single line">9am</td>
        <td className="single line">
          <Link to="/clientdisplay">Sign In</Link>
        </td>
        <td className="single line">
          <div
            className="ui button"
            data-tooltip="Deep Flow Yoga: Lateral Sequence is a sensational yoga practice that will bring the immediate and profound unwinding of mental and physical tension."
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
        <td className="single line">9am</td>
        <td className="single line">
          <Link to="/clientdisplay">Sign In</Link>
        </td>
        <td className="single line">
          <div
            className="ui button"
            data-tooltip="Deep Flow Yoga: Lateral Sequence is a sensational yoga practice that will bring the immediate and profound unwinding of mental and physical tension."
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
        <td className="single line">9am</td>
        <td className="single line">
          <Link to="/clientdisplay">Sign In</Link>
        </td>
        <td className="single line">
          <div
            className="ui button"
            data-tooltip="Deep Flow Yoga: Lateral Sequence is a sensational yoga practice that will bring the immediate and profound unwinding of mental and physical tension."
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
);

export default ClassCalendarPage;

// https://react.semantic-ui.com/collections/table/ html version for easier styling
