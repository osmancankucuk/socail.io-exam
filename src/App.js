import data from "./data/data.json";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTrash,
  faBan,
  faEye,
  faHeart,
  faMessage,
  faRetweet,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import noPng from "./img/no-post-image.png";

function App() {
  return (
    <div>
      <div className="mainDiv">
        <h2 style={{ marginBottom: "5px" }}>17 June 2021</h2>
        {data.posts_by_date["2021-06-17"].map((item) => (
          <a style={{ all: "unset", cursor: "pointer" }} href={item.link}>
            <div key={item.link} className="card">
              <div
                className="box"
                style={{
                  backgroundColor:
                    (item.status === 3 && "#A09998") ||
                    (item.status === 0 && "orange") ||
                    (item.status === 1 && "#88B04B") ||
                    (item.status === 4 && "red"),
                }}
              >
                <div className="item">
                  <FontAwesomeIcon
                    style={{
                      padding: "5px",
                      color: "white",
                      fontSize: "1.5em",
                    }}
                    icon={
                      (item.account.channel === "instagrambusiness" &&
                        faInstagram) ||
                      (item.account.channel === "twitter" && faTwitter) ||
                      (item.account.channel === "facebook" && faFacebookF)
                    }
                  />
                </div>
              </div>
              <div style={{ width: "100%", padding: "1em" }}>
                <div
                  style={{
                    marginBottom: "0.75em",
                    borderBottom: "1px solid gray",
                    paddingBottom: "0.75em",
                  }}
                >
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1em",
                    }}
                  >
                    <li>
                      <p>from: {item.account.username}</p>
                      <sub style={{ color: "lightgray" }}>
                        {item.created_at}
                      </sub>
                    </li>

                    <li>
                      <ul
                        style={{
                          display: "flex",
                          listStyleType: "none",
                        }}
                      >
                        <li>
                          <FontAwesomeIcon
                            style={{
                              padding: "5px",
                              marginTop: "4px",

                              color:
                                (item.status === 1 && "red") ||
                                (item.status === 0 && "green"),
                            }}
                            icon={
                              (item.status === 0 && faCheck) ||
                              (item.status === 1 && faBan)
                            }
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            style={{
                              padding: "0.5em",
                              color: "lightCoral",
                            }}
                            icon={faTrash}
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            style={{
                              padding: "0.5em",
                              color: "lightGray",
                            }}
                            icon={faBars}
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>{item.entry.message}</p>
                </div>

                <div style={{ marginBottom: "1em" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "240px",
                      borderRadius: "1%",
                    }}
                    src={item.entry.image ? item.entry.image : noPng}
                    alt="images"
                  />
                </div>
                <div>
                  <ul
                    className="postIcons"
                    style={{
                      listStyleType: "none",
                      display: "flex",
                    }}
                  >
                    <li>
                      <div style={{ marginRight: "1.5em", display: "flex" }}>
                        <FontAwesomeIcon
                          className="heartColor"
                          icon={faHeart}
                        />
                        0
                      </div>
                    </li>
                    <li>
                      <div style={{ marginRight: "1.5em", display: "flex" }}>
                        <FontAwesomeIcon
                          className="retweetColor"
                          icon={faRetweet}
                        />
                        0
                      </div>
                    </li>
                    <li>
                      <div style={{ marginRight: "1.5em", display: "flex" }}>
                        <FontAwesomeIcon
                          className="commentColor"
                          icon={faMessage}
                        />
                        0
                      </div>
                    </li>
                    <li>
                      <div style={{ marginRight: "1.5em", display: "flex" }}>
                        <FontAwesomeIcon className="viewColor" icon={faEye} />0
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mainDiv">
        <h2 style={{ marginBottom: "5px" }}>17 June 2021</h2>
        {data.posts_by_date["2021-07-01"].map((item) => (
          <a style={{ all: "unset", cursor: "pointer" }} href={item.link}>
            <div key={item.link} className="card">
              <div
                className="box"
                style={{
                  backgroundColor:
                    (item.status === 3 && "#EDF1FF") ||
                    (item.status === 0 && "#F5DF4D") ||
                    (item.status === 1 && "#88B04B") ||
                    (item.status === 4 && "#FF6F61"),
                }}
              >
                <div className="item">
                  <FontAwesomeIcon
                    style={{
                      padding: "5px",
                      color: "white",
                      fontSize: "1.5em",
                    }}
                    icon={
                      (item.account.channel === "instagrambusiness" &&
                        faInstagram) ||
                      (item.account.channel === "twitter" && faTwitter) ||
                      (item.account.channel === "facebook" && faFacebookF)
                    }
                  />
                </div>
              </div>
              <div style={{ width: "100%", padding: "1em" }}>
                <div style={{ marginBottom: "1em" }}>
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1em",
                    }}
                  >
                    <li>
                      <p>from: {item.account.username}</p>
                      <sub style={{ color: "lightgray" }}>
                        {item.created_at}
                      </sub>
                    </li>

                    <li>
                      <ul
                        style={{
                          display: "flex",
                          listStyleType: "none",
                        }}
                      >
                        <li>
                          <FontAwesomeIcon
                            style={{
                              padding: "5px",
                              marginTop: "4px",

                              color:
                                (item.status === 1 && "red") ||
                                (item.status === 0 && "green"),
                            }}
                            icon={
                              (item.status === 0 && faCheck) ||
                              (item.status === 1 && faBan)
                            }
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            style={{
                              padding: "0.5em",
                              color: "lightCoral",
                            }}
                            icon={faTrash}
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            style={{
                              padding: "0.5em",
                              color: "lightGray",
                            }}
                            icon={faBars}
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>{item.entry.message}</p>
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "240px",
                      borderRadius: "1%",
                    }}
                    src={item.entry.image ? item.entry.image : noPng}
                    alt="images"
                  />
                </div>
                <div>
                  <ul
                    className="postIcons"
                    style={{
                      listStyleType: "none",
                      display: "flex",
                    }}
                  >
                    <li>
                      <div style={{ marginRight: "2em" }}>
                        <FontAwesomeIcon
                          className="heartColor"
                          icon={faHeart}
                        />
                        0
                      </div>
                    </li>
                    <li>
                      <div style={{ marginRight: "2em" }}>
                        <FontAwesomeIcon
                          className="retweetColor"
                          icon={faRetweet}
                        />
                        0
                      </div>
                    </li>
                    <li>
                      <div style={{ marginRight: "2em" }}>
                        <FontAwesomeIcon
                          className="commentColor"
                          icon={faMessage}
                        />
                        0
                      </div>
                    </li>
                    <li>
                      <div style={{ marginright: "2em" }}>
                        <FontAwesomeIcon className="viewColor" icon={faEye} />0
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
