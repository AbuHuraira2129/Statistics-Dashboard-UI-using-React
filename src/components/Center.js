import "../CSS/Center.css";
import graph from '../Assets/Total-Graph.svg'
import elliot from '../Assets/Elliot.png'
import olivia from '../Assets/Olivia.png'
import niklas from '../Assets/Niklas.png'
import cityGraph from '../Assets/top-cities-graph.svg'

const Center = () => {
  return (
    <div className="center">
      <div className="dashboard-title">
        <h1>My Dashboard</h1>
        <div className="Filter">
          <p>Filter Stats</p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5796 7.08333H7.8816C8.46119 6.34167 8.81221 5.4 8.81221 4.375C8.81221 3.35 8.46119 2.4125 7.8816 1.66667H15.5796C17.0408 1.66667 18.2326 2.88333 18.2326 4.375C18.2326 5.87083 17.0408 7.08333 15.5796 7.08333ZM4.54283 7.06667C3.17956 7.06667 2.05303 6.00417 1.91834 4.65C1.91017 4.55833 1.90609 4.46667 1.90609 4.375C1.90609 4.28333 1.91017 4.19167 1.91834 4.1C2.05303 2.74583 3.17956 1.68333 4.54283 1.68333C5.99589 1.68333 7.17956 2.89167 7.17956 4.375C7.17956 5.85833 5.99589 7.06667 4.54283 7.06667ZM15.5796 0H4.55915C2.1918 0 0.273438 1.95833 0.273438 4.375C0.273438 6.79167 2.1918 8.75 4.55915 8.75H15.5796C17.9469 8.75 19.8653 6.79167 19.8653 4.375C19.8653 1.95833 17.9469 0 15.5796 0Z"
                fill="#B8C5D3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.90609 15.625C1.90609 14.1333 3.09385 12.9167 4.55915 12.9167H12.253C11.6734 13.6625 11.3265 14.6 11.3265 15.625C11.3265 16.65 11.6734 17.5917 12.253 18.3333H4.55915C3.09385 18.3333 1.90609 17.1208 1.90609 15.625ZM12.9592 15.625C12.9592 14.1417 14.1428 12.9333 15.5959 12.9333C16.9592 12.9333 18.0816 13.9958 18.2163 15.35C18.2285 15.4417 18.2326 15.5333 18.2326 15.625C18.2326 15.7167 18.2285 15.8083 18.2163 15.9C18.0816 17.2542 16.9592 18.3167 15.5959 18.3167C14.1428 18.3167 12.9592 17.1083 12.9592 15.625ZM0.273438 15.625C0.273438 18.0417 2.1918 20 4.55915 20H15.5796C17.9469 20 19.8653 18.0417 19.8653 15.625C19.8653 13.2083 17.9469 11.25 15.5796 11.25H4.55915C2.1918 11.25 0.273438 13.2083 0.273438 15.625Z"
                fill="#B8C5D3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Total Points */}
      <div className="total-points">
      <div className="total-header">
          <h3>Total Points</h3>
          <div className="dropdown">
            <span>from</span>
            <select name="Month" id="dropdown">
              <option value="">September 2023</option>
              <option value="">October 2023</option>
              <option value="">November 2023</option>
              <option value="">December 2023</option>
            </select>
            <span>to</span>
            <select name="Month" id="dropdown">
              <option value="">May 2023</option>
              <option value="">April 2023</option>
              <option value="">November 2023</option>
              <option value="">December 2023</option>
            </select>
          </div>
        </div>
        <img src={graph} alt="" />
      </div>

      {/* Bottom two cards */}
      <div className="cards">
        {/* Active Users */}
        <div className="active-users">
        <div className="total-header">
          <h3>Active Users</h3>
          <div className="dropdown">
            <span>for</span>
            <select name="Month" id="dropdown">
              <option value="">September 2023</option>
              <option value="">October 2023</option>
              <option value="">November 2023</option>
              <option value="">December 2023</option>
            </select>
          </div>
        </div>
        <div className="active-user">
          <div className="items">
          <div>
          <div className="user-item">
            <div className="user-wrap">
              <img src={elliot} alt="" />
              <div className="user-text">
                <h5>Elliot Møller</h5>
                <p>Copenhagen, Denmark</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="14"
              viewBox="0 0 16 6"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5ZM5 1.5C5 0.671573 5.67157 0 6.5 0C7.32843 0 8 0.671573 8 1.5C8 2.32843 7.32843 3 6.5 3C5.67157 3 5 2.32843 5 1.5ZM11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0Z"
                fill="#B8C5D3"
              />
            </svg>
          </div>
          <div className="progress">
              <div className="progress-bar">
                <div className="elliot active-progress"></div>
              </div>
              <div className="text-wrapper">
                <h5>Professional Level 15</h5>
                <p>4723 Points</p>
              </div>
            </div>
          </div>
          <hr />
          <div>
          <div className="user-item">
            <div className="user-wrap">
              <img src={olivia} alt="" />
              <div className="user-text">
                <h5>Olivia Pedersen</h5>
                <p>Copenhagen, Denmark</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="14"
              viewBox="0 0 16 6"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5ZM5 1.5C5 0.671573 5.67157 0 6.5 0C7.32843 0 8 0.671573 8 1.5C8 2.32843 7.32843 3 6.5 3C5.67157 3 5 2.32843 5 1.5ZM11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0Z"
                fill="#B8C5D3"
              />
            </svg>
            </div>
            <div className="progress">
              <div className="progress-bar">
                <div className="olivia active-progress" ></div>
              </div>
              <div className="text-wrapper">
                <h5>Professional Level 11</h5>
                <p>2239 Points</p>
              </div>
            </div>
          </div>
          <hr />
          <div>
          <div className="user-item">
            <div className="user-wrap">
              <img src={niklas} alt="" />
              <div className="user-text">
                <h5>Olivia Pedersen</h5>
                <p>Copenhagen, Denmark</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="14"
              viewBox="0 0 16 6"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5ZM5 1.5C5 0.671573 5.67157 0 6.5 0C7.32843 0 8 0.671573 8 1.5C8 2.32843 7.32843 3 6.5 3C5.67157 3 5 2.32843 5 1.5ZM11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0Z"
                fill="#B8C5D3"
              />
            </svg>
            </div>
            <div className="progress">
              <div className="progress-bar">
                <div className="niklas active-progress"></div>
              </div>
              <div className="text-wrapper">
                <h5>Professional Level 6</h5>
                <p>1884 Points</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        {/* Top Cities */}
        <div className="top-city">
        <div className="total-header">
          <h3>Total Points</h3>
          <div className="dropdown">
            <span>for</span>
            <select name="Month" id="dropdown">
              <option value="">September 2023</option>
              <option value="">October 2023</option>
              <option value="">November 2023</option>
              <option value="">December 2023</option>
            </select>
          </div>
        </div>
        <div className="top-graph">
          <img src={cityGraph} alt="" />
        </div>
        <div className="city-text">
          <div className="city-item">
            <div className="wrap">
            <div className="icon blue-icon"></div>
            <p>Copenhagen, Denmark</p>
            </div>
            <h6>81.57%</h6>
          </div>
          <div className="city-item">
            <div className="wrap">
            <div className="icon purple-icon"></div>
            <p>Berlin, Germany</p>
            </div>
            <h6>63.25%</h6>
          </div>
          <div className="city-item">
            <div className="wrap">
            <div className="icon yellow-icon"></div>
            <p>Belgrade, Serbia</p>
            </div>
            <h6>52.95%</h6>
          </div>
          <div className="city-item">
            <div className="wrap">
            <div className="icon green-icon"></div>
            <p>Paris, France</p>
            </div>
            <h6>47.29%</h6>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
