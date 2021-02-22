import React from 'react';

import '../stylesheets/About.sass';

class About extends React.Component {
    render() {
        return(
            <div className="description">
              <div class="about_container">
                <div className="about-me">
                  <table>
                    <tr>
                      <td>Name</td>
                      <th>Shota Yamazaki</th>
                    </tr>
                    <tr>
                      <td>Birthday</td>
                      <th>1/6/1998</th>
                    </tr>
                    <tr>
                      <td>Hobby</td>
                      <th>Soccer, Drone</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
        );
    }
}

export default About;