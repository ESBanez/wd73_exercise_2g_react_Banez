const Scrollaos = () => {
    return (
      <footer className="bg-dark text-light py-5 d-flex justify-content-center">
        <div className="container">
          <div className="row justify-content-center align-items-center"> {/* Center the content */}
            {/* Contact Us */}
            <div className="col-md-6">
              <h4>Contact Us</h4>
              <p>Email: esb.tailor@gmail.com</p>
              <p>Phone: +63 946 3263 920</p>
              <p>Pasig City</p>
            </div>
  
            {/* Follow Us */}
            <div className="col-md-6">
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Scrollaos;
  