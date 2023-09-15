import React, { useState } from "react";

// Initial Profile State...
const profileData = {
  name: "",
  email: "",
  phone: "",
  instaLink: "",
  youtubeLink: "",
};

const Profile = () => {
  const [isModalActive, setModalActive] = useState(false);
  const [activeBtn, setactiveBtn] = useState("basic");

  
    // isModalActive
    //   ? (document.body.style.overflow = "hidden")
    //   : (document.body.style.overflow = "scroll")
  

  // Profile-Form-State-Management...
  const [profileDetails, setProfileDetails] = useState(profileData);
  const [errorMsg, setErrorMsg] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // Submiting-Basic-Details-And-Moving-Contact-Tab...
  const submitBasicDetails = () => {
    const { name, email, phone } = profileDetails;
    if (name !== "" && email !== "" && phone !== "") {
      setactiveBtn("contact");
    } else {
      setErrorMsg(true);
    }
  };

  const displayProfile = () => {
    setShowProfile(true);
    setModalActive(false);
    setactiveBtn("basic");
  };

  return (
    <div className="profile__container">
      {!showProfile ? (
        <div className="add__profile" onClick={() => setModalActive(true)}>
          <p className="add__btn">
            <i className="ri-add-circle-line"></i>
          </p>
        </div>
      ) : (
        <div
          className="user__profile"
          style={{ display: showProfile ? "flex" : "none" }}
        >
          <h3>{profileDetails?.name}</h3>

          <ul className="profile__links">
            <li className="profile__link">
              <button className="profile__link__btn">
                <i className="ri-whatsapp-line"></i>
              </button>
              <a href={profileDetails?.phone} target="blank">
                {profileDetails?.phone}
              </a>
            </li>
            <li className="profile__link">
              <button className="profile__link__btn">
                <i className="ri-mail-line"></i>
              </button>
              <a href={profileDetails?.email} target="blank">
                {profileDetails?.email}
              </a>
            </li>
            <li className="profile__link">
              <button className="profile__link__btn profile__social__btn">
                <i className="ri-instagram-line"></i>
              </button>
              <a href={profileDetails?.instaLink} target="blank">
                Instagram
              </a>
            </li>
            <li className="profile__link">
              <button className="profile__link__btn profile__social__btn">
                <i className="ri-youtube-line"></i>
              </button>
              <a
                href={
                  profileDetails?.youtubeLink
                    ? profileDetails.youtubeLink
                    : "https://www.youtube.com/"
                }
                target="blank"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      )}

      <div
        className="profile__form__modal"
        id={isModalActive ? "active" : null}
        onClick={() => {
          setModalActive(false);
        }}
      >
        <div
          className="modal__overlay"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal__wrapper">
            <h3>Add New Profile</h3>

            <hr />

            <div className="tab__buttons">
              <button
                id={activeBtn === "basic" ? "active" : null}
                onClick={() => {
                  setactiveBtn("basic");
                }}
              >
                Basic
              </button>
              <button id={activeBtn === "contact" ? "active" : null}>
                Contact
              </button>
            </div>

            <div
              className="basic__details"
              style={{ display: activeBtn === "basic" ? "flex" : "none" }}
            >
              <label htmlFor="name" className="label">
                Enter Name*
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Eg. John Doe"
                id="name"
                className="input__field enter__name"
                onChange={handleChange}
              />
              <label htmlFor="email" className="label">
                Enter Email*
              </label>
              <input
                type="email"
                required
                placeholder="Eg. John@xyz.com"
                id="email"
                name="email"
                onChange={handleChange}
                className="input__field enter__email"
              />
              <label htmlFor="phone" className="label">
                Enter Phone*
              </label>
              <input
                type="number"
                required
                name="phone"
                placeholder="Eg. 9123456789"
                id="phone"
                onChange={handleChange}
                className="input__field enter__phone"
              />

              <p
                className="error__msg"
                style={{
                  display: errorMsg ? "inline-block" : "none",
                  color: "red",
                }}
              >
                All the fields are mandatory pls fill and submit
              </p>

              <button className="form__btn" onClick={submitBasicDetails}>
                Next
              </button>
            </div>

            <div
              className="contact__details"
              style={{ display: activeBtn === "contact" ? "flex" : "none" }}
            >
              <label htmlFor="insta__link" className="label">
                Instagram Link (Optional)
              </label>
              <input
                type="url"
                className="input__field"
                id="insta__link"
                name="instaLink"
                onChange={handleChange}
                placeholder="Eg. https://www.instagram.com/username"
              />

              <label htmlFor="insta__link" className="label">
                Youtube Link (Optional)
              </label>
              <input
                type="url"
                className="input__field"
                id="insta__link"
                name="youtubeLink"
                onChange={handleChange}
                placeholder="Eg. https://www.youtube.com/username"
              />

              <button className="form__btn" onClick={displayProfile}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
