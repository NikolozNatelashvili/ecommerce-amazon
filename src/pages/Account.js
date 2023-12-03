
    <div>
      <div className="account-container">
        <form className="account-form">
          <h2>Your Account</h2>
          <div className="input-container">
            <div className="label">
              <p className="text-md font-semibold">Name:</p>
            </div>
            <div className="input-field">
              <input
                name="userName"
                value={inputFields.userName}
                type="name"
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <div className="input-container">
            <div className="label">
              <p className="text-md font-semibold">Email:</p>
            </div>
            <div className="input-field">
              <input
                name="email"
                value={inputFields.email}
                type="email"
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <div className="input-container">
            <div className="label">
              <p className="text-md font-semibold">Old/New Password:</p>
            </div>
            <div className="input-field">
              <input
                name="newPassword"
                value={inputFields.newPassword}
                type={view ? "text" : "password"}
                onChange={handleChangeInput}
              />
              <RemoveRedEyeOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={() => setview(!view)}
              />
            </div>
          </div>

          <div className="btn-container">
            <button className="btn btn-save" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button className="btn btn-logout" onClick={handleLogoutUser}>
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
