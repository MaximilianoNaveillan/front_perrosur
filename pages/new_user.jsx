function NewUser() {
  return (
    <>
      <div id="equipo" className="container">
        <div className="content">
          <form>
            <div className="row">
              <div className="col-12">
                <p className="title">CUÉNTANOS MÁS SOBRE TI</p>
              </div>
              <div className="col-12">
                <div className="omrs-input-group">
                  <label htmlFor="user" className="omrs-input-filled">
                    <input id="user" required />
                    <span className="omrs-input-label">NOMBRE</span>
                    <span className="omrs-input-helper">...</span>
                  </label>
                </div>
              </div>
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 7rem;
        }
        .title {
          margin: 1.7rem 0 3.7rem;
        }
      `}</style>
    </>
  );
}

export default NewUser;
