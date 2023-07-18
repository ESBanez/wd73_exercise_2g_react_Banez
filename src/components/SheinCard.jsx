function StudentCard(props) {
    const { image, firstName, latestPrice, formerPrice,} = props;
  
    return (
      <>
        <div className={`card m-3 shadow`}>
          <div className="card-body">
            <p><img src={image} alt="Student Image" style={{ height: '27rem', width: '13rem' }} /></p>
            <p><span className="fw-bold">{firstName}</span></p>
            <p>Price: <span className="fw-bold" style={{textDecoration: 'line-through'}}>{formerPrice}</span></p>
            <p>Last Price: <span className="fw-bold" style={{textDecoration: 'overline', fontSize: '1.2rem'}}>{latestPrice}</span></p>
          </div>
        </div>
      </>
    );
  }
  
  export default StudentCard;